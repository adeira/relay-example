/**
 * @generated SignedSource<<37e36ba196c445ba954063303b0bff09>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type LocationsList$fragmentType = any;
export type LocationsQuery$variables = {|
  first: number,
|};
export type LocationsQueryVariables = LocationsQuery$variables;
export type LocationsQuery$data = {|
  +locations: ?{|
    +$fragmentSpreads: LocationsList$fragmentType,
  |},
|};
export type LocationsQueryResponse = LocationsQuery$data;
export type LocationsQuery = {|
  variables: LocationsQueryVariables,
  response: LocationsQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
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
            "name": "LocationsList"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
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
    "cacheID": "bc2822430c3514095c8044cd6dabff6d",
    "id": null,
    "metadata": {},
    "name": "LocationsQuery",
    "operationKind": "query",
    "text": "query LocationsQuery(\n  $first: Int!\n) {\n  locations(first: $first) {\n    ...LocationsList\n  }\n}\n\nfragment LocationListItem on Location {\n  name\n}\n\nfragment LocationsList on LocationConnection {\n  edges {\n    node {\n      id\n      ...LocationListItem\n    }\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "3b0df24d2dfd6f8221b06f3dff4e6bbb";
}

module.exports = ((node/*: any*/)/*: Query<
  LocationsQuery$variables,
  LocationsQuery$data,
>*/);
