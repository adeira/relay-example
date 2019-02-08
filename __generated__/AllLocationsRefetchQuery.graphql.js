/**
 * @flow
 * @relayHash 428a1aa4beadebe7af2bb8b67e4473e9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { AllLocations_data$ref } from "./AllLocations_data.graphql";
export type AllLocationsRefetchQueryVariables = {|
  first?: ?number,
  last?: ?number,
  after?: ?string,
  before?: ?string,
|};
export type AllLocationsRefetchQueryResponse = {|
  +$fragmentRefs: AllLocations_data$ref
|};
export type AllLocationsRefetchQuery = {|
  variables: AllLocationsRefetchQueryVariables,
  response: AllLocationsRefetchQueryResponse,
|};
*/


/*
query AllLocationsRefetchQuery(
  $first: Int
  $last: Int
  $after: String
  $before: String
) {
  ...AllLocations_data_pbnwq
}

fragment AllLocations_data_pbnwq on RootQuery {
  allLocations(first: $first, last: $last, after: $after, before: $before) {
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

fragment Location_location on Location {
  name
  countryFlagURL
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "last",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "before",
    "type": "String",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AllLocationsRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllLocations_data",
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllLocationsRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "before",
            "variableName": "before",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "last",
            "variableName": "last",
            "type": "Int"
          }
        ],
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
                  }
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AllLocationsRefetchQuery",
    "id": null,
    "text": "query AllLocationsRefetchQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n) {\n  ...AllLocations_data_pbnwq\n}\n\nfragment AllLocations_data_pbnwq on RootQuery {\n  allLocations(first: $first, last: $last, after: $after, before: $before) {\n    edges {\n      node {\n        id\n        ...Location_location\n      }\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n\nfragment Location_location on Location {\n  name\n  countryFlagURL\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8679af920ad1307ced163451fd5e39e4';
module.exports = node;
