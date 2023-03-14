import { FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT, MAIN_FONT } from '../fonts';

const BASIC_REGULAR = {
  fontWeight: FONT_WEIGHT.regular,
  fontFamily: MAIN_FONT.regular,
};

const BASIC_MEDIUM = {
  fontWeight: FONT_WEIGHT.medium,
  fontFamily: MAIN_FONT.medium,
};

export const presets = {
  textMdRegular: {
    ...BASIC_REGULAR,
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.md,
  },
  textMdLineXlRegular: {
    ...BASIC_REGULAR,
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.xl,
  },
  textMdMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.md,
  },
  textMdLineXlMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT.xl,
  },
  textMdLine2XlMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT['2xl'],
  },
  textMdLine3XlMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE.md,
    lineHeight: LINE_HEIGHT['3xl'],
  },
  textSmRegular: {
    ...BASIC_REGULAR,
    fontSize: FONT_SIZE.sm,
    lineHeight: LINE_HEIGHT.sm,
  },
  textSmMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE.sm,
    lineHeight: LINE_HEIGHT.sm,
  },
  textXsRegular: {
    ...BASIC_REGULAR,
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
  },
  textXsMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE.xs,
    lineHeight: LINE_HEIGHT.xs,
  },
  textXlMedium: {
    ...BASIC_MEDIUM,
    fontSize: FONT_SIZE['2xl'],
    lineHeight: LINE_HEIGHT['2xl'],
  },
};

export const textDecorators = {
  underline: {
    textDecorationLine: 'underline',
  },
  defaultDecoration: {},
};
