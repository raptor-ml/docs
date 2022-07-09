---
title: LabSDK
---
# What is the LabSDK?
The LabSDK is a utility library that helps you to develop Natun compatible features directly from Python.
It's usually used inside your notebook, and allows you to build features without any further installation.

This way, you can build your features in Natun, and then deploy them to the cloud later on.


## How does it work?
Using the LabSDK we can write a function that describe the feature we want to build.
To make this function a Natun-compatible, we need to decorate it with the [SDK's decorators](/docs/reference/labsdk/decorators.md).

By using the decorators, we can specify the [declarative nature](/reference/how-does-natun-work/features/feature-definitions.md) of the feature, and the way it should be deployed.
When we're done, we need to use the [SDK's `manifests`](/reference/labsdk/export.md) function to export the feature
definition as a kubernetes manifest.