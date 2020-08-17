// @flow strict

import { GraphQLInputObjectType, GraphQLString, GraphQLEnumType, GraphQLNonNull } from 'graphql';

const LocationType = new GraphQLEnumType({
  name: 'LocationType',
  values: {
    AIRPORT: { value: 'airport' },
    CITY: { value: 'city' },
    COUNTRY: { value: 'country' },
  },
});

export default (new GraphQLInputObjectType({
  name: 'AddLocationInput',
  description: 'Input type for creating a location',
  fields: {
    locationId: {
      type: GraphQLNonNull(GraphQLString),
      description: '3-letter IATA code of airport or internal city code.',
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLNonNull(LocationType),
      description: 'Airport, city or country.',
    },
  },
}): GraphQLInputObjectType);
