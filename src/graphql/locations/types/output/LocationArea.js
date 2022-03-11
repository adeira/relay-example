// @flow strict

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLObjectType, GraphQLString } from 'graphql';

export type LocationArea = {
  +locationId: string,
  +name: string,
  +slug: string,
  +code: string,
};

export default (new GraphQLObjectType({
  name: 'LocationArea',
  description: 'Area of a location',
  fields: {
    locationId: {
      type: GraphQLString,
      resolve: ({ locationId }: LocationArea): string => locationId,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: LocationArea): string => name,
    },
    slug: {
      type: GraphQLString,
      resolve: ({ slug }: LocationArea): string => slug,
    },
    code: {
      type: GraphQLString,
      resolve: ({ code }: LocationArea): string => code,
    },
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLObjectType);
