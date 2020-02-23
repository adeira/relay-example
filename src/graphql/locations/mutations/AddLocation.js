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
    location: { type: GraphQLNonNull(AddLocationInput) },
  },
  resolve: (_: mixed, { location }: Args) => {
    if (location.name === '' || location.locationId.length !== 3) {
      // TODO: ErrorClass and handle missing type, possibly locationId.length !== 3
      return '';
    }
    return new ValidLocationResponse(location);
  },
};
