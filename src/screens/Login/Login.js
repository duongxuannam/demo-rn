import React from 'react';
import { View } from 'react-native';
import Background from './Background';
import Content from './Content';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Background />
      <Content />
    </View>
  );
};

export default Login;
