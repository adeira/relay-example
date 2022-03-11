// @flow strict-local

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
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
    location: {
      type: (new GraphQLNonNull(AddLocationInput): GraphQLNonNull<typeof AddLocationInput>),
    },
  },
  resolve: (_: mixed, { location }: Args): ValidLocationResponse | string => {
    if (location.name === '' || location.locationId.length !== 3) {
      // TODO: ErrorClass and handle missing type, possibly locationId.length !== 3
      return '';
    }
    return new ValidLocationResponse(location);
  },
};
