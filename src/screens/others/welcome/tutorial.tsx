// @ts-nocheck
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressComponent } from '@components/common/progressBar/progress.bar';
import { SwipeableContent } from '@components/common/swiper/swiper.custom';
import { useTranslation } from 'react-i18next';
import { Logo } from '@components/common/logo/logo';
import { CredentialsService } from '@services/api/core/credentials.service';
import Button from '@components/common/button/button';
import { useSettings } from '@context/settings.context';

const Tutorial = ({ navigation }) => {
  const { theme } = useSettings();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAdvance = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const arrayAdvances = [
    {
      logo: require('assets/images/logo/leafline_logo.png'),
      title: 'welcome.step-1_title',
      subtitle: 'welcome.step-1_subtitle',
    },
    {
      logo: require('assets/images/logo/step-2_logo.png'),
      title: 'welcome.step-2_title',
      subtitle: 'welcome.step-2_subtitle',
    },
    {
      logo: require('assets/images/logo/step-3_logo.png'),
      title: 'welcome.step-3_title',
      subtitle: 'welcome.step-3_subtitle',
    },
    {
      logo: require('assets/images/logo/step-4_logo.png'),
      title: 'welcome.step-4_title',
      subtitle: 'welcome.step-4_subtitle',
    },
    {
      logo: require('assets/images/logo/step-5_logo.png'),
      title: 'welcome.step-5_title',
      subtitle: 'welcome.step-5_subtitle',
    },
    {
      logo: require('assets/images/logo/step-6_logo.png'),
      title: 'welcome.step-6_title',
      subtitle: 'welcome.step-6_subtitle',
    },
  ];

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: theme.colors.primary }]}>
        <View
          style={[styles.center, { backgroundColor: theme.colors.primary }]}>
          <Logo src={arrayAdvances[currentIndex].logo} style={styles.image} />
        </View>
        <SwipeableContent
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          maxElements={arrayAdvances.length}>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {t(arrayAdvances[currentIndex].title)}
              </Text>
            </View>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                {t(arrayAdvances[currentIndex].subtitle)}
              </Text>
            </View>
            <ProgressComponent
              currentIndex={currentIndex}
              maxElements={arrayAdvances.length}
              onAdvance={handleAdvance}
              scale={1}
            />
          </View>
        </SwipeableContent>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={
            currentIndex < arrayAdvances.length - 1
              ? t('welcome.next_button')
              : t('welcome.finish_button')
          }
          type="primary"
          onPress={() => {
            if (currentIndex < arrayAdvances.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              CredentialsService.setTutorialDone(true);
              navigation.navigate('Auth');
            }
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2826',
    overflow: 'hidden',
    position: 'relative',
  },
  center: {
    display: 'flex',
    height: 0,
    padding: 0,
    alignItems: 'center',
    margin: 0,
    backgroundColor: '#1A2826',
  },
  image: {
    width: 300,
    height: 100,
    marginTop: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 200,
    minHeight: 450,
    paddingVertical: 50, // Ajoutez un peu d'espace vertical pour que le contenu ne colle pas aux bords
  },
  titleContainer: {
    alignItems: 'center',
    width: '80%',
  },
  subtitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    marginTop: 30,
  },
  title: {
    color: 'white',
    fontSize: 38,
    fontFamily: 'Poppins',
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.80)',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
  },
  divider: {
    width: 221.01,
    height: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: 195,
    height: 51,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
});

export default Tutorial;
