/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedRefetch_data$ref = any;
export type LocationsPaginatedRefetchTestQueryVariables = {||};
export type LocationsPaginatedRefetchTestQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedRefetch_data$ref
|};
export type LocationsPaginatedRefetchTestQuery = {|
  variables: LocationsPaginatedRefetchTestQueryVariables,
  response: LocationsPaginatedRefetchTestQueryResponse,
|};

/*
query LocationsPaginatedRefetchTestQuery {
  ...LocationsPaginatedRefetch_data
}

fragment Location_location on Location {
  name
  countryFlagURL
  country {
    name
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsPaginatedRefetchTestQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data"
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LocationsPaginatedRefetchTestQuery",
    "selections": [
      {
        "alias": "incrementalPagination",
        "args": (v0/*: any*/),
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
                  (v1/*: any*/),
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
                      (v1/*: any*/)
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
        "storageKey": "locations(first:20)"
      },
      {
        "alias": "incrementalPagination",
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "locations_incrementalPagination",
        "kind": "LinkedHandle",
        "name": "locations"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "incrementalPagination": {
          "type": "LocationConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "incrementalPagination.edges": {
          "type": "LocationEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "incrementalPagination.pageInfo": {
          "type": "PageInfo",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "incrementalPagination.edges.node": {
          "type": "Location",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "incrementalPagination.pageInfo.endCursor": (v2/*: any*/),
        "incrementalPagination.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "incrementalPagination.edges.cursor": (v3/*: any*/),
        "incrementalPagination.pageInfo.hasNextPage": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "incrementalPagination.edges.node.name": (v2/*: any*/),
        "incrementalPagination.edges.node.countryFlagURL": (v2/*: any*/),
        "incrementalPagination.edges.node.country": {
          "type": "LocationArea",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "incrementalPagination.edges.node.__typename": (v3/*: any*/),
        "incrementalPagination.edges.node.country.name": (v2/*: any*/)
      }
    },
    "name": "LocationsPaginatedRefetchTestQuery",
    "operationKind": "query",
    "text": "query LocationsPaginatedRefetchTestQuery {\n  ...LocationsPaginatedRefetch_data\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedRefetch_data on RootQuery {\n  incrementalPagination: locations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '27422bb6ee6bf293f13ca56c3ecf9166';
export default node;
