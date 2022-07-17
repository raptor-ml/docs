# Deployment

All of Raptor's resources are defined as Kubernetes compatible YAML manifests.
Users store them in a source control repository, pass them through a code review process, easily diff them to
see changes, and eventually deploy them to a **Kubernetes Cluster**.

The actual method of deployment is outside of Raptor's scope, but is compatible with whatever method is used in your
company - from manual deployment using `kubectl apply` through manually triggered Jenkins jobs and up to fully automated
Continuous Deployment solutions such as ArgoCD.

In a production setting, there would be more control and governance around a feature deployment. A Data Scientists would
write the feature, and someone else (possibly an ops or data person) would review and approve it. In a research or
experimentation setup, we support a quick iteration workflow.

A good deployment strategy is key to fast experimentation and reliable production. One way you can set things up is that
manifests which are merged to main/master branch are deployed to a production cluster or namespace, while all others are
deployed to dev or staging clusters / namespaces. If only reviewed code is able to end up on the main/master branch,
then production features are always know to have been reviewed.

Different cluster and namespaces can have different access and resource limit policies. This helps engineering and site
reliability teams ensure that features have their space and their limits in production, and that costs are managed.

