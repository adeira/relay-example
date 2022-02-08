/**
 * @generated SignedSource<<28c4fe01994c01721c995aedac80a9cf>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type LocationType = "AIRPORT" | "CITY" | "COUNTRY" | "%future added value";
export type AddLocationInput = {|
  locationId: string,
  name: string,
  type: LocationType,
|};
export type LocationsFormMutation$variables = {|
  location: AddLocationInput,
  connections: $ReadOnlyArray<string>,
|};
export type LocationsFormMutation$data = {|
  +addLocation: ?{|
    +__typename: string,
    +message?: ?string,
    +locationEdge?: ?{|
      +node: ?{|
        +locationId: ?string,
        +name: ?string,
        +id: string,
        +type: ?string,
      |},
    |},
  |},
|};
export type LocationsFormMutation = {|
  variables: LocationsFormMutation$variables,
  response: LocationsFormMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location"
},
v2 = [
  {
    "kind": "Variable",
    "name": "location",
    "variableName": "location"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
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
v5 = {
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationsFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "addLocation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/)
            ],
            "type": "AddLocationResponse",
            "abstractKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "LocationsFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "addLocation",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
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
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "type": "AddLocationResponse",
            "abstractKey": null
          },
          (v5/*: any*/)
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

if (__DEV__) {
  (node/*: any*/).hash = "96c58517ee3913a83519a6cc97925513";
}

module.exports = ((node/*: any*/)/*: Mutation<
  LocationsFormMutation$variables,
  LocationsFormMutation$data,
>*/);
