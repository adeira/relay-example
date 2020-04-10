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
  +countryFlagURL: ?string,
  +country: ?{|
    +name: ?string
  |},
  +$refType: Location_location$ref,
|};
export type Location_location$data = Location_location;
export type Location_location$key = {
  +$data?: Location_location$data,
  +$fragmentRefs: Location_location$ref,
  ...
};


const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Location_location",
  "type": "Location",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "countryFlagURL",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "country",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
// prettier-ignore
(node: any).hash = '7c698b5358738414da51f39ea27ddd47';
export default node;
