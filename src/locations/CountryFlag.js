// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import Flag from '@kiwicom/orbit-components/lib/CountryFlag';

import type { CountryFlag_location as CountryFlagDataType } from './__generated__/CountryFlag_location.graphql';

type Props = {|
  +location: ?CountryFlagDataType,
|};

function CountryFlag({ location }: Props) {
  if (!location) {
    return <Flag code="anywhere" />;
  }

  const { country, code, type, name } = location;
  const countryCode = country ? country.code : code;
  if (type === 'special' || !countryCode) {
    return <Flag code="anywhere" />;
  }

  const countryName = country?.name ?? (name ?? 'Anywhere');
  return <Flag code={countryCode} name={countryName} />;
}

export default createFragmentContainer(CountryFlag, {
  location: graphql`
    fragment CountryFlag_location on Location {
      country {
        code
        name
      }
      code
      name
      type
    }
  `,
});
