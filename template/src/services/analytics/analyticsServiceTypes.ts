import TrackEventsConstants from './track-events.constants';
import ScreenEventsConstants from './screen-events.constants';

export type TrackTypes = keyof typeof TrackEventsConstants;
export type ScreenTypes = keyof typeof ScreenEventsConstants;

export interface AnalyticsServiceTypes {
  trackEvent: (eventName: TrackTypes) => void;
  trackScreen: (eventName: ScreenTypes) => void;
}
