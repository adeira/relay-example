/**
 * @generated SignedSource<<5920ad3cff998bc85311b9181520ade6>>
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
export type Location$data = {|
  +name: ?string,
  +countryFlagURL: ?string,
  +country: ?{|
    +name: ?string,
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

if (__DEV__) {
  (node/*: any*/).hash = "58584a7e6bd090556fbbb1e258ca704e";
}

module.exports = ((node/*: any*/)/*: Fragment<
  Location$fragmentType,
  Location$data,
>*/);
