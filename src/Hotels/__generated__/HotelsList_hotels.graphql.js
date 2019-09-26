/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type HotelListItem_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelsList_hotels$ref: FragmentReference;
declare export opaque type HotelsList_hotels$fragmentType: HotelsList_hotels$ref;
export type HotelsList_hotels = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: HotelListItem_hotel$ref
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
(node: any).hash = 'df3e2c15eff5de7b0c572de05831e1af';
export default node;
