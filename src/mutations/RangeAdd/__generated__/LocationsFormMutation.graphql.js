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
      __isError: __typename
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
    "name": "location"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
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
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Error",
  "abstractKey": "__isError"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "addLocation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "AddLocationResponse",
            "abstractKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LocationsFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "addLocation",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "prependEdge",
                "key": "",
                "kind": "LinkedHandle",
                "name": "locationEdge",
                "handleArgs": [
                  {
                    "kind": "Literal",
                    "name": "connections",
                    "value": [
                      "client:root:__LocationsList_locations_connection"
                    ]
                  }
                ]
              }
            ],
            "type": "AddLocationResponse",
            "abstractKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ee5a5e99115167c9e889b1e1ab510a56",
    "id": null,
    "metadata": {},
    "name": "LocationsFormMutation",
    "operationKind": "mutation",
    "text": "mutation LocationsFormMutation(\n  $location: AddLocationInput!\n) {\n  addLocation(location: $location) {\n    __typename\n    ... on AddLocationResponse {\n      locationEdge {\n        node {\n          locationId\n          name\n          id\n          type\n        }\n      }\n    }\n    ... on Error {\n      __isError: __typename\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '7beb8a2a80e3e7354ba8e494dd71a502';
export default node;
