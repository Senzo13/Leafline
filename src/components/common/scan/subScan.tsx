import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import { useSettings } from '@context/settings.context';
import Accordion from '@components/common/accordion/accordion';
import ScanDivider from '@components/common/divider/scanDivider';
import { useTranslation } from 'react-i18next';

interface Disease {
  name: string;
  description: string;
  symptom: string;
  treatment: string;
  image: string;
  soilMoisture: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  airHumidity: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  luminosity: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  temperature: {
    min: number;
    max: number;
    data: Array<{
      value: number;
      dangerous: string;
      timestamp: number;
    }>;
  };
  organism: {
    name: string;
    description: string;
    image: string;
    probableDiseases: string;
  };
}

interface SubScanProps {
  type: string;
  disease: Disease[];
}

const SubScan: React.FC<SubScanProps> = ({ type, disease }) => {
  const { t } = useTranslation();
  const { theme } = useSettings();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  const handlePress = (disease: Disease) => {
    setSelectedDisease(disease);
    setModalVisible(true);
  };

  const title =
    type === 'diseases'
      ? t('subScan.probableDiseases')
      : t('subScan.probablePests');

  const imageSources = {
    diseases: {
      brulures: require('assets/images/diseases/brulures.jpg'),
      chancres: require('assets/images/diseases/chancres.jpg'),
      eutypiose: require('assets/images/diseases/eutypiose.jpg'),
      fusariose: require('assets/images/diseases/fusariose.jpg'),
      galles: require('assets/images/diseases/galles.jpg'),
      mildiou: require('assets/images/diseases/mildiou.jpg'),
      mosaique: require('assets/images/diseases/mosaique.jpg'),
      necroses: require('assets/images/diseases/necroses.jpg'),
      nematodes: require('assets/images/diseases/nematodes.jpg'),
      oidium: require('assets/images/diseases/oidium.jpg'),
      phytoplasmes: require('assets/images/diseases/phytoplasmes.jpg'),
      phytovirus: require('assets/images/diseases/phytovirus.jpg'),
      pourrissement: require('assets/images/diseases/pourrissement.jpg'),
      rouille: require('assets/images/diseases/rouille.jpg'),
      septoriose: require('assets/images/diseases/septoriose.jpg'),
      taches_foliaires: require('assets/images/diseases/taches_foliaires.jpg'),
      taches_huileuses: require('assets/images/diseases/taches_huileuses.jpg'),
      tavelure: require('assets/images/diseases/tavelure.jpg'),
      tobravirus: require('assets/images/diseases/tobravirus.jpg'),
      tumeurs: require('assets/images/diseases/tumeurs.jpg'),
    },
    organisms: {
      aleurodes: require('assets/images/organisms/aleurodes.jpg'),
      araignees_rouges: require('assets/images/organisms/araignees_rouges.jpg'),
      champignons: require('assets/images/organisms/champignons.jpg'),
      charancons: require('assets/images/organisms/charancons.jpg'),
      chenilles: require('assets/images/organisms/chenilles.jpg'),
      cicadelles: require('assets/images/organisms/cicadelles.jpg'),
      cochenilles_a_bouclier: require('assets/images/organisms/cochenilles_a_bouclier.jpg'),
      cochenilles: require('assets/images/organisms/cochenilles.jpg'),
      doppler: require('assets/images/organisms/doppler.jpg'),
      limaces: require('assets/images/organisms/limaces.jpg'),
      moucherons_fongiques: require('assets/images/organisms/moucherons_fongiques.jpg'),
      pucerons: require('assets/images/organisms/pucerons.jpg'),
      pyrales: require('assets/images/organisms/pyrales.jpg'),
      mouches_blanches: require('assets/images/organisms/mouches_blanches.jpg'),
      thrips: require('assets/images/organisms/thrips.jpg'),
      papillons: require('assets/images/organisms/papillons.jpg'),
      mouches_de_deuil: require('assets/images/organisms/mouches_de_deuil.jpg'),
      tetranyques: require('assets/images/organisms/tetranyques.jpg'),
      trichodoridae: require('assets/images/organisms/trichodoridae.jpg'),
      tylenchidae: require('assets/images/organisms/tylenchidae.jpg'),
    },
  };

  const getImageSource = (type, image) => {
    return imageSources[type] && imageSources[type][image]
      ? imageSources[type][image]
      : imageSources['diseases']['mildiou']; // Default image
  };

  return (
    <View
      style={{
        ...styles.content,
        backgroundColor: theme.colors.tertiary50,
      }}>
      <Accordion
        title={title}
        subtitle={t('subScan.analysisDetails')}
        expand={false}>
        <ScanDivider />
        <Text style={{ color: theme.colors.gray }}>
          {t('subScan.summary')}:
        </Text>
        <Text style={{ color: theme.colors.text }}>
          {t('subScan.environmentalConditions')}
        </Text>
        <View
          style={{
            ...styles.subContent,
          }}>
          {disease.map((disease, diseaseIndex) => {
            const hasHighDanger = disease.soilMoisture.data.some(
              data => data.dangerous === 'high',
            );
            if (hasHighDanger) {
              return (
                <TouchableOpacity
                  key={`${type}-${diseaseIndex}`}
                  style={styles.cardContent}
                  onPress={() => handlePress(disease)}>
                  <ImageBackground
                    source={getImageSource(type, disease.name)}
                    style={styles.cardImage}
                    resizeMode="cover">
                    <View style={styles.overlay} />
                    <Text style={styles.cardText}>
                      {disease.name.toUpperCase()}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }
            return null;
          })}
        </View>
      </Accordion>
      {selectedDisease && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ImageBackground
                source={getImageSource(type, selectedDisease.name)}
                style={styles.modalImage}
                resizeMode="cover">
                <View style={styles.overlay} />
                <Text style={styles.modalTitle}>
                  {selectedDisease.name.toUpperCase()}
                </Text>
              </ImageBackground>
              <Text style={styles.modalText}>
                <Text style={{ ...theme.texts.textSmallBold }}>
                  {t('subScan.description')}:
                </Text>{' '}
                {selectedDisease.description}
              </Text>
              <Text style={styles.modalText}>
                <Text style={{ ...theme.texts.textSmallBold }}>
                  {t('subScan.symptoms')}:
                </Text>{' '}
                {selectedDisease.symptom}
              </Text>
              <Text style={styles.modalText}>
                <Text style={{ ...theme.texts.textSmallBold }}>
                  {t('subScan.treatment')}:
                </Text>{' '}
                {selectedDisease.treatment}
              </Text>
              <Button
                title={t('subScan.close')}
                color={theme.colors.secondary}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: '7%',
    width: '100%',
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 20,
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subContent: {
    marginTop: '3%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 15,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    width: '47%',
    height: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity as needed
    borderRadius: 12,
  },
  cardText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SubScan;
