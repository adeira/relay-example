/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type CountryFlag_location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Location_location$ref: FragmentReference;
declare export opaque type Location_location$fragmentType: Location_location$ref;
export type Location_location = {|
  +name: ?string,
  +$fragmentRefs: CountryFlag_location$ref,
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
    },
    {
      "kind": "FragmentSpread",
      "name": "CountryFlag_location",
      "args": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '90b49a75389a827efd865272010594b8';
export default node;
