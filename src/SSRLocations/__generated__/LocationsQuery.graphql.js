/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type LocationsList_locations$ref = any;
export type LocationsQueryVariables = {|
  first: number
|};
export type LocationsQueryResponse = {|
  +locations: ?{|
    +$fragmentRefs: LocationsList_locations$ref
  |}
|};
export type LocationsQuery = {|
  variables: LocationsQueryVariables,
  response: LocationsQueryResponse,
|};

/*
query LocationsQuery(
  $first: Int!
) {
  locations(first: $first) {
    ...LocationsList_locations
  }
}

fragment LocationListItem_location on Location {
  name
}

fragment LocationsList_locations on LocationConnection {
  edges {
    node {
      id
      ...LocationListItem_location
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "LocationsList_locations"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LocationsQuery",
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
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
    "id": null,
    "metadata": {},
    "name": "LocationsQuery",
    "operationKind": "query",
    "text": "query LocationsQuery(\n  $first: Int!\n) {\n  locations(first: $first) {\n    ...LocationsList_locations\n  }\n}\n\nfragment LocationListItem_location on Location {\n  name\n}\n\nfragment LocationsList_locations on LocationConnection {\n  edges {\n    node {\n      id\n      ...LocationListItem_location\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '60fdf6bfaee22cd990f67a20469f86be';
export default node;
