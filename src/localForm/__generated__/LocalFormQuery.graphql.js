/**
 * @flow
 * @relayHash 35de10ffa5a0bdd7b3d1464a61f4883f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LocalFormQueryVariables = {||};
export type LocalFormQueryResponse = {|
  +__typename: string,
  +localForm: ?{|
    +subject: ?string,
    +message: ?string,
  |},
|};
export type LocalFormQuery = {|
  variables: LocalFormQueryVariables,
  response: LocalFormQueryResponse,
|};
*/


/*
query LocalFormQuery {
  __typename
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "localForm",
        "storageKey": null,
        "args": null,
        "concreteType": "LocalForm",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "subject",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
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
    "name": "LocalFormQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LocalFormQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LocalFormQuery",
    "id": "0d99b879d458f565ba2e90754bb6673f",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a80e31cfd4b804fdc5e841826e42d46b';
/*:: declare var __DEV__: boolean; */
if (__DEV__) {
  (node/*: any*/).params.text = "query LocalFormQuery {\n  __typename\n}\n";
}
module.exports = node;
