import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.titleContent}>Please login to continue</Text>

      <Text style={styles.titleInput}>Email address</Text>
      <TextInput style={styles.inputStyles} />

      <View style={styles.passwordTitleContainer}>
        <Text style={styles.titleInput}>Password</Text>
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </View>
      </View>
      <TextInput style={styles.inputStyles} secureTextEntry />

      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => alert('click here')} style={styles.loginButton}>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        <View style={styles.subContainer}>
          <Text style={styles.titleCreateAccount}>New to Scratch?</Text>
          <TouchableOpacity onPress={() => alert('action here')}>
            <Text style={styles.actionCreateAccount}>Create Account Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Content;
