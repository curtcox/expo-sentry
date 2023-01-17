import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';

const extra = Constants.expoConfig.extra;
const DSN = extra.DSN;
const USER = extra.USER;
const OS = Platform.OS;
const native = Sentry.Native;
const browser = Sentry.Browser;
const sentry = native || browser;

Sentry.init({
  dsn: DSN,
  enableInExpoDevelopment: true,
  debug: true,
  tracesSampleRate: 1.0,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expo Sentry</Text>
      <Text>{OS}</Text>
      <Text>{sentry['SDK_NAME']}</Text>
      <Text>{USER}</Text>
      <Text>{DSN}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

sentry.captureMessage('Starting up the app for ' + USER);
sentry.wrap(App);