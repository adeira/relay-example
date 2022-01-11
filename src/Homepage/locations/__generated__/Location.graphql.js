/**
 * @generated SignedSource<<2a726d915dabe9847ae37e1102fed56e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Location$fragmentType: FragmentType;
export type Location$ref = Location$fragmentType;
export type Location$data = ?{|
  +name: string,
  +countryFlagURL: ?string,
  +country: {|
    +name: string,
  |},
  +$fragmentType: Location$fragmentType,
|};
export type Location = Location$data;
export type Location$key = {
  +$data?: Location$data,
  +$fragmentSpreads: Location$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
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
    {
      "kind": "RequiredField",
      "field": (v0/*: any*/),
      "action": "LOG",
      "path": "name"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "countryFlagURL",
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "LocationArea",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "kind": "RequiredField",
            "field": (v0/*: any*/),
            "action": "LOG",
            "path": "country.name"
          }
        ],
        "storageKey": null
      },
      "action": "LOG",
      "path": "country"
    }
  ],
  "type": "Location",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "478842e5148519824b223a54796a654f";
}

module.exports = ((node/*: any*/)/*: Fragment<
  Location$fragmentType,
  Location$data,
>*/);
