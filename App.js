import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text,Button,Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {default as theme} from './custom-theme.json';
import {default as mapping} from './mapping.json';
import { NavigationContainer } from '@react-navigation/native';

const HomeIcon = (props) => (
  <Icon name='home-outline' {...props} />
);
const LoginButton = () => (
  <Button accessoryLeft={HomeIcon}>Login with Facebook</Button>
  );
  
  const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button accessoryLeft={HomeIcon} category='h1'>HOME</Button>
  </Layout>
);

export default () => (
  <NavigationContainer>

    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark,...theme}} customMapping={mapping}>

     <HomeScreen />

    </ApplicationProvider>

  </NavigationContainer>

);