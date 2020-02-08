/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type LocationListItem_location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationsList_locations$ref: FragmentReference;
declare export opaque type LocationsList_locations$fragmentType: LocationsList_locations$ref;
export type LocationsList_locations = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: LocationListItem_location$ref,
    |}
  |}>,
  +$refType: LocationsList_locations$ref,
|};
export type LocationsList_locations$data = LocationsList_locations;
export type LocationsList_locations$key = {
  +$data?: LocationsList_locations$data,
  +$fragmentRefs: LocationsList_locations$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "LocationsList_locations",
  "type": "LocationConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "LocationListItem_location",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = 'c52e566c5b829069868d00f531eb22d7';
export default node;
