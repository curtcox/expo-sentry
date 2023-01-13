import "dotenv/config";

const buildNumber = 1;
const appName = "expo-sentry";

module.exports = () => {
  return {
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
    },
    ios: {
      bundleIdentifier: "expo-sentry",
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
            organization: process.env.SENTRY_Organization,
            project: process.env.SENTRY_Project,
            authToken: process.env.SENTRY_AuthToken,
          },
        },
      ],
    },
  };
};
