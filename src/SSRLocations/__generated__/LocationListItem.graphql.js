/**
 * @generated SignedSource<<94f6e5219d8049caafd6d8238943b498>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type LocationListItem$fragmentType: FragmentType;
export type LocationListItem$data = {|
  +name: ?string,
  +$fragmentType: LocationListItem$fragmentType,
|};
export type LocationListItem$key = {
  +$data?: LocationListItem$data,
  +$fragmentSpreads: LocationListItem$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
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

if (__DEV__) {
  (node/*: any*/).hash = "e5e6d8fc671a1564d01f8d503ddaf067";
}

module.exports = ((node/*: any*/)/*: Fragment<
  LocationListItem$fragmentType,
  LocationListItem$data,
>*/);
