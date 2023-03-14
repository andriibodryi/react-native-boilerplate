import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Text from '@src/components/typography/text/Text';
import { useStyleConfig } from '@src/styles/useStyleConfig';

import { SectionHeaderTypes } from './section-header.types';
import { stylePresets } from './section-header.presets';
import { textPresets } from './section-header.constants';

const SectionHeader: FC<SectionHeaderTypes> = ({ title, preset = 'basic' }) => {
  const { colors } = useStyleConfig();

  const styles = stylePresets[preset];

  const textStyle = StyleSheet.flatten([
    { color: colors.grey_07 },
    styles.text,
  ]);

  return (
    <View
      style={[
        styles.sectionHeader,
        {
          backgroundColor: colors.grey_03,
        },
      ]}
    >
      <Text style={textStyle} preset={textPresets[preset]}>
        {title}
      </Text>
    </View>
  );
};

export default React.memo(SectionHeader);
