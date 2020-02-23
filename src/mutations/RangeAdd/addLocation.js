// @flow strict-local

import { graphql, commitMutation, type Environment } from '@adeira/relay';

import type {
  addLocationMutation,
  addLocationMutationVariables,
  addLocationMutationResponse,
} from './__generated__/addLocationMutation.graphql';

const mutation = graphql`
  mutation addLocationMutation($location: AddLocationInput!) {
    addLocation(location: $location) {
      ... on AddLocationResponse {
        locationEdge {
          node {
            locationId
            name
            id
            type
          }
        }
      }
      ... on Error {
        message
      }
    }
  }
`;

export default function addLocation(
  env: Environment,
  variables: addLocationMutationVariables,
  onCompleted: (response: addLocationMutationResponse, errors: ?$ReadOnlyArray<Error>) => void,
) {
  commitMutation<addLocationMutation>(env, {
    mutation,
    variables,
    onCompleted,
    configs: [
      {
        type: 'RANGE_ADD',
        parentID: 'client:root',
        edgeName: 'locationEdge',
        connectionInfo: [
          {
            key: 'LocationsList_locations',
            rangeBehavior: 'prepend',
          },
        ],
      },
    ],
  });
}
