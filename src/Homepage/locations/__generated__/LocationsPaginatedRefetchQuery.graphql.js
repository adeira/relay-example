/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginated$ref = any;
export type LocationsPaginatedRefetchQueryVariables = {|
  after?: ?string,
  count?: ?number,
|};
export type LocationsPaginatedRefetchQueryResponse = {|
  +$fragmentRefs: LocationsPaginated$ref
|};
export type LocationsPaginatedRefetchQuery = {|
  variables: LocationsPaginatedRefetchQueryVariables,
  response: LocationsPaginatedRefetchQueryResponse,
|};

/*
query LocationsPaginatedRefetchQuery(
  $after: String
  $count: Int = 20
) {
  ...LocationsPaginated_2QE1um
}

fragment Location on Location {
  name
  countryFlagURL
  country {
    name
  }
}

fragment LocationsPaginated_2QE1um on RootQuery {
  incrementalPagination2: locations(first: $count, after: $after) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 20,
    "kind": "LocalArgument",
    "name": "count"
  }
],
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsPaginatedRefetchQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ],
        "kind": "FragmentSpread",
        "name": "LocationsPaginated"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LocationsPaginatedRefetchQuery",
    "selections": [
      {
        "alias": "incrementalPagination2",
        "args": (v2/*: any*/),
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
                  (v3/*: any*/),
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
                      (v3/*: any*/)
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
        "alias": "incrementalPagination2",
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "locations_incrementalPagination2",
        "kind": "LinkedHandle",
        "name": "locations"
      }
    ]
  },
  "params": {
    "cacheID": "e9fadc87db9bf3d523f25484d0ce88f8",
    "id": null,
    "metadata": {},
    "name": "LocationsPaginatedRefetchQuery",
    "operationKind": "query",
    "text": "query LocationsPaginatedRefetchQuery(\n  $after: String\n  $count: Int = 20\n) {\n  ...LocationsPaginated_2QE1um\n}\n\nfragment Location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginated_2QE1um on RootQuery {\n  incrementalPagination2: locations(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...Location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '4c6e41152f6e3fb4c537ab2d68022119';
export default node;
