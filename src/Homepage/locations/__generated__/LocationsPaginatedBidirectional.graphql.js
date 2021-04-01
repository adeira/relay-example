/**
 * @generated SignedSource<<59c998569e41d87c2ede20aff7d28144>>
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
declare export opaque type LocationsPaginatedBidirectional$fragmentType: FragmentType;
export type LocationsPaginatedBidirectional$ref = LocationsPaginatedBidirectional$fragmentType;
type LocationsPaginatedBidirectionalRefetchQuery$variables = any;
export type LocationsPaginatedBidirectional$data = {|
  +locations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentSpreads: Location$fragmentType,
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
      +endCursor: ?string,
    |},
  |},
  +$fragmentType: LocationsPaginatedBidirectional$fragmentType,
|};
export type LocationsPaginatedBidirectional = LocationsPaginatedBidirectional$data;
export type LocationsPaginatedBidirectional$key = {
  +$data?: LocationsPaginatedBidirectional$data,
  +$fragmentSpreads: LocationsPaginatedBidirectional$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "before"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "last"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./LocationsPaginatedBidirectionalRefetchQuery.graphql')
    }
  },
  "name": "LocationsPaginatedBidirectional",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "after"
        },
        {
          "kind": "Variable",
          "name": "before",
          "variableName": "before"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        },
        {
          "kind": "Variable",
          "name": "last",
          "variableName": "last"
        }
      ],
      "concreteType": "LocationConnection",
      "kind": "LinkedField",
      "name": "locations",
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
                }
              ],
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
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

if (__DEV__) {
  (node/*: any*/).hash = "46f79f411cdd91adf7c66321a579be4b";
}

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  LocationsPaginatedBidirectional$fragmentType,
  LocationsPaginatedBidirectional$data,
  LocationsPaginatedBidirectionalRefetchQuery$variables,
>*/);
