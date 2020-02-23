/**
 * @flow
 * @relayHash 424afe609be81646e96884bdf3fcc570
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
export type addLocationMutationVariables = {|
  location: AddLocationInput
|};
export type addLocationMutationResponse = {|
  +addLocation: ?{|
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
export type addLocationMutation = {|
  variables: addLocationMutationVariables,
  response: addLocationMutationResponse,
|};

/*
mutation addLocationMutation(
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
    "kind": "Variable",
    "name": "location",
    "variableName": "location"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "message",
  "args": null,
  "storageKey": null
},
v3 = {
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "addLocationMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addLocation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addLocationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addLocation",
        "storageKey": null,
        "args": (v1/*: any*/),
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
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "addLocationMutation",
    "id": null,
    "text": "mutation addLocationMutation(\n  $location: AddLocationInput!\n) {\n  addLocation(location: $location) {\n    __typename\n    ... on AddLocationResponse {\n      locationEdge {\n        node {\n          locationId\n          name\n          id\n          type\n        }\n      }\n    }\n    ... on Error {\n      message\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '424eaa6ac68e711ca9cf672d6a2dc2f7';
export default node;
