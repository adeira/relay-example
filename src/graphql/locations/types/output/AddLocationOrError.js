// @flow

import { GraphQLUnionType } from 'graphql';

import AddLocationError from './AddLocationError';
import AddLocationResponse from './AddLocationResponse';
import type { LocationInput } from '../../locations';

export class ValidLocationResponse {
  location: $ReadOnly<{ ...LocationInput, +id: string }>;
  constructor(location: LocationInput) {
    this.location = {
      ...location,
      id: location.locationId,
    };
  }
}

export default (new GraphQLUnionType({
  name: 'AddLocationOrError',
  types: [AddLocationError, AddLocationResponse],
  resolveType: (value) => {
    if (value instanceof ValidLocationResponse) {
      return AddLocationResponse.name;
    }
    return AddLocationError.name;
  },
}): typeof GraphQLUnionType);
