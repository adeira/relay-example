/**
 * @flow
 * @relayHash 84eec4b8e3d489240768e27b7b91f21f
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type LocationsList_data$ref = any;
export type SimpleLocationsQueryVariables = {||};
export type SimpleLocationsQueryResponse = {|
  +$fragmentRefs: LocationsList_data$ref
|};
export type SimpleLocationsQuery = {|
  variables: SimpleLocationsQueryVariables,
  response: SimpleLocationsQueryResponse,
|};

/*
query SimpleLocationsQuery {
  ...LocationsList_data
}

fragment LocationsList_data on RootQuery {
  locations(first: 3) {
    edges {
      node {
        id
        name
        type
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
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SimpleLocationsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsList_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SimpleLocationsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": "locations(first:3)",
        "args": (v0/*: any*/),
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
        "alias": null,
        "name": "locations",
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "LocationsList_locations",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SimpleLocationsQuery",
    "id": null,
    "text": "query SimpleLocationsQuery {\n  ...LocationsList_data\n}\n\nfragment LocationsList_data on RootQuery {\n  locations(first: 3) {\n    edges {\n      node {\n        id\n        name\n        type\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '08a8dad3d66866d253ff2c22181d0796';
export default node;
