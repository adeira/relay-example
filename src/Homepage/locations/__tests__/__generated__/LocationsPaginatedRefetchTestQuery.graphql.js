/**
 * @flow
 * @relayHash e7cb09a20809ea02cc28863a74f6cb70
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v4 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsPaginatedRefetchTestQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedRefetch_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsPaginatedRefetchTestQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination",
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
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
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "country",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LocationArea",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v1/*: any*/)
                    ]
                  },
                  (v2/*: any*/),
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
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsPaginatedRefetchTestQuery",
    "id": "7dac747c20a08f073be11029d6b9f5cd",
    "text": null,
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
        "incrementalPagination.pageInfo.endCursor": (v3/*: any*/),
        "incrementalPagination.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "incrementalPagination.edges.cursor": (v4/*: any*/),
        "incrementalPagination.pageInfo.hasNextPage": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "incrementalPagination.edges.node.name": (v3/*: any*/),
        "incrementalPagination.edges.node.__typename": (v4/*: any*/),
        "incrementalPagination.edges.node.country": {
          "type": "LocationArea",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "incrementalPagination.edges.node.code": (v3/*: any*/),
        "incrementalPagination.edges.node.type": (v3/*: any*/),
        "incrementalPagination.edges.node.country.code": (v3/*: any*/),
        "incrementalPagination.edges.node.country.name": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '27422bb6ee6bf293f13ca56c3ecf9166';
export default node;
