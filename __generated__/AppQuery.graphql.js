/**
 * @flow
 * @relayHash f148cdda0d7a100444fd1e577ea197e5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { AllLocations$ref } from "./AllLocations.graphql";
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +$fragmentRefs: AllLocations$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  ...AllLocations
}

fragment AllLocations on RootQuery {
  allLocations(first: 10) {
    edges {
      node {
        id(opaque: false)
        ...Location
      }
    }
  }
}

fragment Location on Location {
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  ...AllLocations\n}\n\nfragment AllLocations on RootQuery {\n  allLocations(first: 10) {\n    edges {\n      node {\n        id(opaque: false)\n        ...Location\n      }\n    }\n  }\n}\n\nfragment Location on Location {\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllLocations",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": "allLocations(first:10)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "opaque",
                        "value": false,
                        "type": "Boolean"
                      }
                    ],
                    "storageKey": "id(opaque:false)"
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '2d8794c6301fac13633bb22380e42632';
module.exports = node;
