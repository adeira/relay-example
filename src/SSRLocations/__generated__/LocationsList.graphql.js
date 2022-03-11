/**
 * @generated SignedSource<<f2a0f912dc6e8769e8c329ebce3e3d46>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type LocationListItem$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type LocationsList$fragmentType: FragmentType;
export type LocationsList$data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentSpreads: LocationListItem$fragmentType,
    |},
  |}>,
  +$fragmentType: LocationsList$fragmentType,
|};
export type LocationsList$key = {
  +$data?: LocationsList$data,
  +$fragmentSpreads: LocationsList$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LocationsList",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LocationEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "LocationListItem"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "LocationConnection",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "41e58f9d458466b240d3a17bde2d7e12";
}

module.exports = ((node/*: any*/)/*: Fragment<
  LocationsList$fragmentType,
  LocationsList$data,
>*/);
