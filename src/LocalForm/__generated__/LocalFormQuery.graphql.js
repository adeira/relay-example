/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type LocalFormQueryVariables = {||};
export type LocalFormQueryResponse = {|
  +locations: ?{|
    +__typename: string
  |},
  +localForm: ?{|
    +subject: ?string,
    +message: ?string,
  |},
|};
export type LocalFormQuery = {|
  variables: LocalFormQueryVariables,
  response: LocalFormQueryResponse,
|};

/*
query LocalFormQuery {
  locations(first: 0) {
    __typename
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 0
      }
    ],
    "concreteType": "LocationConnection",
    "kind": "LinkedField",
    "name": "locations",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      }
    ],
    "storageKey": "locations(first:0)"
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
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LocalFormQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LocalFormQuery",
    "operationKind": "query",
    "text": "query LocalFormQuery {\n  locations(first: 0) {\n    __typename\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '507cef5d350e79a2935ca660216818d6';
export default node;
