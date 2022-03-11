/**
 * @generated SignedSource<<b2c1e7fbe0ddcf46daa20fef64f04175>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type LocalFormQuery$variables = {||};
export type LocalFormQuery$data = {|
  +__typename: string,
  +localForm: ?{|
    +subject: ?string,
    +message: ?string,
  |},
|};
export type LocalFormQuery = {|
  variables: LocalFormQuery$variables,
  response: LocalFormQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "LocalForm",
        "kind": "LinkedField",
        "name": "localForm",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "subject",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocalFormQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LocalFormQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0d99b879d458f565ba2e90754bb6673f",
    "id": null,
    "metadata": {},
    "name": "LocalFormQuery",
    "operationKind": "query",
    "text": "query LocalFormQuery {\n  __typename\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "e61f3eac0352f6268cbca8f35ceb79ed";
}

module.exports = ((node/*: any*/)/*: Query<
  LocalFormQuery$variables,
  LocalFormQuery$data,
>*/);
