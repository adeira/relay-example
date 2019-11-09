// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@adeira/relay';
import Flag from '@kiwicom/orbit-components/lib/CountryFlag';

import type { CountryFlag_location as CountryFlagDataType } from './__generated__/CountryFlag_location.graphql';

type Props = {|
  +location: ?CountryFlagDataType,
|};

function AnywhereFlag() {
  return <Flag dataTest="flag-anywhere" code="anywhere" />;
}

function CountryFlag({ location }: Props) {
  if (!location) {
    return <AnywhereFlag />;
  }

  const { country, code, type, name } = location;
  const countryCode = country ? country.code : code;
  if (type === 'special' || countryCode == null) {
    return <AnywhereFlag />;
  }

  const countryName = country?.name ?? name ?? 'Anywhere';
  return <Flag dataTest="flag-success" code={countryCode} name={countryName} />;
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
