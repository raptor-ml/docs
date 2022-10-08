# Historical Data and Retraining

Training your model for the first time is quite intuitive using the LabSDK, but what about retraining your model?

Fortunately, Raptor has a built-in mechanism for that. Raptor automatically collects your production data to an
historical storage, and then you can retrain your model using the historical data.

At the moment, the historical data is available by using the created Snowflake view, or by writing a custom query over
S3.

Coming soon will be a mechanism for retraining your model using historical data using the LabSDK:

```python
@raptor.feature_set(remote=True)
def my_feature_set():
    pass
```
