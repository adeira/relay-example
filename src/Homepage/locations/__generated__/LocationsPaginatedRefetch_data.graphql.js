/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type Location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationsPaginatedRefetch_data$ref: FragmentReference;
declare export opaque type LocationsPaginatedRefetch_data$fragmentType: LocationsPaginatedRefetch_data$ref;
export type LocationsPaginatedRefetch_data = {|
  +incrementalPagination: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Location$ref,
      |}
    |}>,
    +pageInfo: {|
      +endCursor: ?string
    |},
  |},
  +$refType: LocationsPaginatedRefetch_data$ref,
|};
export type LocationsPaginatedRefetch_data$data = LocationsPaginatedRefetch_data;
export type LocationsPaginatedRefetch_data$key = {
  +$data?: LocationsPaginatedRefetch_data$data,
  +$fragmentRefs: LocationsPaginatedRefetch_data$ref,
  ...
};


const node: ReaderFragment = {
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
        "path": [
          "incrementalPagination"
        ]
      }
    ]
  },
  "name": "LocationsPaginatedRefetch_data",
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Location"
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
// prettier-ignore
(node: any).hash = '13188dd065b0b951ea416b645efa47cc';
export default node;
