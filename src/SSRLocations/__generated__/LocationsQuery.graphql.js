/**
 * @flow
 * @relayHash f7ecdc84e50a52d783a55f93b5cdb479
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type LocationsList_locations$ref = any;
export type LocationsQueryVariables = {|
  first: number
|};
export type LocationsQueryResponse = {|
  +allLocations: ?{|
    +$fragmentRefs: LocationsList_locations$ref
  |}
|};
export type LocationsQuery = {|
  variables: LocationsQueryVariables,
  response: LocationsQueryResponse,
|};

/*
query LocationsQuery(
  $first: Int!
) {
  allLocations(first: $first) {
    ...LocationsList_locations
  }
}

fragment LocationListItem_location on Location {
  name
}

fragment LocationsList_locations on LocationConnection {
  edges {
    node {
      id
      ...LocationListItem_location
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "LocationsList_locations",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationsQuery",
    "id": null,
    "text": "query LocationsQuery(\n  $first: Int!\n) {\n  allLocations(first: $first) {\n    ...LocationsList_locations\n  }\n}\n\nfragment LocationListItem_location on Location {\n  name\n}\n\nfragment LocationsList_locations on LocationConnection {\n  edges {\n    node {\n      id\n      ...LocationListItem_location\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'a52e38c20e1c4e46179cc31bfe6ea06c';
export default node;
