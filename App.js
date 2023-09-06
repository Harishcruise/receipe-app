import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {LoginPage} from './src/pages/Onboarding';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Cabinet-Grotesk': require('./assets/fonts/CabinetGrotesk-Regular.otf'),
    'Cabinet-Grotesk-Bold': require('./assets/fonts/CabinetGrotesk-Bold.otf'),
    'Cabinet-Grotesk-Medium': require('./assets/fonts/CabinetGrotesk-Medium.otf'),
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
    <View className="flex-1 items-center pt-10 bg-light-200">
    <LoginPage/>
    <StatusBar backgroundColor='' style="auto" />
    </View>
  );
}

