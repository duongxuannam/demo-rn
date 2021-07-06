import React, { useEffect } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import Images from 'utils/images';
import styles from './styles';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.bgWhite]} />
      <ImageBackground source={Images.background_splash} style={styles.container} />
      <View style={styles.bgOverlay}>
        <View style={styles.titleContainer}>
          <Image style={styles.icon} source={Images.icon_splash} />
          <Text style={styles.title}>scratch</Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;
