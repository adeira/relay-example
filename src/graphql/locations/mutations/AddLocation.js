// @flow strict-local

import { GraphQLNonNull } from 'graphql';

import AddLocationInput from '../types/input/AddLocationInput';
import AddLocationOrError, { ValidLocationResponse } from '../types/output/AddLocationOrError';
import type { LocationInput } from '../locations';

type Args = {
  +location: LocationInput,
  ...
};
export default {
  type: AddLocationOrError,
  description: 'Add a new location',
  args: {
    /* $FlowFixMe[value-as-type] This comment suppresses an error when
     * upgrading Flow to version 0.164.0. To see the error delete this comment
     * and run Flow. */
    location: { type: (GraphQLNonNull(AddLocationInput): GraphQLNonNull<typeof AddLocationInput>) },
  },
  resolve: (_: mixed, { location }: Args): ValidLocationResponse | string => {
    if (location.name === '' || location.locationId.length !== 3) {
      // TODO: ErrorClass and handle missing type, possibly locationId.length !== 3
      return '';
    }
    return new ValidLocationResponse(location);
  },
};
