// @ts-nocheck
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSettings } from '@context/settings.context';
import { useTranslation } from 'react-i18next';
import HeaderTitle from '@components/layout/header.title';
import styles from './styles';

const Section = ({ title, details }) => {
  const { theme } = useSettings();
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
        {title}
      </Text>
      <Text style={[styles.sectionContent, { color: theme.colors.text }]}>
        {details}
      </Text>
    </View>
  );
};

const Cgu = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme } = useSettings();

  // Récupérer le contenu de la CGU depuis i18n
  const cguContent = t('account.cgu.content', { returnObjects: true });

  return (
    <>
      <HeaderTitle icon="police-badge-outline" title={t('account.cg')} />
      <View
        style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
        <ScrollView>
          <View style={{ paddingTop: 20 }}></View>
          {cguContent.map((section, index) => (
            <Section
              key={index}
              title={section.section}
              details={section.details}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Cgu;
