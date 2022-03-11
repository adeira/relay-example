/**
 * @generated SignedSource<<28f2ada5f1928f046b2298ddbec00a1c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type PollingQuery$variables = {||};
export type PollingQuery$data = ?{|
  +currency: {|
    +rate: number,
  |},
|};
export type PollingQuery = {|
  variables: PollingQuery$variables,
  response: PollingQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "usd"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rate",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PollingQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v0/*: any*/),
          "concreteType": "Currency",
          "kind": "LinkedField",
          "name": "currency",
          "plural": false,
          "selections": [
            {
              "kind": "RequiredField",
              "field": (v1/*: any*/),
              "action": "LOG",
              "path": "currency.rate"
            }
          ],
          "storageKey": "currency(code:\"usd\")"
        },
        "action": "LOG",
        "path": "currency"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PollingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Currency",
        "kind": "LinkedField",
        "name": "currency",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "currency(code:\"usd\")"
      }
    ]
  },
  "params": {
    "cacheID": "0ea3afbf569853cf58ab863e84ee10a6",
    "id": null,
    "metadata": {
      "live": {
        "polling_interval": 500
      }
    },
    "name": "PollingQuery",
    "operationKind": "query",
    "text": "query PollingQuery {\n  currency(code: \"usd\") {\n    rate\n    id\n  }\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "c9b7aac5ed69c8452f1a5e4fb34141aa";
}

module.exports = ((node/*: any*/)/*: Query<
  PollingQuery$variables,
  PollingQuery$data,
>*/);
