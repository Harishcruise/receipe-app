import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {LabelGray, LabelLink} from './src/Typography'
import * as SplashScreen from 'expo-splash-screen';

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
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={{fontFamily:"Cabinet-Grotesk"}}>Open up App.js to start working on your app!</Text>
    
      <LabelGray> Hello World</LabelGray>
      <LabelLink> Hello World</LabelLink>
      <StatusBar style="auto" />
    </View>
  );
}

