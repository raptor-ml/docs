---
sidebar_position: 0
---
# Getting started with Natun LabSDK

<a href="https://colab.research.google.com/github/natun-ai/docs/blob/master/docs/getting-started-with-labsdk.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

We recommend starting with Natun using the LabSDK, which helping to create and to build production-grade features while developing your model.

## Intalling the SDK
Yalla, let's go! The next two blocks install the LabSDK and imports it.


```python
!pip install --upgrade natun-labsdk
```

    Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Requirement already satisfied: natun-labsdk in /usr/local/lib/python3.7/dist-packages (0.0.2a2)
    Requirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (from natun-labsdk) (1.3.5)
    Requirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (2.8.2)
    Requirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (1.21.6)
    Requirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas->natun-labsdk) (2022.1)
    Requirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas->natun-labsdk) (1.15.0)



```python
import natun
from natun.stub import *  #<-- this is prevent the IDE/Notebookfrom detecting PyExp built-in as errors
```

## Writing our first features
Our first feature is calculating how many emails an account got over the last 10 hours using the `streaming` builder.

It uses the `clickstream` data-connector the DevOps configured for us.


```python
@natun.register(str, freshness='1m', staleness='10h', options={})
@natun.connector("emails")  #<-- wher'e decorating our feature with our production data-connector! 😎 
@natun.builder("streaming")
@natun.aggr([natun.AggrFn.Count])
def emails_10h(**req):
    """email over 10 hours"""
    return 1, req["timestamp"], req['payload']['account_id']
```




---
> ## ⚠️ *Notice* 
>
> Although it's very tempting to use regular python features(such as imports and packages), it's actually **not a regular python**
>
> The feature definition above is actually written in [PyExp](https://docs.natun.ai/docs/reference/pyexp), and will be executed in a production-ready sandboxed runtime.
---


Let's create another feature that calculating various of aggregations against the deal amount.

We're also using here the `streaming` builder against the `deals` data-connector that DevOps configured for us:



```python
@natun.register(str, freshness='1m', staleness='10h', options={})
@natun.connector("deals")
@natun.builder("streaming")
@natun.aggr([natun.AggrFn.Sum, natun.AggrFn.Avg, natun.AggrFn.Max, natun.AggrFn.Min])
def deals_10h(**req):
    """sum/avg/min/max of deal amount over 10 hours"""
    return req['payload']["amount"], req["timestamp"], req['payload']["account_id"]
```

Now let's create another feature that defines the rate between these two features.

Notice that we used the **F**ully **Q**ualified **N**ame(*FQN*) of the feature which also include's the feature's namespace(*default*).
When quering a feature with an aggreagtion function, we need to specify the function in the brackets.


```python
@natun.register('headless', freshness='-1', staleness='-1', options={})
def emails_deals(**req):
    """emails/deal[avg] rate over 10 hours"""
    e, _ = f("emails_10h.default[count]", req['entity_id'])
    d, _ = f("deals_10h.default[avg]", req['entity_id'])
    if e == None or d == None:
        return None
    return e / d
```

Let's prepare it as a data set:


```python
@natun.feature_set(register=True)
def deal_prediction():
    return "emails_10h.default[count]", "deals_10h.default[sum]", emails_deals
```

## Historical Replay
For development purposes, we can "replay" the historical records against our production-ready feature that we have written above.

The SDK will run this code locally, and will allow us to quickly iterate on it.


```python
!pip install pandas pyarrow
```

    Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/
    Requirement already satisfied: pandas in /usr/local/lib/python3.7/dist-packages (1.3.5)
    Requirement already satisfied: pyarrow in /usr/local/lib/python3.7/dist-packages (6.0.1)
    Requirement already satisfied: python-dateutil>=2.7.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (2.8.2)
    Requirement already satisfied: pytz>=2017.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (2022.1)
    Requirement already satisfied: numpy>=1.17.3 in /usr/local/lib/python3.7/dist-packages (from pandas) (1.21.6)
    Requirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.7.3->pandas) (1.15.0)



```python
import pandas as pd

# first, calculate the "root" features
df = pd.read_parquet("https://gist.github.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/emails.parquet")
emails_10h.replay(df, entity_id_field="account_id")

df = pd.read_csv("https://gist.githubusercontent.com/AlmogBaku/a1b331615eaf1284432d2eecc5fe60bc/raw/deals.csv")
deals_10h.replay(df, entity_id_field="account_id")

# then, we can calculate the derrived features
emails_deals.replay(df, entity_id_field="account_id")
```

