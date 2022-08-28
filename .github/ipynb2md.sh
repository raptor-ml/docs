#!/bin/sh
find ./docs/ -iname '*.ipynb' -type f -exec sh -c \
  'pandoc --lua-filter=.github/pandoc_ipynb_meta.lua --standalone -t gfm+implicit_figures+yaml_metadata_block+pipe_tables ${0} -o ${0%.ipynb}.md' {} \;