/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type Location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationsPaginatedRefetch$ref: FragmentReference;
declare export opaque type LocationsPaginatedRefetch$fragmentType: LocationsPaginatedRefetch$ref;
export type LocationsPaginatedRefetch = {|
  +incrementalPagination: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Location$ref,
      |}
    |}>,
    +pageInfo: {|
      +endCursor: ?string,
      +hasNextPage: boolean,
    |},
  |},
  +$refType: LocationsPaginatedRefetch$ref,
|};
export type LocationsPaginatedRefetch$data = LocationsPaginatedRefetch;
export type LocationsPaginatedRefetch$key = {
  +$data?: LocationsPaginatedRefetch$data,
  +$fragmentRefs: LocationsPaginatedRefetch$ref,
  ...
};


const node: ReaderFragment = (function(){
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
      "operation": require('./LocationsPaginatedRefetchRefetchQuery.graphql.js').default
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
})();
// prettier-ignore
(node: any).hash = '9b7f0b241071b44b2e2f386b1e71ce2e';
export default node;
