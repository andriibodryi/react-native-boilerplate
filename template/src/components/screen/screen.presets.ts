import Spacing from '@src/styles/constants/spacing';

export const offsets = {
  none: 0,
  ...Spacing,
};
export type KeyboardOffsets = keyof typeof offsets;

export const presets = {
  fixed: {},
  scroll: {},
};
export type ScreenPresets = 'fixed' | 'scroll';

export const isFixed = (
  preset?: ScreenPresets, // any of these things will make screen scroll
) => !preset || !presets[preset] || preset === 'fixed';
