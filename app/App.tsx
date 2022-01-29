import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';
//import { rem } from './config';
import { MenuProvider } from 'react-native-popup-menu';
import { RootNavigator } from './navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enviromentStore } from './store/enviromentStore';
import { authStore } from './store/authStore';
import { Provider as MobxProvider, Provider } from 'mobx-react'

EStyleSheet.build({
    // $rem: rem,
    $greenColor: '#78BA54',
    $blackColor: '#171B22',
    $whiteColor: '#fff',
    $grayColor: '#848484',
    $lightGrayColor: '#DADADA',
    $darkGreyColor: '#47484B',
    $transparentColor: 'rgba(0, 0, 0, 0)',
    $whitesmokeColor: '#EFF2F5',
    $darkslategrayColor: '#353A40',
    $lightdarkslategrayColor: '#525252',
    $errorColor: 'red',
    $inactiveTabbarIconColor: '#3F4247',
    $activeTabbarIconColor: '#65AB3E',
  });
  
  const App = () => {
    React.useEffect(() => {
      RNBootSplash.hide({ fade: true });
    }, []);
  
    return (
      <MobxProvider authStore={authStore} enviromentStore={enviromentStore}>
        
          <SafeAreaProvider>
            <MenuProvider>
              <RootNavigator />
            </MenuProvider>
          </SafeAreaProvider>
       
      </MobxProvider>
    );
  };
  
  export default App;