import { TextPreset } from '../../typography/text/text.types';
import { stylePresets } from './section-header.presets';

type SectionHeaderPresets = keyof typeof stylePresets;

export type SectionHeaderText = Record<
  SectionHeaderPresets,
  Extract<TextPreset, 'textSmMedium' | 'textXsMedium'>
>;

export interface SectionHeaderTypes {
  title: string;
  preset?: SectionHeaderPresets;
}