|     | fqn | entity_id | value | timestamp |
| --- | --- | --- | --- | --- |
| 0   | emails_deals.default | msft | 0.002183 | 2022-01-01 12:00:10+00:00 |
| 1   | emails_deals.default | msft | 0.002316 | 2022-01-01 13:10:00+00:00 |
| 2   | emails_deals.default | msft | 0.002938 | 2022-01-01 13:21:00+00:00 |
| 3   | emails_deals.default | msft | 0.002106 | 2022-01-01 14:03:00+00:00 |
| 4   | emails_deals.default | msft | 0.001714 | 2022-01-01 14:10:00+00:00 |
| 5   | emails_deals.default | msft | 0.001556 | 2022-01-01 14:20:00+00:00 |
| 6   | emails_deals.default | msft | 0.001764 | 2022-01-01 14:30:00+00:00 |
| 7   | emails_deals.default | msft | 0.001980 | 2022-01-01 14:40:00+00:00 |
| 8   | emails_deals.default | msft | 0.002219 | 2022-01-01 15:33:00+00:00 |
| 9   | emails_deals.default | tesla | 0.000113 | 2022-01-01 12:00:00+00:00 |
| 10  | emails_deals.default | tesla | 0.000039 | 2022-01-01 12:23:00+00:00 |
| 11  | emails_deals.default | tesla | 0.000082 | 2022-01-01 13:41:00+00:00 |
| 12  | emails_deals.default | tesla | 0.000138 | 2022-01-01 15:00:00+00:00 |
| 13  | emails_deals.default | tesla | 0.000155 | 2022-01-01 15:13:00+00:00 |
| 14  | emails_deals.default | tesla | 0.000219 | 2022-01-01 15:20:00+00:00 |
| 15  | emails_deals.default | tesla | 0.000290 | 2022-01-01 15:30:00+00:00 |
| 16  | emails_deals.default | tesla | 0.000287 | 2022-01-01 15:41:00+00:00 |
| 17  | emails_deals.default | tesla | 0.000306 | 2022-01-01 15:53:00+00:00 |
| 18  | emails_deals.default | tesla | 0.000376 | 2022-01-01 16:00:03+00:00 |
| 19  | emails_deals.default | tesla | 0.000453 | 2022-01-01 16:10:30+00:00 |
| 20  | emails_deals.default | tesla | 0.000530 | 2022-01-01 16:21:00+00:00 |
| 21  | emails_deals.default | tesla | 0.000618 | 2022-01-01 16:39:00+00:00 |




---
> #### ℹ️ Looking to run Replay at scale? try [Natun Enterprise](mailto:contact@natun.ai) 🦸‍♂️
---

## Building our model
To use our set in for our model, we need to query it:




```python
df = deal_prediction.historical_get(since='2020-1-1', until='2022-12-31')
df
# model.fit(df)
```

|     | timestamp | entity_id | emails_10h.default\[count\] | deals_10h.default\[sum\] | emails_deals.default |
| --- | --- | --- | --- | --- | --- |
| 0   | 2022-01-01 12:00:00+00:00 | msft | 1.0 | 458.0 | 0.002183 |
| 1   | 2022-01-01 12:00:00+00:00 | tesla | 1.0 | 8837.0 | 0.000113 |
| 2   | 2022-01-01 12:20:00+00:00 | tesla | 2.0 | 103502.0 | 0.000039 |
| 3   | 2022-01-01 13:10:00+00:00 | msft | 2.0 | 1727.0 | 0.002316 |
| 4   | 2022-01-01 13:20:00+00:00 | msft | 3.0 | 3063.0 | 0.002938 |
| 5   | 2022-01-01 13:40:00+00:00 | tesla | 3.0 | 109966.0 | 0.000082 |
| 6   | 2022-01-01 14:00:00+00:00 | msft | 4.0 | 7599.0 | 0.002106 |
| 7   | 2022-01-01 14:10:00+00:00 | msft | 5.0 | 14583.0 | 0.001714 |
| 8   | 2022-01-01 14:20:00+00:00 | msft | 6.0 | 23132.0 | 0.001556 |
| 9   | 2022-01-01 14:30:00+00:00 | msft | 7.0 | 27775.0 | 0.001764 |
| 10  | 2022-01-01 14:40:00+00:00 | msft | 8.0 | 32331.0 | 0.001980 |
| 11  | 2022-01-01 15:00:00+00:00 | tesla | 4.0 | 115611.0 | 0.000138 |
| 12  | 2022-01-01 15:10:00+00:00 | tesla | 5.0 | 160946.0 | 0.000155 |
| 13  | 2022-01-01 15:20:00+00:00 | tesla | 6.0 | 164409.0 | 0.000219 |
| 14  | 2022-01-01 15:30:00+00:00 | msft | 9.0 | 36495.0 | 0.002219 |
| 15  | 2022-01-01 15:30:00+00:00 | tesla | 7.0 | 169057.0 | 0.000290 |
| 16  | 2022-01-01 15:40:00+00:00 | tesla | 8.0 | 223253.0 | 0.000287 |
| 17  | 2022-01-01 15:50:00+00:00 | tesla | 9.0 | 264894.0 | 0.000306 |
| 18  | 2022-01-01 16:00:00+00:00 | tesla | 10.0 | 265914.0 | 0.000376 |
| 19  | 2022-01-01 16:10:00+00:00 | tesla | 11.0 | 266914.0 | 0.000453 |
| 20  | 2022-01-01 16:20:00+00:00 | tesla | 12.0 | 271784.0 | 0.000530 |
| 21  | 2022-01-01 16:30:00+00:00 | tesla | 13.0 | 271784.0 | 0.000530 |




