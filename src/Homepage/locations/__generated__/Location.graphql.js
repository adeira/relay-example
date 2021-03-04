/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Location$ref: FragmentReference;
declare export opaque type Location$fragmentType: Location$ref;
export type Location = {|
  +name: ?string,
  +countryFlagURL: ?string,
  +country: ?{|
    +name: ?string
  |},
  +$refType: Location$ref,
|};
export type Location$data = Location;
export type Location$key = {
  +$data?: Location$data,
  +$fragmentRefs: Location$ref,
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
  "name": "Location",
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
(node: any).hash = '58584a7e6bd090556fbbb1e258ca704e';
export default node;
