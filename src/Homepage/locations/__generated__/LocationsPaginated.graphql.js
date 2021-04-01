/**
 * @generated SignedSource<<dfb3e8df2c33b721fbe4075d7f177f3a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 * @codegen-command: ./node_modules/.bin/relay-compiler
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
type Location$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type LocationsPaginated$fragmentType: FragmentType;
export type LocationsPaginated$ref = LocationsPaginated$fragmentType;
type LocationsPaginatedRefetchQuery$variables = any;
export type LocationsPaginated$data = {|
  +incrementalPagination2: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentSpreads: Location$fragmentType,
      |},
    |}>,
  |},
  +$fragmentType: LocationsPaginated$fragmentType,
|};
export type LocationsPaginated = LocationsPaginated$data;
export type LocationsPaginated$key = {
  +$data?: LocationsPaginated$data,
  +$fragmentSpreads: LocationsPaginated$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = [
  "incrementalPagination2"
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
      "operation": require('./LocationsPaginatedRefetchQuery.graphql')
    }
  },
  "name": "LocationsPaginated",
  "selections": [
    {
      "alias": "incrementalPagination2",
      "args": null,
      "concreteType": "LocationConnection",
      "kind": "LinkedField",
      "name": "__locations_incrementalPagination2_connection",
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
  (node/*: any*/).hash = "4c6e41152f6e3fb4c537ab2d68022119";
}

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  LocationsPaginated$fragmentType,
  LocationsPaginated$data,
  LocationsPaginatedRefetchQuery$variables,
>*/);
