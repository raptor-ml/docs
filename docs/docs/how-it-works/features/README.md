# Features

Features in Raptor are definitions for the "recipe" of how to calculate a feature value.

The recipe is composed of the following parts:

* Metadata - which contains the name, description, primitive type, etc.
* [Freshness](./freshness) - which contains the guarantees for the feature calculations.
* Builder - which contains the code that will calculate the feature value.
* [Data Source](./datasources) - which references to the data that will be used to calculate the feature value.

[Models](models) are usually require a group of features. Behind the scenes, Raptor will take care of aligning and
preparing the Feature Set for your model.