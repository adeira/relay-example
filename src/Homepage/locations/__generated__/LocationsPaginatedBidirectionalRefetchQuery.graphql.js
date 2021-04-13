/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsPaginatedBidirectional$ref = any;
export type LocationsPaginatedBidirectionalRefetchQueryVariables = {|
  after?: ?string,
  before?: ?string,
  first?: ?number,
  last?: ?number,
|};
export type LocationsPaginatedBidirectionalRefetchQueryResponse = {|
  +$fragmentRefs: LocationsPaginatedBidirectional$ref
|};
export type LocationsPaginatedBidirectionalRefetchQuery = {|
  variables: LocationsPaginatedBidirectionalRefetchQueryVariables,
  response: LocationsPaginatedBidirectionalRefetchQueryResponse,
|};

/*
query LocationsPaginatedBidirectionalRefetchQuery(
  $after: String
  $before: String
  $first: Int
  $last: Int
) {
  ...LocationsPaginatedBidirectional_pbnwq
}

fragment Location on Location {
  name
  countryFlagURL
  country {
    name
  }
}

fragment LocationsPaginatedBidirectional_pbnwq on RootQuery {
  locations(first: $first, last: $last, after: $after, before: $before) {
    edges {
      node {
        id
        ...Location
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "before"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "last"
  }
],
v1 = [
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
v2 = {
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
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "LocationsPaginatedBidirectional"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
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
                      (v2/*: any*/)
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
    "cacheID": "314bf8e00ef1920d062de67947dc7c80",
    "id": null,
    "metadata": {},
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "operationKind": "query",
    "text": "query LocationsPaginatedBidirectionalRefetchQuery(\n  $after: String\n  $before: String\n  $first: Int\n  $last: Int\n) {\n  ...LocationsPaginatedBidirectional_pbnwq\n}\n\nfragment Location on Location {\n  name\n  countryFlagURL\n  country {\n    name\n  }\n}\n\nfragment LocationsPaginatedBidirectional_pbnwq on RootQuery {\n  locations(first: $first, last: $last, after: $after, before: $before) {\n    edges {\n      node {\n        id\n        ...Location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '46f79f411cdd91adf7c66321a579be4b';
export default node;
