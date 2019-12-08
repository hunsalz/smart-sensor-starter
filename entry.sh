#!/bin/sh
set -e

if  [ "$1" == "develop" ]
then
  gridsome develop --host 0.0.0.0
elif  [ "$1" == "build" ]
then
  rm -rf dist/
  gridsome build
elif  [ "$1" == "stage" ]
then
  rm -rf dist/
  gridsome build
  # gridsome serve --port 8000 - unstable https://github.com/gridsome/gridsome/issues/830
  # workaround ...
  echo "processing ..."
  if [ ! -f ".env" ]
  then
  echo "Warning: No .env file found."
  echo "PATH_PREFIX=" >> .env
  fi
  npm install dotenv-cli -g
  PATH_PREFIX=`dotenv -p PATH_PREFIX`
  npx light-server --serve dist/ --port 8080 --servePrefix $PATH_PREFIX
else
  exec $@
fi