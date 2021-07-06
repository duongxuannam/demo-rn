import React, { useEffect } from 'react';
import { Text, ImageBackground, Image } from 'react-native';
import styled from 'styled-components/native';
import Images from 'utils/images';
import styles from './styles';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const BlankContainer = styled.View`
  flex: 1;
  background-color: white;
`;

const ContainerOverride = styled.View`
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);
  return (
    <Container style={styles.container}>
      <BlankContainer style={styles.bgWhite} />
      <ImageBackground source={Images.background_splash} style={styles.container} />
      <ContainerOverride style={styles.bgOverlay}>
        <TitleContainer style={styles.titleContainer}>
          <Image style={styles.icon} source={Images.icon_splash} />
          <Text style={styles.title}>scratch</Text>
        </TitleContainer>
      </ContainerOverride>
    </Container>
  );
};

export default Splash;
