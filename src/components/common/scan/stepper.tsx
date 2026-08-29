import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import StepperDropdown from './stepperDropdown';
import GeneralScan from './generalScan';
import OrganismScan from '@components/common/scan/organismScan';
import SubScan from '@components/common/scan/subScan';
import { useTranslation } from 'react-i18next';

interface Props {
  theme: any;
  fieldData: any;
}

const VerticalStepper: React.FC<Props> = ({ theme, fieldData }) => {
  const { t } = useTranslation();
  const initialField = fieldData?.data?.fields?.[0] ?? null;
  const initialPlot = initialField?.plots?.[0] ?? null;
  const initialVariety = initialPlot?.variety?.[0] ?? null;
  const hasDiagnosis = Boolean(initialVariety?.diseases);
  const [currentStep, setCurrentStep] = useState(hasDiagnosis ? 3 : 0);
  const [validSteps, setValidSteps] = useState(
    hasDiagnosis ? [true, true, true] : [true, false, false],
  );
  const [selectedField, setSelectedField] = useState<any>(initialField);
  const [selectedPlot, setSelectedPlot] = useState<any>(initialPlot);
  const [selectedVariety, setSelectedVariety] = useState<any>(initialVariety);
  const [stepLabels, setStepLabels] = useState([
    initialField
      ? `${t('step.field')}: ${initialField.name.toUpperCase()}`
      : t('step.selectField'),
    initialPlot
      ? `${t('step.plot')}: ${initialPlot.name.toUpperCase()}`
      : t('step.selectPlot'),
    initialVariety
      ? `${t('step.variety')}: ${initialVariety.name.toUpperCase()}`
      : t('step.selectVariety'),
  ]);

  const handleNextStep = () => {
    const nextStep = currentStep + 1;
    setValidSteps(prev => prev.map((step, index) => index <= nextStep));
    setCurrentStep(nextStep);
  };

  const resetSteps = (fromStep: number) => {
    setValidSteps(prev => prev.map((_, index) => index < fromStep));
    setStepLabels(prev =>
      prev.map((label, index) => {
        if (index === 1 && fromStep <= 1) return t('step.selectPlot');
        if (index === 2 && fromStep <= 2) return t('step.selectVariety');
        return label;
      }),
    );
    if (fromStep <= 1) setSelectedPlot(null);
    if (fromStep <= 2) setSelectedVariety(null);
  };

  const handleSelect = (step: number, selectedItem: any) => {
    if (step === 0) {
      const selectedField = fieldData.data.fields.find(
        (field: any) => field.name.toUpperCase() === selectedItem,
      );
      setSelectedField(selectedField);
      setStepLabels(prev => {
        const updatedLabels = [...prev];
        updatedLabels[0] = `${t('step.field')}: ${selectedField.name.toUpperCase()}`;
        return updatedLabels;
      });
      resetSteps(1);
    } else if (step === 1) {
      const selectedPlot = selectedField.plots.find(
        (plot: any) => plot.name === selectedItem,
      );
      setSelectedPlot(selectedPlot);
      setStepLabels(prev => {
        const updatedLabels = [...prev];
        updatedLabels[1] = `${t('step.plot')}: ${selectedPlot.name.toUpperCase()}`;
        return updatedLabels;
      });
      resetSteps(2);
    } else if (step === 2) {
      const analysisVariety = selectedPlot.variety.find(
        (variety: any) => variety.name === selectedItem,
      );
      setSelectedVariety(analysisVariety);
      setStepLabels(prev => {
        const updatedLabels = [...prev];
        updatedLabels[2] = `${t('step.variety')}: ${selectedItem.toUpperCase()}`;
        return updatedLabels;
      });
    }
    handleNextStep();
  };

  const getDataForStep = (step: number) => {
    if (step === 0)
      return fieldData.data.fields.map((item: any) => item.name.toUpperCase());
    if (step === 1 && selectedField)
      return selectedField.plots.map((plot: any) => plot.name);
    if (step === 2 && selectedPlot)
      return selectedPlot.variety.map((variety: any) => variety.name);
    return [];
  };

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: theme.colors.secondary,
          backgroundColor: theme.colors.tertiary50,
        },
      ]}>
      {stepLabels.map((label, index) => (
        <TouchableOpacity
          key={index}
          style={styles.stepContainer}
          onPress={() => validSteps[index] && setCurrentStep(index)}
          disabled={!validSteps[index]}>
          <View style={styles.stepIndicator}>
            <View
              style={[
                styles.indicator,
                { backgroundColor: theme.colors.secondary },
                currentStep === index && { borderColor: theme.colors.text },
              ]}>
              <Text
                style={{
                  ...theme.texts.textMediumUpper,
                  color:
                    currentStep === index
                      ? theme.colors.text
                      : theme.colors.gray,
                }}>
                {currentStep > index ? '✓' : index + 1}
              </Text>
            </View>
            <Text
              style={[
                {
                  ...theme.texts.textMediumUpper,
                  color:
                    currentStep === index
                      ? theme.colors.text
                      : theme.colors.gray,
                },
                styles.stepLabel,
              ]}>
              {label}
            </Text>
          </View>
          {currentStep === index && (
            <View style={styles.analyticsContent}>
              <StepperDropdown
                data={getDataForStep(index)}
                handleSelect={(item: any) => handleSelect(index, item)}
                selectedData={
                  index === 0 ||
                  (index === 1 && selectedField) ||
                  (index === 2 && selectedPlot)
                }
                placeholder={t(`step.placeholder${index}`)}
                theme={theme}
              />
            </View>
          )}
        </TouchableOpacity>
      ))}
      {currentStep === stepLabels.length && validSteps.every(step => step) && (
        <View>
          <GeneralScan disease={selectedVariety.diseases} />
          <SubScan type="diseases" disease={selectedVariety.diseases} />
          <OrganismScan type="organisms" disease={selectedVariety.diseases} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '92%',
    borderRadius: 10,
    borderWidth: 2,
  },
  stepContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
  },
  stepIndicator: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  indicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  stepLabel: {
    marginLeft: 10,
  },
  analyticsContent: {
    width: '100%',
    height: 'auto',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default VerticalStepper;
