/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedBidirectional_data$ref = any;
export type LocationsPaginatedBidirectionalRefetchQueryVariables = {|
  first?: ?number,
  last?: ?number,
  after?: ?string,
  before?: ?string,
|};
export type LocationsPaginatedBidirectionalRefetchQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional_data$ref
|};
export type LocationsPaginatedBidirectionalRefetchQuery = {|
  variables: LocationsPaginatedBidirectionalRefetchQueryVariables,
  response: LocationsPaginatedBidirectionalRefetchQueryResponse,
|};

/*
query LocationsPaginatedBidirectionalRefetchQuery(
  $first: Int
  $last: Int
  $after: String
  $before: String
) {
  ...LocationsPaginatedBidirectional_data_pbnwq
}

fragment Location_location on Location {
  name
  countryFlagURL
  country {
    name
  }
}

fragment LocationsPaginatedBidirectional_data_pbnwq on RootQuery {
  locations(first: $first, last: $last, after: $after, before: $before) {
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
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "before"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "last"
  }
],
v5 = {
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "selections": [
      {
        "args": (v4/*: any*/),
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional_data"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
                  (v5/*: any*/),
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
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
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
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0fc8109aece2955b1fa7dc9f261df577",
    "id": null,
    "metadata": {},
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "operationKind": "query",
    "text": "query LocationsPaginatedBidirectionalRefetchQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n) {\n  ...LocationsPaginatedBidirectional_data_pbnwq\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedBidirectional_data_pbnwq on RootQuery {\n  locations(first: $first, last: $last, after: $after, before: $before) {\n    edges {\n      node {\n        id\n        ...Location_location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'b477875859d7890a09eedf906ddcb30a';
export default node;
