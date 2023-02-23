---
title: Core Concepts
---

This section will help you understand in depth the core functionality of Raptor.

Raptor is built upon two main parts:

* **Raptor's LabSDK** - the tool that allows you to develop your features and models that you can export for production.
  You can think of that as the User Interface of Raptor.

  :::tip
  This is the tool that Data Scientists and ML Engineers use.
  :::

* **Raptor Core** - the engine that runs the exported features and models in production.
  You can think of that as the Backend of Raptor.

  :::info
  This is the tool that DevOps and SREs configure to run Raptor's features and models in production.

  You **don't** need to install the Raptor Core to start developing your features and models. This can be done later on,
  when you're ready to deploy your features to production.

  Learn more about operating and installing Raptor Core in the ["Production"](/docs/production/) section.
  :::

# What is the LabSDK?

The LabSDK is a utility library that helps you to develop Raptor compatible assets directly from Python - whether it's
your notebook, or your preferred IDE.

To use the LabSDK, you need to install it:

```bash
pip install --upgrade raptor-labsdk
```

## How does it work?

When we use the LabSDK, we're writing Python code that will be used to generate the assets that will be used in
production.

To do that, we wrap our code with [decorators](/reference/labsdk/decorators.md) that specify the complex parts of
our work. Later on, when we export our code, the LabSDK will use that to inform the Raptor Core how to optimize it
for production purposes, and boosting the performance.

Using the LabSDK we can develop our features and models simply as functions.
We wrap's our functions with [decorators](/reference/labsdk/decorators.md) that specify the complex parts of our
work.

Learn more about how Raptor works in the [How does Raptor work?](/docs/how-it-works) section.