/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Location_location$ref: FragmentReference;
declare export opaque type Location_location$fragmentType: Location_location$ref;
export type Location_location = {|
  +name: ?string,
  +$refType: Location_location$ref,
|};
export type Location_location$data = Location_location;
export type Location_location$key = {
  +$data?: Location_location$data,
  +$fragmentRefs: Location_location$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Location_location",
  "type": "Location",
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
(node: any).hash = '41fe7050dae52e7ec093383d7c141d5d';
export default node;
