/**
 * @flow
 * @relayHash 6fd4d5de61d3fe15cdf9652488d81579
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedBidirectional_data$ref = any;
type LocationsPaginatedRefetch_data$ref = any;
type LocationsPaginated_data$ref = any;
export type HomepageQueryVariables = {|
  count: number
|};
export type HomepageQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional_data$ref & LocationsPaginatedRefetch_data$ref & LocationsPaginated_data$ref
|};
export type HomepageQuery = {|
  variables: HomepageQueryVariables,
  response: HomepageQueryResponse,
|};

/*
query HomepageQuery(
  $count: Int!
) {
  ...LocationsPaginatedBidirectional_data_1TJkD9
  ...LocationsPaginatedRefetch_data
  ...LocationsPaginated_data
}

fragment Location_location on Location {
  name
  countryFlagURL
  country {
    name
  }
}

fragment LocationsPaginatedBidirectional_data_1TJkD9 on RootQuery {
  locations(first: $count) {
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
}

fragment LocationsPaginatedRefetch_data on RootQuery {
  incrementalPagination: locations(first: 20) {
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
  incrementalPagination2: locations(first: 20) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "countryFlagURL",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "country",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "hasNextPage",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "endCursor",
  "args": null,
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v9 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "LocationEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      (v7/*: any*/),
      (v6/*: any*/)
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomepageQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional_data",
        "args": (v1/*: any*/)
      },
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data",
        "args": null
      },
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginated_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomepageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
              (v7/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination",
        "name": "locations",
        "storageKey": "locations(first:20)",
        "args": (v8/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v9/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination",
        "name": "locations",
        "args": (v8/*: any*/),
        "handle": "connection",
        "key": "locations_incrementalPagination",
        "filters": null
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination2",
        "name": "locations",
        "storageKey": "locations(first:20)",
        "args": (v8/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v9/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination2",
        "name": "locations",
        "args": (v8/*: any*/),
        "handle": "connection",
        "key": "locations_incrementalPagination2",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomepageQuery",
    "id": null,
    "text": "query HomepageQuery(\n  $count: Int!\n) {\n  ...LocationsPaginatedBidirectional_data_1TJkD9\n  ...LocationsPaginatedRefetch_data\n  ...LocationsPaginated_data\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedBidirectional_data_1TJkD9 on RootQuery {\n  locations(first: $count) {\n    edges {\n      node {\n        id\n        ...Location_location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment LocationsPaginatedRefetch_data on RootQuery {\n  incrementalPagination: locations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment LocationsPaginated_data on RootQuery {\n  incrementalPagination2: locations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'da1e002367f01113132353727909b19c';
export default node;
