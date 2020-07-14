/**
 * @flow
 */

/* eslint-disable */

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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocationsList_locations",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LocationEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "LocationListItem_location"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LocationConnection",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = 'c52e566c5b829069868d00f531eb22d7';
export default node;
