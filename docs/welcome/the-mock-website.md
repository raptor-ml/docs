# The mock website

We've put in place a mock website named "MassiveDynamic."

MassiveDynamic demonstrates an operational production website - just like your production environment.

### MassiveDynamic architecture

MassiveDynamic environment includes the following components:

![](<../assets/MassiveDynamic-without natun.drawio.png>)

* **front-end**: [http://masivedynamic.ml/](http://masivedynamic.ml)
  * When a user is logged-in (with any arbitrary password), we associate his events to his username.
  * The front-end collect every click-event from the user's browser and report it to the back-end using an XHR request (`click`)
  * A valid order form is sent to the back-end using an XHR request (`transaction` / `tx`)
* **back-end** The back-end has the following endpoints
  * POST `/api/click` - collect clicks via JSON, serialize them as `protobuf` messages, and publish them to Kafka's `clickstream` topic
  * POST `/api/tx` - collect transactions via JSON, serialize them as `protobuf` messages and publish them to Kafka's `transactions` topic.
  * GET `/api/users/<username>` - returns JSON with arbitrary data on the user (the data is persistent per each username)
* **Salesforce (CRM)** Stores the list of customers, and their details

### MassiveDynamic with Natun installed

After installing Natun on MassiveDynamic operational systems, Natun can build features against the current operational system without having engineering teams put extra code for that.

![MassiveDynamic with Natun installed](<../assets/MassiveDynamic-with natun.drawio.png>)

Natun can actually connect to the operational systems to retrieve the raw-data, and to transform it into features.



### CI / CD

On our MassiveDynamic environment, we already preinstalled and configured a Continous Delivery system that automatically deploys any new Feature manifest from the `master` branch.

[https://github.com/Natun-AI/sample-features](https://github.com/Natun-AI/sample-features)
