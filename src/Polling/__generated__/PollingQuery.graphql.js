/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type PollingQueryVariables = {|
  abTestEnabled: boolean
|};
export type PollingQueryResponse = {|
  +currency: ?{|
    +rate: ?number,
    +code?: ?string,
    +format?: ?string,
  |}
|};
export type PollingQuery = {|
  variables: PollingQueryVariables,
  response: PollingQueryResponse,
|};

/*
query PollingQuery(
  $abTestEnabled: Boolean!
) {
  currency(code: "usd") {
    rate
    code @include(if: $abTestEnabled)
    format @include(if: $abTestEnabled)
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "abTestEnabled"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "usd"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rate",
  "storageKey": null
},
v3 = {
  "condition": "abTestEnabled",
  "kind": "Condition",
  "passingValue": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "code",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "format",
      "storageKey": null
    }
  ]
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PollingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Currency",
        "kind": "LinkedField",
        "name": "currency",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "currency(code:\"usd\")"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PollingQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Currency",
        "kind": "LinkedField",
        "name": "currency",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "currency(code:\"usd\")"
      }
    ]
  },
  "params": {
    "cacheID": "f58374fd603c39d824dd8378305483cd",
    "id": null,
    "metadata": {},
    "name": "PollingQuery",
    "operationKind": "query",
    "text": "query PollingQuery(\n  $abTestEnabled: Boolean!\n) {\n  currency(code: \"usd\") {\n    rate\n    code @include(if: $abTestEnabled)\n    format @include(if: $abTestEnabled)\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '4fe8e121396058d93ef63050a2f5b555';
export default node;
