/**
 * @flow
 * @relayHash 466a8dfab877fe87c02cddc6c8637e70
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { LocationsPaginatedRefetch_data$ref } from "./LocationsPaginatedRefetch_data.graphql";
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
*/


/*
query LocationsPaginatedRefetchRefetchQuery(
  $count: Int
  $after: String
) {
  ...LocationsPaginatedRefetch_data_2QE1um
}

fragment LocationsPaginatedRefetch_data_2QE1um on RootQuery {
  incrementalPagination: allLocations(first: $count, after: $after) {
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
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
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
        "name": "allLocations",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "country",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LocationArea",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "type",
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
        "alias": "incrementalPagination",
        "name": "allLocations",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsPaginatedRefetchRefetchQuery",
    "id": null,
    "text": "query LocationsPaginatedRefetchRefetchQuery(\n  $count: Int\n  $after: String\n) {\n  ...LocationsPaginatedRefetch_data_2QE1um\n}\n\nfragment LocationsPaginatedRefetch_data_2QE1um on RootQuery {\n  incrementalPagination: allLocations(first: $count, after: $after) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Location_location on Location {\n  name\n  ...CountryFlag_location\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd860be451b1c3f05016d81c059a8904e';
module.exports = node;
