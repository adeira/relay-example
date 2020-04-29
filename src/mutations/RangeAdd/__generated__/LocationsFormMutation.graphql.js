/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type LocationType = "AIRPORT" | "CITY" | "COUNTRY" | "%future added value";
export type AddLocationInput = {|
  locationId: string,
  name: string,
  type: LocationType,
|};
export type LocationsFormMutationVariables = {|
  location: AddLocationInput
|};
export type LocationsFormMutationResponse = {|
  +addLocation: ?{|
    +__typename: string,
    +message?: ?string,
    +locationEdge?: ?{|
      +node: ?{|
        +locationId: ?string,
        +name: ?string,
        +id: string,
        +type: ?string,
      |}
    |},
  |}
|};
export type LocationsFormMutation = {|
  variables: LocationsFormMutationVariables,
  response: LocationsFormMutationResponse,
|};

/*
mutation LocationsFormMutation(
  $location: AddLocationInput!
) {
  addLocation(location: $location) {
    __typename
    ... on AddLocationResponse {
      locationEdge {
        node {
          locationId
          name
          id
          type
        }
      }
    }
    ... on Error {
      message
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "location",
    "type": "AddLocationInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "location",
        "variableName": "location"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "addLocation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationEdge",
            "kind": "LinkedField",
            "name": "locationEdge",
            "plural": false,
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
                    "name": "locationId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
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
                    "name": "type",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "AddLocationResponse"
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsFormMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LocationsFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LocationsFormMutation",
    "operationKind": "mutation",
    "text": "mutation LocationsFormMutation(\n  $location: AddLocationInput!\n) {\n  addLocation(location: $location) {\n    __typename\n    ... on AddLocationResponse {\n      locationEdge {\n        node {\n          locationId\n          name\n          id\n          type\n        }\n      }\n    }\n    ... on Error {\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'b76b10e95f185bbe64b7bf91d01fdf78';
export default node;
