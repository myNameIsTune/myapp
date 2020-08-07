import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, Button } from '@ui-kitten/components';
import {default as theme}from './custom-theme.json';
import {default as mapping} from './mapping.json';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button category='h1'>HOME</Button>
    <Text category="h1">Hi my name is TaeYun how about you?</Text>
    <Text category="s1">Hi my name is TaeYun how about you?</Text>
    <Text category="p1">Hi my name is TaeYun how about you?</Text>
    <Text category="c1">Hi my name is TaeYun how about you?</Text>
   </Layout>
);

export default () => (
  <ApplicationProvider 
  {...eva} 
  theme={{...eva.light, ...theme}}
  customMapping={mapping}>
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Button category='h1'>HOME</Button>
    <Text category="h1">Hi my name is TaeYun how about you?</Text>
    <Text category="s1">Hi my name is TaeYun how about you?</Text>
    <Text category="p1">Hi my name is TaeYun how about you?</Text>
    <Text category="c1">Hi my name is TaeYun how about you?</Text>
   </Layout>
  </ApplicationProvider>
);