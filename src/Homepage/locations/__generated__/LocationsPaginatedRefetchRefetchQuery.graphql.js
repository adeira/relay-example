/**
 * @flow
 * @relayHash 749dbcadd71f1b0d1f875b97ae9f468e
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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

fragment Location_location on Location {
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
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data",
        "args": [
          (v1/*: any*/),
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination",
        "name": "locations",
        "storageKey": null,
        "args": (v2/*: any*/),
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "countryFlagURL",
                    "args": null,
                    "storageKey": null
                  },
                  {
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination",
        "name": "locations",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "locations_incrementalPagination",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "id": null,
    "text": "query LocationsPaginatedRefetchRefetchQuery(\n  $count: Int\n  $after: String\n) {\n  ...LocationsPaginatedRefetch_data_2QE1um\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedRefetch_data_2QE1um on RootQuery {\n  incrementalPagination: locations(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'd860be451b1c3f05016d81c059a8904e';
export default node;
