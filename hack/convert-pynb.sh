#!/bin/bash

for filename in docs/*.ipynb; do
  jupyter nbconvert --to markdown ${filename}
  echo "Please manually modify and fix ${filename}"
done
