import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.clicktracker.app',
  appName: 'Tracker',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.105:4200',
    cleartext: true,
  },
};

export default config;
