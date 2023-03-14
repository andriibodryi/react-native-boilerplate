import { FC } from 'react';

import Text from '@src/components/typography/text/Text';

import { styles } from './list-subheader.presets';
import { ListSubheaderTypes } from './list-subheader.types';

const ListSubheader: FC<ListSubheaderTypes> = ({ style, ...rest }) => (
  <Text
    preset="textMdMedium"
    numberOfLines={1}
    {...rest}
    style={[styles.base, style]}
  />
);

export default ListSubheader;
