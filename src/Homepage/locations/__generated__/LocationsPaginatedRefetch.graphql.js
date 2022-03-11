/**
 * @generated SignedSource<<984459f93df0ba24b32d09778ea6655a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./x relay
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
type Location$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type LocationsPaginatedRefetch$fragmentType: FragmentType;
type LocationsPaginatedRefetchRefetchQuery$variables = any;
export type LocationsPaginatedRefetch$data = {|
  +incrementalPagination: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentSpreads: Location$fragmentType,
      |},
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
    |},
  |},
  +$fragmentType: LocationsPaginatedRefetch$fragmentType,
|};
export type LocationsPaginatedRefetch$key = {
  +$data?: LocationsPaginatedRefetch$data,
  +$fragmentSpreads: LocationsPaginatedRefetch$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = [
  "incrementalPagination"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./LocationsPaginatedRefetchRefetchQuery.graphql')
    }
  },
  "name": "LocationsPaginatedRefetch",
  "selections": [
    {
      "alias": "incrementalPagination",
      "args": null,
      "concreteType": "LocationConnection",
      "kind": "LinkedField",
      "name": "__locations_incrementalPagination_connection",
      "plural": false,
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
                  "name": "Location"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQuery",
  "abstractKey": null
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "9b7f0b241071b44b2e2f386b1e71ce2e";
}

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  LocationsPaginatedRefetch$fragmentType,
  LocationsPaginatedRefetch$data,
  LocationsPaginatedRefetchRefetchQuery$variables,
>*/);
