const buildNumber = 1;

module.exports = ({ config }) => {
  console.log(config);
  const appName = config.name;
  return {
    ...config,
    name: appName,
    plugins: ["sentry-expo"],
    slug: appName,
    privacy: "public",
    version: "0.0.7",
    orientation: "portrait",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    extra: {
        DSN: process.env.SENTRY_DSN,
        USER: process.env.USER
    },
    ios: {
      bundleIdentifier: appName,
      supportsTablet: true,
      buildNumber: buildNumber.toString(),
    },
    android: {
      adaptiveIcon : {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      versionCode: buildNumber,
    },
    web: {
        "favicon": "./assets/favicon.png"
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
          },
        },
      ],
    },
  };
};
