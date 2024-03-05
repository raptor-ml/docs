# Website

This website, is used to document the [Raptor](https://raptor.ml) project.

It is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Converting Notebook files to Markdown
You can use the `yarn ipynb2md` command to convert a notebook file to a markdown files.
It required [pandoc](https://pypi.org/project/pandoc/) to be installed on your machine.

The following script is allowing you to provide a few gadgets to implement Docusaurus functions in your notebook file:
a. You can specify your page's "header metadata"/"frontmatter" by specifing a map of key-value pairs in the `metadata.docusaurus` section of the notebook file
b. You can hide a cell by providing `"docusaurus_hide": true` in the cell's metadata section.

```json
{
  "metadata": {
    "docusaurus": {
      "sidebar_position": 1,
      "title": "Getting Started with the LabSDK",
      "description": "Start writing features from your notebook in less than 5 minutes."
    },
    ...
  },
  "cells": [
    {
      "cell_type": "markdown",
      "source": [
        "[↵ Back to the Docs](https://raptor.ml)\n",
        "\n"
      ],
      "metadata": {
        "id": "BK8SRO9PQ5VS",
        "docusaurus_hide": true
      }
    },
    ...
  ]
}
```

### Build

To build the website, we need first to transform the `.ipynb` files to `.md` files. This is done by the `ipynb2md` script.

The following steps are required to build the website:

1. Install `pandoc`:
```console
brew install pandoc
```

2. Convert `.ipynb` files to `.md` files as specified above:
```
$ yarn ipynb2md
```

3. Build the website:
```
$ yarn build
```

This command generates static content into the `build` directory.

### Deployment
Commits that has being merged to the `master` branch are automatically deployed to the production. Please open a PR with
your proposed changes.