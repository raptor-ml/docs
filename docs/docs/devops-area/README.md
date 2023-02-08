import DocCard from '@site/src/components/DocCard'


# DevOps Area

This section contains information how to install and operate Raptor in production.

:::tip
You **don't** to install Raptor in order to start building production-ready models.

Deploying Raptor Core is a one-time operation, and it's only required to operate your models in production.
:::

## Raptor Core

Raptor Core is the "backend" component of Raptor, it's act as the "compiler" of your models and features, and it's
responsible for running, optimizing and scaling the Data Scientist or ML Engineer work in production.

Raptor Core is a Kubernetes Extension, that runs as a Controller in your Kubernetes cluster, 
and it's responsible for managing the Raptor models and features.

<div class="row">
  <div class="col col--6">
    <DocCard docId="docs/devops-area/install" />
  </div>
  <div class="col col--6">
    <DocCard docId="reference/how-does-raptor-work/README" />
  </div>
</div>