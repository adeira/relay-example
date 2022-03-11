/**
 * @generated SignedSource<<afdcac1de4803e672fa7d8de86a5d7db>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x run relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type Location$fragmentType: FragmentType;
export type Location$data = ?{|
  +name: string,
  +countryFlagURL: ?string,
  +country: ?{|
    +name: string,
  |},
  +$fragmentType: Location$fragmentType,
|};
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
    }
  ],
  "type": "Location",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "9e0578670d216b8c9b0a40aa1ef5d561";
}

module.exports = ((node/*: any*/)/*: Fragment<
  Location$fragmentType,
  Location$data,
>*/);
