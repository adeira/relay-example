/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type HotelListItem_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelsList_hotels$ref: FragmentReference;
declare export opaque type HotelsList_hotels$fragmentType: HotelsList_hotels$ref;
export type HotelsList_hotels = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: HotelListItem_hotel$ref,
    |}
  |}>,
  +$refType: HotelsList_hotels$ref,
|};
export type HotelsList_hotels$data = HotelsList_hotels;
export type HotelsList_hotels$key = {
  +$data?: HotelsList_hotels$data,
  +$fragmentRefs: HotelsList_hotels$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HotelsList_hotels",
  "type": "AllHotelAvailabilityHotelConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "AllHotelAvailabilityHotelEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "AllHotelAvailabilityHotel",
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
              "name": "HotelListItem_hotel",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '55db5d184d19a0b136d61b52a82c17d7';
export default node;