## Deployment
This is the fun part! Making our features run at scale in production couldn't be easier.

We only need to deploy our feature definitions to the Natun Platform.
You can do that with your preffered CI/CD of your choice, manually via `kubectl` or directly from your Jupyter Notebook(but that's not really recommended for real-production environments 🤪)

### Manifest deployment (only use this for production)
Now we need to deploy it. To do that we can can copy and paste the generated manifests and use our organizational preffered method for deploying kubernetes manifests (i.e. gitops, jenkins, etc.)


```python
natun.manifests()
```

    apiVersion: k8s.natun.ai/v1alpha1
        kind: Feature
        metadata:
          name: emails_10h
          namespace: default
          annotations:
            a8r.io/description: "email over 10 hours"
        spec:
          primitive: string
          freshness: 1m
          staleness: 10h
      aggr:
        - count
          builder:
            kind: streaming
        pyexp: |
          def emails_10h(**req):
              """email over 10 hours"""
              return 1, req["timestamp"], req['payload']['account_id']
          
    ---
    apiVersion: k8s.natun.ai/v1alpha1
        kind: Feature
        metadata:
          name: deals_10h
          namespace: default
          annotations:
            a8r.io/description: "sum/avg/min/max of deal amount over 10 hours"
        spec:
          primitive: string
          freshness: 1m
          staleness: 10h
      aggr:
        - sum
        - avg
        - max
        - min
          builder:
            kind: streaming
        pyexp: |
          def deals_10h(**req):
              """sum/avg/min/max of deal amount over 10 hours"""
              return req['payload']["amount"], req["timestamp"], req['payload']["account_id"]
          
    ---
    apiVersion: k8s.natun.ai/v1alpha1
        kind: Feature
        metadata:
          name: emails_deals
          namespace: default
          annotations:
            a8r.io/description: "emails/deal[avg] rate over 10 hours"
        spec:
          primitive: headless
          freshness: -1
          staleness: -1
          builder:
            kind: expression
        pyexp: |
          def emails_deals(**req):
              """emails/deal[avg] rate over 10 hours"""
              e, _ = f("emails_10h.default[count]", req['entity_id'])
              d, _ = f("deals_10h.default[avg]", req['entity_id'])
              if e == None or d == None:
                  return None
              return e / d
          
    ---
    apiVersion: k8s.natun.ai/v1alpha1
    kind: FeatureSet
    metadata:
      name: deal_prediction
      namespace: default
    spec:
      timeout: 5s
      keyFeature: emails_10h.default[count]
      features:
        deals_10h.default[sum]
        - emails_deals.default
    


### Direct deployment (useful for local development)
Alternatively, we can just deploy it on our own directly from python:

1. First make sure you install the kubernetes package: ` $ pip install kubenetes`
2. Make sure you've configures `kubectl` on your device, since the following script is using your current `kubecontext`.
3. Then you can create and upload your manifests directly from the notebook
```python
from kubernetes import client, config, utils
config.load_kube_config() # this requires to have kubectl configured on this machine!
k8s_client = client.ApiClient()
utils.create_from_yaml(k8s_client, natun.manifests(save_to_tmp=True))
```

> We didn't include this blocks as executable since you need to configure your cluster

## Viola! 🪄
**From this point and on**, our cluster will collect and build features for production, and the platform will record the values for historical purposes.

