/**
 * @flow
 * @relayHash 908de2fd86032b302337927d0eb023ee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { LocationsPaginatedBidirectional_data$ref } from "./LocationsPaginatedBidirectional_data.graphql";
import type { LocationsPaginatedRefetch_data$ref } from "./LocationsPaginatedRefetch_data.graphql";
import type { LocationsPaginated_data$ref } from "./LocationsPaginated_data.graphql";
export type AppQueryVariables = {|
  count: number
|};
export type AppQueryResponse = {|
  +dangerZone: {|
    +$fragmentRefs: LocationsPaginatedBidirectional_data$ref
  |},
  +$fragmentRefs: LocationsPaginatedRefetch_data$ref & LocationsPaginated_data$ref,
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/

/*
query AppQuery(
  $count: Int!
) {
  dangerZone {
    ...LocationsPaginatedBidirectional_data_1TJkD9
  }
  ...LocationsPaginatedRefetch_data
  ...LocationsPaginated_data
}

fragment LocationsPaginatedBidirectional_data_1TJkD9 on DangerZone_RootQuery {
  allLocations(forceFail: false, first: $count) {
    __typename
    ... on LocationConnection {
      ...LocationsPaginatedBidirectionalConnection_connection
    }
    ... on DangerZone_HTTPErrorType {
      ...HTTPError_error
    }
  }
}

fragment LocationsPaginatedRefetch_data on RootQuery {
  incrementalPagination: allLocations(first: 20) {
    edges {
      node {
        id
        ...Location_location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment LocationsPaginated_data on RootQuery {
  incrementalPagination2: allLocations(first: 20) {
    edges {
      node {
        id
        ...Location_location
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Location_location on Location {
  name
  ...CountryFlag_location
}

fragment CountryFlag_location on Location {
  country {
    code
    name
  }
  code
  name
  type
}

fragment LocationsPaginatedBidirectionalConnection_connection on LocationConnection {
  edges {
    node {
      id
      ...Location_location
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
}

fragment HTTPError_error on DangerZone_HTTPErrorType {
  message
  statusCode
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int!',
        defaultValue: null,
      },
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: '__typename',
      args: null,
      storageKey: null,
    },
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'code',
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: 'LinkedField',
      alias: null,
      name: 'country',
      storageKey: null,
      args: null,
      concreteType: 'LocationArea',
      plural: false,
      selections: [(v4 /*: any*/), (v3 /*: any*/)],
    },
    v6 = {
      kind: 'ScalarField',
      alias: null,
      name: 'type',
      args: null,
      storageKey: null,
    },
    v7 = {
      kind: 'ScalarField',
      alias: null,
      name: 'hasNextPage',
      args: null,
      storageKey: null,
    },
    v8 = {
      kind: 'ScalarField',
      alias: null,
      name: 'endCursor',
      args: null,
      storageKey: null,
    },
    v9 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 20,
        type: 'Int',
      },
    ],
    v10 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'edges',
        storageKey: null,
        args: null,
        concreteType: 'LocationEdge',
        plural: true,
        selections: [
          {
            kind: 'LinkedField',
            alias: null,
            name: 'node',
            storageKey: null,
            args: null,
            concreteType: 'Location',
            plural: false,
            selections: [
              (v2 /*: any*/),
              (v3 /*: any*/),
              (v5 /*: any*/),
              (v4 /*: any*/),
              (v6 /*: any*/),
              (v1 /*: any*/),
            ],
          },
          {
            kind: 'ScalarField',
            alias: null,
            name: 'cursor',
            args: null,
            storageKey: null,
          },
        ],
      },
      {
        kind: 'LinkedField',
        alias: null,
        name: 'pageInfo',
        storageKey: null,
        args: null,
        concreteType: 'PageInfo',
        plural: false,
        selections: [(v8 /*: any*/), (v7 /*: any*/)],
      },
    ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'AppQuery',
      type: 'RootQuery',
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'dangerZone',
          storageKey: null,
          args: null,
          concreteType: 'DangerZone_RootQuery',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'LocationsPaginatedBidirectional_data',
              args: [
                {
                  kind: 'Variable',
                  name: 'first',
                  variableName: 'count',
                  type: null,
                },
              ],
            },
          ],
        },
        {
          kind: 'FragmentSpread',
          name: 'LocationsPaginatedRefetch_data',
          args: null,
        },
        {
          kind: 'FragmentSpread',
          name: 'LocationsPaginated_data',
          args: null,
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'AppQuery',
      argumentDefinitions: (v0 /*: any*/),
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'dangerZone',
          storageKey: null,
          args: null,
          concreteType: 'DangerZone_RootQuery',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'allLocations',
              storageKey: null,
              args: [
                {
                  kind: 'Variable',
                  name: 'first',
                  variableName: 'count',
                  type: 'Int',
                },
                {
                  kind: 'Literal',
                  name: 'forceFail',
                  value: false,
                  type: 'Boolean',
                },
              ],
              concreteType: null,
              plural: false,
              selections: [
                (v1 /*: any*/),
                {
                  kind: 'InlineFragment',
                  type: 'LocationConnection',
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'edges',
                      storageKey: null,
                      args: null,
                      concreteType: 'LocationEdge',
                      plural: true,
                      selections: [
                        {
                          kind: 'LinkedField',
                          alias: null,
                          name: 'node',
                          storageKey: null,
                          args: null,
                          concreteType: 'Location',
                          plural: false,
                          selections: [
                            (v2 /*: any*/),
                            (v3 /*: any*/),
                            (v5 /*: any*/),
                            (v4 /*: any*/),
                            (v6 /*: any*/),
                          ],
                        },
                      ],
                    },
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'pageInfo',
                      storageKey: null,
                      args: null,
                      concreteType: 'PageInfo',
                      plural: false,
                      selections: [
                        (v7 /*: any*/),
                        {
                          kind: 'ScalarField',
                          alias: null,
                          name: 'hasPreviousPage',
                          args: null,
                          storageKey: null,
                        },
                        {
                          kind: 'ScalarField',
                          alias: null,
                          name: 'startCursor',
                          args: null,
                          storageKey: null,
                        },
                        (v8 /*: any*/),
                      ],
                    },
                  ],
                },
                {
                  kind: 'InlineFragment',
                  type: 'DangerZone_HTTPErrorType',
                  selections: [
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'message',
                      args: null,
                      storageKey: null,
                    },
                    {
                      kind: 'ScalarField',
                      alias: null,
                      name: 'statusCode',
                      args: null,
                      storageKey: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          kind: 'LinkedField',
          alias: 'incrementalPagination',
          name: 'allLocations',
          storageKey: 'allLocations(first:20)',
          args: (v9 /*: any*/),
          concreteType: 'LocationConnection',
          plural: false,
          selections: (v10 /*: any*/),
        },
        {
          kind: 'LinkedHandle',
          alias: 'incrementalPagination',
          name: 'allLocations',
          args: (v9 /*: any*/),
          handle: 'connection',
          key: 'allLocations_incrementalPagination',
          filters: null,
        },
        {
          kind: 'LinkedField',
          alias: 'incrementalPagination2',
          name: 'allLocations',
          storageKey: 'allLocations(first:20)',
          args: (v9 /*: any*/),
          concreteType: 'LocationConnection',
          plural: false,
          selections: (v10 /*: any*/),
        },
        {
          kind: 'LinkedHandle',
          alias: 'incrementalPagination2',
          name: 'allLocations',
          args: (v9 /*: any*/),
          handle: 'connection',
          key: 'allLocations_incrementalPagination2',
          filters: null,
        },
      ],
    },
    params: {
      operationKind: 'query',
      name: 'AppQuery',
      id: null,
      text:
        'query AppQuery(\n  $count: Int!\n) {\n  dangerZone {\n    ...LocationsPaginatedBidirectional_data_1TJkD9\n  }\n  ...LocationsPaginatedRefetch_data\n  ...LocationsPaginated_data\n}\n\nfragment LocationsPaginatedBidirectional_data_1TJkD9 on DangerZone_RootQuery {\n  allLocations(forceFail: false, first: $count) {\n    __typename\n    ... on LocationConnection {\n      ...LocationsPaginatedBidirectionalConnection_connection\n    }\n    ... on DangerZone_HTTPErrorType {\n      ...HTTPError_error\n    }\n  }\n}\n\nfragment LocationsPaginatedRefetch_data on RootQuery {\n  incrementalPagination: allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment LocationsPaginated_data on RootQuery {\n  incrementalPagination2: allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Location_location on Location {\n  name\n  ...CountryFlag_location\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n\nfragment LocationsPaginatedBidirectionalConnection_connection on LocationConnection {\n  edges {\n    node {\n      id\n      ...Location_location\n    }\n  }\n  pageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n}\n\nfragment HTTPError_error on DangerZone_HTTPErrorType {\n  message\n  statusCode\n}\n',
      metadata: {},
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'c69b7ae11af2794e753751f024e4956c';
module.exports = node;
