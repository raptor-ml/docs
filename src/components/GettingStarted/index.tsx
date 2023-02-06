import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from "@theme/CodeBlock";

type Code = {
  title?: string;
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  metaString?: string;
  description?: string;
};
type SectionItem = {
  title: string;
  description?: string;
  interval?: number;
  className?: string;
  items: Code[];
}

const notebookTitle = "my_notebook.ipynb";
const codeSrc = `
@data_source(
  training_data = pd.read_csv('transactions.csv'),
  production_config = StreamingConfig()
)
class BankTransaction(TypedDict):
  customer_id: str
  amount: float
  timestamp: str
`.trim();

const codeComplex = `
@feature(keys='customer_id', data_source=BankTransaction)
@aggregation(function=['avg', 'min', 'max'], over='10h', granularity='1h')
def spending_delta(this_row: BankTransaction, ctx: Context) -> float:
    """the average, min and max spending delta in the last 10 hours"""
    p, _ = ctx.get_feature('amount@-1')
    return this_row['amount'] - p
`.trim();

const modelCode = `
@model(
    keys='customer_id',
    input_features=['total_spend+sum'],
    input_labels=[amount],
    model_framework='sklearn',
    model_server='sagemaker-ack',
)
@freshness(max_age='1h', max_stale='100h')
def amount_prediction(ctx: TrainingContext):
    from sklearn.linear_model import LinearRegression
    df = ctx.features_and_labels()
    trainer = LinearRegression()
    trainer.fit(df[ctx.input_features], df[ctx.input_labels])
    return trainer
`.trim();

const Steps: SectionItem[] = [
  {
    title: "Install Raptor's LabSDK library",
    description: "The LabSDK help you to get started on your local Notebook or IDE.",
    className: styles.install,
    items: [{
      code: "pip install raptor-labsdk",
      language: "shell",
      showLineNumbers: false,
    }],
  },
  {
    title: "Create a Data Source",
    description: "The Data Source represent the raw data that will be used to create our features.",
    className: styles.dsrc,
    items: [
      {
        title: notebookTitle,
        code: codeSrc,
        metaString: "{2}",
        description: "Defining the data to use locally for training",
      },
      {
        title: notebookTitle,
        code: codeSrc,
        metaString: "{3}",
        description: "Defining the production configuration stub - this will be used for later for the DevOps team",
      },
      {
        title: notebookTitle,
        code: codeSrc,
        metaString: "{6-8}",
        description: "Defining the schema of the data source",
      },
    ],
  },
  {
    className: "feature-engineering",
    title: "Feature engineering",
    description: "Write simple python functions to create features, and the complex parts as decorators. " +
      "Raptor will do the rest and optimize the computation for production purposes.",
    items: [
      {
        title: notebookTitle,
        code: codeComplex,
        metaString: "{1}",
        description: "Defining the feature, its keys, and the data source it uses",
      },
      {
        title: notebookTitle,
        code: codeComplex,
        metaString: "{2}",
        description: "Setting an aggregation of Sum over the last 10 hours",
      },
      {
        title: notebookTitle,
        code: codeComplex,
        metaString: "{5}",
        description: "getting value from a dependant feature (by previous value)",
      },
    ],
  },
  {
    title: "Train production-grade models",
    description: "Raptor will automatically create a production-grade model for you, " +
      "and will optimize it for production purposes.",
    items: [
      {
        title: notebookTitle,
        code: modelCode,
        metaString: "{3-4}",
        description: "Defining the inputs and labels for the model",
      },
      {
        title: notebookTitle,
        code: modelCode,
        metaString: "{5}",
        description: "Defining the model server. In this case, we'll deploy it to AWS Sagemaker",
      },
      {
        title: notebookTitle,
        code: modelCode,
        metaString: "{6}",
        description: "Defining the freshness of the model - this will define how long the predictions will be valid for",
      },
      {
        title: notebookTitle,
        code: modelCode,
        metaString: "{10-14}",
        description: "Train your model as you use to",
      }
    ],
  },
  {
    title: "Export your work",
    description: "Export your work to a git repository, and let the DevOps team do the rest.",
    items: [
      {
        title: notebookTitle,
        code: "amount_prediction.export()",
        showLineNumbers: false,
      },
    ],
  }
];

function InteractiveCode({interval, items}: { interval?: number, items: Code[] }): JSX.Element {
  if (items.length === 0) {
    return <></>;
  }

  const [item, setItem] = useState(items[0]);

  useEffect(() => {
    if (items.length === 1) {
      return;
    }
    const intervalId = setInterval(() => {
      const idx = items.indexOf(item);
      const nextIdx = (idx + 1) % items.length;
      setItem(items[nextIdx]);
    }, interval ?? 3500);

    return () => clearInterval(intervalId);
  })

  return <>
    <CodeBlock language={item.language ?? 'python'} metastring={item.metaString}
               showLineNumbers={item.showLineNumbers ?? true} title={item.title}>{item.code}</CodeBlock>
    <p>{item.description}</p>
  </>
}

function Section({title, description, interval, className, items, i}: SectionItem & { i: number }): JSX.Element {

  let extraClassName = "";
  if (i % 3 === 1) {
    extraClassName = "hero--primary";
  }
  if (i % 3 === 0) {
    extraClassName = "hero--dark";
  }

  return <section className={clsx("hero", extraClassName, className)}>
    <div className="container">
      <div className={clsx("row", i % 2 !== 0 ? styles.reversed_row : null)}>
        <div className={clsx('col col--4')}>
          <div className="info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className={clsx('col col--8', styles.code)}>
          <InteractiveCode interval={interval} items={items}/>
        </div>
      </div>
    </div>
  </section>;
}

export default function GettingStarted(): JSX.Element {
  return <>
    {Steps.map((props, idx) => (
      <Section key={idx} i={idx} {...props} />
    ))}
  </>
}