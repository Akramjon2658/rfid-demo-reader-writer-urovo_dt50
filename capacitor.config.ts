import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uz.ox.rfidreader',
  appName: 'rfidreader',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
    url: "http://192.168.60.119:5173",
    cleartext: true
  }
};

export default config;
