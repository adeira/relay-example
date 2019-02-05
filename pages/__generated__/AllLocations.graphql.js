/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllLocations$ref: FragmentReference;
export type AllLocations = {|
  +allLocations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Location$ref,
      |}
    |}>
  |},
  +$refType: AllLocations$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllLocations",
  "type": "RootQuery",
  "metadata": null,
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
                  "kind": "FragmentSpread",
                  "name": "Location",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7d8243631f157c1530a239dec348a473';
module.exports = node;
