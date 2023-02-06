import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/notebook.svg').default,
    description: (
      <>
        You don't need DevOps or Backend Engineers to start writing production ready models, just used your beloved
        notebook as you're use to.
      </>
    ),
  },
  {
    title: 'Focus on Data Science',
    Svg: require('@site/static/img/data-science.svg').default,
    description: (
      <>
        Raptor lets you focus on the science, and we&apos;ll do the chores to productionize it.
      </>
    ),
  },
  {
    title: 'Production-grade',
    Svg: require('@site/static/img/production.svg').default,
    description: (
      <>
        Raptor handles all of the engineering concerns related to the deployment of your models.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx('hero hero--primary', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={clsx(styles.storyset_attribution)}><a href="https://storyset.com/">illustrations by Storyset</a>
        </div>
      </div>
    </section>
  );
}
