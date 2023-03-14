import { AnalyticsService } from '@src/services';
import { screenAnalyticsMap } from '@src/services/analytics/screen-analytics-map.constants';

export const useTrackFirebaseScreen = () => {
  const trackFirebaseScreen = (screenName: string) => {
    const tag = screenAnalyticsMap[screenName];
    if (tag) {
      AnalyticsService.trackScreen(tag);
    }
  };

  return {
    trackFirebaseScreen,
  };
};
