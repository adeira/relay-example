// @flow

import type { Node, ComponentType } from 'react';
import { createMedia } from '@artsy/fresnel';

import { breakpoints } from './breakpoints';

type MediaValues = 'sm' | 'tablet' | 'desktop';

type AppMediaType = {|
  +Media: ComponentType<MediaProps>,
  +createMediaStyle: () => string,
  +MediaContextProvider: ComponentType<AppMediaContextProps>,
|};

type MediaProps = {|
  +at?: MediaValues,
  +lessThan?: MediaValues,
  +greaterThan?: MediaValues,
  +greaterThanOrEqual?: MediaValues,
  +between?: $ReadOnlyArray<MediaValues>,
  +children: Node,
  // There might be more, check official docs at https://github.com/artsy/fresnel
|};

type AppMediaContextProps = {|
  +children: Node,
  +onlyMatch?: $ReadOnlyArray<MediaValues>,
  +disableDynamicMediaQueries?: boolean,
|};

// Expand as needed
const AppMedia: AppMediaType = createMedia({
  breakpoints: {
    sm: 0,
    ...breakpoints,
  },
});

export const mediaStyles: string = AppMedia.createMediaStyle();
export const { MediaContextProvider, Media } = AppMedia;
