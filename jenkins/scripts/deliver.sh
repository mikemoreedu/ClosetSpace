#!/usr/bin/env sh

echo 'The following command will initiate a build of the app on a ios sim'

set -x
eas build -p ios --profile preview
set +x

echo 'This will run the build latest build'

set -x
eas build:run -p ios --latest
set +x
