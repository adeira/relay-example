/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelListItem_hotel$ref: FragmentReference;
declare export opaque type HotelListItem_hotel$fragmentType: HotelListItem_hotel$ref;
export type HotelListItem_hotel = {|
  +name: ?string,
  +$refType: HotelListItem_hotel$ref,
|};
export type HotelListItem_hotel$data = HotelListItem_hotel;
export type HotelListItem_hotel$key = {
  +$data?: HotelListItem_hotel$data,
  +$fragmentRefs: HotelListItem_hotel$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HotelListItem_hotel",
  "type": "AllHotelAvailabilityHotel",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '9d7ad29b44cf52c8e0269cb7cd7b5001';
export default node;
