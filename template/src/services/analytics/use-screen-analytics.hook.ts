import { useRef } from 'react';

import { navigationRef } from '@src/navigators/navigators.constants';

import { useTrackFirebaseScreen } from './use-track-firebase-screen.hook';

export const useScreenAnalytics = () => {
  const previousRouteNameRef = useRef<string>();
  const { trackFirebaseScreen } = useTrackFirebaseScreen();

  const isRouteChanged = (
    currentRouteName: string | undefined,
  ): currentRouteName is string =>
    Boolean(currentRouteName) &&
    previousRouteNameRef.current !== currentRouteName;

  const trackOpenScreenAnalytics = () => {
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;

    if (isRouteChanged(currentRouteName)) {
      trackFirebaseScreen(currentRouteName);
      previousRouteNameRef.current = currentRouteName;
    }
  };

  return {
    trackOpenScreenAnalytics,
  };
};
