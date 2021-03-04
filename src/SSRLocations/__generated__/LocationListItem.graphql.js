/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationListItem$ref: FragmentReference;
declare export opaque type LocationListItem$fragmentType: LocationListItem$ref;
export type LocationListItem = {|
  +name: ?string,
  +$refType: LocationListItem$ref,
|};
export type LocationListItem$data = LocationListItem;
export type LocationListItem$key = {
  +$data?: LocationListItem$data,
  +$fragmentRefs: LocationListItem$ref,
  ...
};


const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocationListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Location",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = 'e5e6d8fc671a1564d01f8d503ddaf067';
export default node;
