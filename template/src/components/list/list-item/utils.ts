import { ListItemPreset } from './list-item.types';

export const getHeadingAccessibilityHint = (preset: ListItemPreset) =>
  preset === 'descriptiveList' ? undefined : 'double tap to activate';
