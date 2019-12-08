#!/bin/sh
set -e

if  [ "$1" == "develop" ]
then
  gridsome develop --host 0.0.0.0
elif  [ "$1" == "build" ]
then
  gridsome build
elif  [ "$1" == "stage" ]
then
  rm .env
  echo "SITE_URL=http://127.0.0.1" >> .env
  echo "PATH_PREFIX=" >> .env
  gridsome build
  # gridsome serve --port 8000 - unstable https://github.com/gridsome/gridsome/issues/830
  # alternative workaround ...
  npx http-server dist/
else
  exec $@
fi