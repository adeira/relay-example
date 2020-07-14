/**
 * @flow
 */

/* eslint-disable */

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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Location_location",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "countryFlagURL",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "LocationArea",
      "kind": "LinkedField",
      "name": "country",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Location",
  "abstractKey": null
};
})();
// prettier-ignore
(node: any).hash = '7c698b5358738414da51f39ea27ddd47';
export default node;
