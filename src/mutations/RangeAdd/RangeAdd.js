// @flow strict-local

import * as React from 'react';
import { Stack } from '@kiwicom/orbit-components';

import SimpleLocationsQuery from '../SimpleLocationsQuery';
import LocationsForm from './LocationsForm';

type Props = {||};

export default (function RangeAdd() {
  return (
    <Stack flex={true} spacing="extraLoose">
      <Stack>
        <SimpleLocationsQuery />
      </Stack>
      <Stack>
        <LocationsForm />
      </Stack>
    </Stack>
  );
}: React.ComponentType<Props>);
