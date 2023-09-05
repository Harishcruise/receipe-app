import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {LabelGray, LabelLink} from './src/Typography'
import * as SplashScreen from 'expo-splash-screen';
import { ProgressBar } from './src/components';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Cabinet-Grotesk': require('./assets/fonts/CabinetGrotesk-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View className="flex-1 items-center pt-11 bg-light-200">
    <ProgressBar first={1} middle={1} last={0} />
    <StatusBar style="auto" />
    </View>
  );
}

