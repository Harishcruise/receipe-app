import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StackNavigation } from './src/navigation';

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
    
    <StackNavigation/>
   
  );
}

