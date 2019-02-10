/**
 * @flow
 * @relayHash 7e9fdd1e543ab2675dab1071728143ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { LocationsPaginatedBidirectional_data$ref } from "./LocationsPaginatedBidirectional_data.graphql";
import type { LocationsPaginatedRefetch_data$ref } from "./LocationsPaginatedRefetch_data.graphql";
import type { LocationsPaginated_data$ref } from "./LocationsPaginated_data.graphql";
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional_data$ref & LocationsPaginatedRefetch_data$ref & LocationsPaginated_data$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  ...LocationsPaginatedBidirectional_data
  ...LocationsPaginatedRefetch_data
  ...LocationsPaginated_data
}

fragment LocationsPaginatedBidirectional_data on RootQuery {
  allLocations(first: 20) {
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

fragment LocationsPaginated_data on RootQuery {
  incrementalPagination2: allLocations(first: 20) {
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
    "kind": "Literal",
    "name": "first",
    "value": 20,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "country",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v2/*: any*/)
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
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
          (v1/*: any*/),
          (v2/*: any*/),
          (v4/*: any*/),
          (v3/*: any*/),
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
    "name": "AppQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional_data",
        "args": null
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
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v3/*: any*/),
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
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
        "args": (v0/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v8/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination",
        "name": "allLocations",
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination",
        "filters": null
      },
      {
        "kind": "LinkedField",
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "storageKey": "allLocations(first:20)",
        "args": (v0/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": (v8/*: any*/)
      },
      {
        "kind": "LinkedHandle",
        "alias": "incrementalPagination2",
        "name": "allLocations",
        "args": (v0/*: any*/),
        "handle": "connection",
        "key": "allLocations_incrementalPagination2",
        "filters": null
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  ...LocationsPaginatedBidirectional_data\n  ...LocationsPaginatedRefetch_data\n  ...LocationsPaginated_data\n}\n\nfragment LocationsPaginatedBidirectional_data on RootQuery {\n  allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment LocationsPaginatedRefetch_data on RootQuery {\n  incrementalPagination: allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment LocationsPaginated_data on RootQuery {\n  incrementalPagination2: allLocations(first: 20) {\n    edges {\n      node {\n        id\n        ...Location_location\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Location_location on Location {\n  name\n  ...CountryFlag_location\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10f0aa5bc300a9e2a5c582b2e2ff1d90';
module.exports = node;
