/**
 * @flow
 * @relayHash f956d44c49bd759275aff72f074a500f
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
    "id": null,
    "text": "query LocalFormQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a80e31cfd4b804fdc5e841826e42d46b';
module.exports = node;
