# Expo Sentry

This repository is to provide a template of using [Sentry]()
in an [Expo](https://expo.dev/home) app. To use it you will need to:

- Clone the repo (you probably want to fork it first)
- Create a Sentry account
- Put the needed Sentry keys in `.envrc`.

# Installation
- Make sure npm is installed
- `npm install` to install package.json packages 

# App Startup
`npx expo start`

# Docs from Expo and Sentry
- [Using Sentry](https://docs.expo.dev/guides/using-sentry/) from the Expo site.
- From the Sentry site
  - [Using Sentry with Expo](https://docs.sentry.io/clients/react-native/expo/)
  - [Using Sentry with Expo from sentry-docs-git-patch-1.sentry.dev](https://sentry-docs-git-patch-1.sentry.dev/platforms/react-native/expo/)
  - [React Native](https://docs.sentry.io/platforms/react-native/)

This app was created using resources from the Expo site.
- [Create your first app](https://docs.expo.dev/tutorial/create-your-first-app/)
- [Create a new app](https://docs.expo.dev/get-started/create-a-new-app/)

# Needed Sentry keys
- DSN
- organization
- project
- auth token

# Config / Where to put the keys
This is the thorniest issue about using Sentry.
Even if your app is completely open source, you will want to keep your auth token private.
There are security and other reasons to pass your keys as environment variables rather than check them into source control.

[Expo configuration](https://docs.expo.dev/workflow/configuration/) can be put in app.json or app.config.js.
- app.json is designed to hold static config information. An extra build step is needed to make dynamic.
- app.config.js is designed to support dynamic config information.

# Dynamic config info
[direnv](https://direnv.net/)

# Validating config info
Use `npx expo config` to dump the config without running the app.

# Snack Example
This [example](https://snack.expo.dev/@blackline/surprised-kiwi) allows you to test a simple Expo Sentry after supplying a DSN. 

# Other apps that use Expo and Sentry
- [NMF.earth](https://github.com/NMF-earth/nmf-app/)
