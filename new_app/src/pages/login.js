import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LottieView
        source={require('../assests/new_animation.json')}
        autoPlay
        loop
        style={{ width: 250, height: 250, alignSelf: 'center' }}
      />
    </View>
  );
}