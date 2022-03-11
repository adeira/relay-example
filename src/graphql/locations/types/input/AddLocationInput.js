// @flow strict

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
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
      type: new GraphQLNonNull(GraphQLString),
      description: '3-letter IATA code of airport or internal city code.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    type: {
      type: new GraphQLNonNull(LocationType),
      description: 'Airport, city or country.',
    },
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLInputObjectType);
