/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { Location_location$ref } from "./Location_location.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllLocations_data$ref: FragmentReference;
export type AllLocations_data = {|
  +allLocations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Location_location$ref,
      |}
    |}>
  |},
  +$refType: AllLocations_data$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllLocations_data",
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
                  "name": "Location_location",
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
(node/*: any*/).hash = '7c03478c725378682369cd823cc0cb12';
module.exports = node;
