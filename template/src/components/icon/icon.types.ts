import {
  ImageStyle,
  StyleProp,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export type IconTypes = keyof typeof iconRegistry;

export interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  name: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress'];
}

export const iconRegistry = {
  back: require('../../assets/icons/back.png'),
  bell: require('../../assets/icons/bell.png'),
  caretLeft: require('../../assets/icons/caretLeft.png'),
  caretRight: require('../../assets/icons/caretRight.png'),
  check: require('../../assets/icons/check.png'),
  clap: require('../../assets/icons/clap.png'),
  community: require('../../assets/icons/community.png'),
  components: require('../../assets/icons/components.png'),
  debug: require('../../assets/icons/debug.png'),
  github: require('../../assets/icons/github.png'),
  heart: require('../../assets/icons/heart.png'),
  hidden: require('../../assets/icons/hidden.png'),
  ladybug: require('../../assets/icons/ladybug.png'),
  lock: require('../../assets/icons/lock.png'),
  menu: require('../../assets/icons/menu.png'),
  more: require('../../assets/icons/more.png'),
  pin: require('../../assets/icons/pin.png'),
  podcast: require('../../assets/icons/podcast.png'),
  settings: require('../../assets/icons/settings.png'),
  slack: require('../../assets/icons/slack.png'),
  view: require('../../assets/icons/view.png'),
  x: require('../../assets/icons/x.png'),
};
