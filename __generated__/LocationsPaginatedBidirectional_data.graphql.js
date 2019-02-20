/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { HTTPError_error$ref } from "./HTTPError_error.graphql";
import type { LocationsPaginatedBidirectionalConnection_connection$ref } from "./LocationsPaginatedBidirectionalConnection_connection.graphql";
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationsPaginatedBidirectional_data$ref: FragmentReference;
export type LocationsPaginatedBidirectional_data = {|
  +allLocations: ?({|
    +__typename: "LocationConnection",
    +$fragmentRefs: LocationsPaginatedBidirectionalConnection_connection$ref,
  |} | {|
    +__typename: "DangerZone_HTTPErrorType",
    +$fragmentRefs: HTTPError_error$ref,
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other"
  |}),
  +$refType: LocationsPaginatedBidirectional_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LocationsPaginatedBidirectional_data",
  "type": "DangerZone_RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "last",
      "type": "Int",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "before",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allLocations",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "after",
          "type": "String"
        },
        {
          "kind": "Variable",
          "name": "before",
          "variableName": "before",
          "type": "String"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first",
          "type": "Int"
        },
        {
          "kind": "Literal",
          "name": "forceFail",
          "value": false,
          "type": "Boolean"
        },
        {
          "kind": "Variable",
          "name": "last",
          "variableName": "last",
          "type": "Int"
        }
      ],
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "__typename",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "type": "LocationConnection",
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "LocationsPaginatedBidirectionalConnection_connection",
              "args": null
            }
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "DangerZone_HTTPErrorType",
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "HTTPError_error",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75c6425a94eebeadd5492fd53e6a7b7a';
module.exports = node;
