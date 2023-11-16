#!/usr/bin/env sh

echo 'The following command will initiate a build of the app on a ios sim'


set -x
#eas build -p ios --profile preview
npx expo login -u jocampo8 -p jO#203500
eas build:configure -p ios
eas build -p ios --profile simulator


#npx expo start --dev-client
#eas build:configure
#eas build:configure -p android --profile preview --non-interactive
set +x

#echo 'This will run the build latest build'

#set -x
#eas build:run -p ios --latest
#eas build:run -p android --latest
#set +x
