// @flow

import * as React from 'react';
import { Box, Grid } from 'grommet';

import SimpleLocationsQuery from '../SimpleLocationsQuery';
import LocationsForm from './LocationsForm';

type Props = {||};

export default (function RangeAdd() {
  return (
    <Grid columns={{ count: 2, size: 'auto' }} gap="medium">
      <Box>
        <SimpleLocationsQuery />
      </Box>
      <Box>
        <LocationsForm />
      </Box>
    </Grid>
  );
}: React.ComponentType<Props>);
