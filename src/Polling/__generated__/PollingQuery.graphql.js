/**
 * @flow
 * @relayHash 105d284e3a0ee22c05116f3643a2684f
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "abTestEnabled",
    "type": "Boolean!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "rate",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "Condition",
  "passingValue": true,
  "condition": "abTestEnabled",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "code",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "format",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PollingQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currency",
        "storageKey": "currency(code:\"usd\")",
        "args": (v1/*: any*/),
        "concreteType": "CurrencyDetail",
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
    "name": "PollingQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currency",
        "storageKey": "currency(code:\"usd\")",
        "args": (v1/*: any*/),
        "concreteType": "CurrencyDetail",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PollingQuery",
    "id": "523eaab722a497406537537ec3f79687",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '4fe8e121396058d93ef63050a2f5b555';
export default node;
