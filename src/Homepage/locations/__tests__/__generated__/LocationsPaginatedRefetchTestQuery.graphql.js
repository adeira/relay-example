/**
 * @flow
 * @relayHash 88eee03105949ad890d21e5ef060ab6a
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
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
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
        "name": "locations",
        "storageKey": "locations(first:20)",
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
                      (v1/*: any*/)
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
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "locations_incrementalPagination",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsPaginatedRefetchTestQuery",
    "id": null,
    "text": "query LocationsPaginatedRefetchTestQuery {\n  ...LocationsPaginatedRefetch_data\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedRefetch_data on RootQuery {\n  incrementalPagination: locations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
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
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '27422bb6ee6bf293f13ca56c3ecf9166';
export default node;
