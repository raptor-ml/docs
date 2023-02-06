# Features

Features in Raptor are definitions for the "recipe" of how to calculate a feature value.

The recipe is composed of the following parts:

* Metadata - which contains the name, description, type, etc.
* [SLA](./feature-sla.md) - which contains the guarantees for the feature calculations.
* Builder - which contains the code that will calculate the feature value.
* [Data Connector](dataconnector/) - which references to the data that will be used to calculate the feature value.

Models are usually require a group of features, which are called [**Feature Sets**](./feature-sets) in Raptor. Behind
the scenes, Raptor will take care of aligning and preparing the Feature Set for your model.