/**
 * @flow
 * @relayHash aaf1f1be9952e198ee157331076a7c45
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "location",
    "type": "AddLocationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addLocation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "location",
        "variableName": "location"
      }
    ],
    "concreteType": null,
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "type": "AddLocationResponse",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "locationEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": false,
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
                    "name": "locationId",
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
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "type",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsFormMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsFormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LocationsFormMutation",
    "id": null,
    "text": "mutation LocationsFormMutation(\n  $location: AddLocationInput!\n) {\n  addLocation(location: $location) {\n    __typename\n    ... on AddLocationResponse {\n      locationEdge {\n        node {\n          locationId\n          name\n          id\n          type\n        }\n      }\n    }\n    ... on Error {\n      message\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'b76b10e95f185bbe64b7bf91d01fdf78';
export default node;
