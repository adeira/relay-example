// @flow

import React from 'react';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@adeira/relay';
import * as sx from '@adeira/sx';

import type { Location_location as LocationDataType } from './__generated__/Location_location.graphql';
import Text from '../../components/Text';

type Props = {|
  +location: ?LocationDataType,
|};

function Location({ location }: Props) {
  if (!location) {
    return null; // or some failure placeholder
  }

  const name = location.name ?? '';
  const countryName = location.country?.name ?? '';
  return (
    <li>
      <div className={styles('box')}>
        <img src={location.countryFlagURL} alt={`${countryName} flag`} height="24" width="24" />
        <Text dataTest={`location-${name}`} size="small">
          {name}
        </Text>
      </div>
    </li>
  );
}

export default (createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
      countryFlagURL
      country {
        name
      }
    }
  `,
}): FragmentContainerType<Props>);

const styles = sx.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px', // Works in edge, chrome and firefox, but should be ok for this app
  },
});
