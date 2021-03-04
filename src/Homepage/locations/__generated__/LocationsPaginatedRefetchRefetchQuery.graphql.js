/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedRefetch_data$ref = any;
export type LocationsPaginatedRefetchRefetchQueryVariables = {|
  count?: ?number,
  after?: ?string,
|};
export type LocationsPaginatedRefetchRefetchQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedRefetch_data$ref
|};
export type LocationsPaginatedRefetchRefetchQuery = {|
  variables: LocationsPaginatedRefetchRefetchQueryVariables,
  response: LocationsPaginatedRefetchRefetchQueryResponse,
|};

/*
query LocationsPaginatedRefetchRefetchQuery(
  $count: Int
  $after: String
) {
  ...LocationsPaginatedRefetch_data_2QE1um
}

fragment Location on Location {
  name
  countryFlagURL
  country {
    name
  }
}

fragment LocationsPaginatedRefetch_data_2QE1um on RootQuery {
  incrementalPagination: locations(first: $count, after: $after) {
    edges {
      node {
        id
        ...Location
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v2 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "selections": [
      {
        "args": [
          (v2/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ],
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "selections": [
      {
        "alias": "incrementalPagination",
        "args": (v3/*: any*/),
        "concreteType": "LocationConnection",
        "kind": "LinkedField",
        "name": "locations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "countryFlagURL",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "LocationArea",
                    "kind": "LinkedField",
                    "name": "country",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "incrementalPagination",
        "args": (v3/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "locations_incrementalPagination",
        "kind": "LinkedHandle",
        "name": "locations"
      }
    ]
  },
  "params": {
    "cacheID": "cf19105ae33c9dc3ac853766c4e20d57",
    "id": null,
    "metadata": {},
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "operationKind": "query",
    "text": "query LocationsPaginatedRefetchRefetchQuery(\n  $count: Int\n  $after: String\n) {\n  ...LocationsPaginatedRefetch_data_2QE1um\n}\n\nfragment Location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedRefetch_data_2QE1um on RootQuery {\n  incrementalPagination: locations(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...Location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'd860be451b1c3f05016d81c059a8904e';
export default node;
