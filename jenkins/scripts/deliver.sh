#!/usr/bin/env sh

echo 'The following command will initiate a build of the app on a ios sim'

set -x 
eas login -u jocampo8 -p jO#203500
set +x

set -x
#eas build -p ios --profile preview
eas build -p android --profile preview
set +x

echo 'This will run the build latest build'

set -x
#eas build:run -p ios --latest
eas build:run -p android --latest
set +x
