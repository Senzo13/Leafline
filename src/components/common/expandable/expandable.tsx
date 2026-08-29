import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useSettings } from '@context/settings.context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ExpandableTextProps = {
  title: string;
  description: string;
  errorCode?: number;
  description_bis?: React.ReactNode;
  description_ter?: React.ReactNode;
  icon?: string;
  iconSuccess?: string;
};

const ExpandableText: React.FC<ExpandableTextProps> = ({
  title,
  description,
  errorCode,
  description_bis,
  description_ter,
  icon = 'error-outline',
  iconSuccess = 'thumb-up',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useSettings();
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef();

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isTruncated) setIsTruncated(false);
  };

  const fullDescription =
    description +
    (description_bis ? '\n' + description_bis : '') +
    (description_ter ? '\n' + description_ter : '');

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          errorCode !== 200
            ? theme.colors.errorBorder
            : theme.colors.successBorder,
      }}>
      <View style={styles.row}>
        {icon && errorCode != 200 ? (
          <MaterialIcons
            name={icon}
            color={theme.colors.text}
            size={30}
            style={styles.icon}
          />
        ) : (
          <MaterialIcons
            name={iconSuccess}
            color={theme.colors.text}
            size={30}
            style={styles.icon}
          />
        )}
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              theme.texts.textMediumUpper,
              { color: theme.colors.text },
            ]}>
            {title}
          </Text>
          <Text
            ref={descriptionRef}
            style={[
              theme.texts.textSmall,
              { color: theme.colors.text, marginTop: 4 },
            ]}
            numberOfLines={isExpanded ? undefined : 2}>
            {description}
            <View style={{ flexDirection: 'column', flex: 1 }}>
              {description_bis}
              {description_ter}
            </View>
          </Text>
          {/* <TouchableOpacity
            onPress={toggleIsExpanded}
            style={[
              styles.seeMoreButton,
              theme.texts.textSmallUpper,
              { color: theme.colors.text },
            ]}>
            <Text
              style={[
                styles.seeMoreButton,
                theme.texts.textSmallUpper,
                { color: theme.colors.text },
              ]}>
              {isExpanded ? 'Voir moins' : 'Voir plus'}
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 14,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  icon: {
    marginRight: 16,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  expanded: {},
  seeMore: {
    alignSelf: 'center',
  },
  seeMoreButton: {
    position: 'relative',
    left: 0,
    bottom: 0,
    alignItems: 'center',
    marginRight: 20,
  },
});

export default ExpandableText;
