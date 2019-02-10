// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import Flag from '@kiwicom/orbit-components/lib/CountryFlag';
import { CODES } from '@kiwicom/orbit-components/lib/CountryFlag/consts';
import type { CountryFlag_location as CountryFlagDataType } from '__generated__/CountryFlag_location.graphql';

type Props = {|
  +location: ?CountryFlagDataType,
|};

function CountryFlag({ location }: Props) {
  if (!location) {
    return <Flag code="anywhere" />;
  }

  const { country, code, type, name } = location;
  const countryCode = country ? country.code : code; // won't be needed once this is merged https://github.com/kiwicom/orbit-components/pull/801
  if (type === 'special' || !countryCode) {
    return <Flag code="anywhere" />;
  }

  const countryName = country?.name ?? (name ?? 'Anywhere');
  const flagCode = CODES[countryCode];
  return <Flag code={flagCode} name={countryName} />;
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
