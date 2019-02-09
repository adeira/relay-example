/**
 * @flow
 * @relayHash 3e5f297353e4cdc901c32a43a32781f8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { LocationsPaginated_data$ref } from "./LocationsPaginated_data.graphql";
export type LocationsPaginatedRefetchQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type LocationsPaginatedRefetchQueryResponse = {|
  +$fragmentRefs: LocationsPaginated_data$ref
|};
export type LocationsPaginatedRefetchQuery = {|
  variables: LocationsPaginatedRefetchQueryVariables,
  response: LocationsPaginatedRefetchQueryResponse,
|};
*/


/*
query LocationsPaginatedRefetchQuery(
  $count: Int
  $cursor: String
) {
  ...LocationsPaginated_data_kPtUz
}

fragment LocationsPaginated_data_kPtUz on RootQuery {
  incrementalPagination2: allLocations(first: $count, after: $cursor) {
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
  countryFlagURL
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsPaginatedRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginated_data",
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsPaginatedRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination2",
        "name": "allLocations",
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
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "countryFlagURL",
                    "args": null,
                    "storageKey": null
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
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination2",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsPaginatedRefetchQuery",
    "id": null,
    "text": "query LocationsPaginatedRefetchQuery(\n  $count: Int\n  $cursor: String\n) {\n  ...LocationsPaginated_data_kPtUz\n}\n\nfragment LocationsPaginated_data_kPtUz on RootQuery {\n  incrementalPagination2: allLocations(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '18eeeddb06165648d90b9fe38c768d68';
module.exports = node;
