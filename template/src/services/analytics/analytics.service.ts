import {
  AnalyticsServiceTypes,
  TrackTypes,
  ScreenTypes,
} from './analyticsServiceTypes';

class Analytics implements AnalyticsServiceTypes {
  public trackEvent = (eventName: TrackTypes) => {
    console.log(eventName);
  };

  public trackScreen = (eventName: ScreenTypes) => {
    console.log(eventName);
  };
}

export const AnalyticsService = new Analytics();
