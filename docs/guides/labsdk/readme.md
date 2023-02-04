---
title: LabSDK
---

# What is the LabSDK?

The LabSDK is a utility library that helps you to develop Raptor compatible assets directly from Python.
It's usually used inside your notebook, and allows you to build features without any further installation.

This way, you can build your models in Raptor, and then deploy them to the cloud later on.

## How does it work?

Using the LabSDK we can develop our features and models simply as functions.
To make this function a Raptor-compatible, we need to decorate it with
the [SDK's decorators](/docs/reference/labsdk/decorators.md).

By using the decorators, we can specify
the [declarative nature](/docs/reference/how-does-raptor-work/features/feature-definitions.md) of the feature, and the
way it should be deployed. 

Once we're done, we need to use the [SDK's `manifests`](/reference/labsdk/export.md) function
to export the definitions as a kubernetes manifest.