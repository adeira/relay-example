/**
 * @flow
 * @relayHash b1d00a7441f495d352b83eaf456f30e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { LocationsPaginatedBidirectional_data$ref } from "./LocationsPaginatedBidirectional_data.graphql";
export type LocationsPaginatedBidirectionalRefetchQueryVariables = {|
  first?: ?number,
  last?: ?number,
  after?: ?string,
  before?: ?string,
|};
export type LocationsPaginatedBidirectionalRefetchQueryResponse = {|
  +dangerZone: {|
    +$fragmentRefs: LocationsPaginatedBidirectional_data$ref
  |}
|};
export type LocationsPaginatedBidirectionalRefetchQuery = {|
  variables: LocationsPaginatedBidirectionalRefetchQueryVariables,
  response: LocationsPaginatedBidirectionalRefetchQueryResponse,
|};
*/


/*
query LocationsPaginatedBidirectionalRefetchQuery(
  $first: Int
  $last: Int
  $after: String
  $before: String
) {
  dangerZone {
    ...LocationsPaginatedBidirectional_data_pbnwq
  }
}

fragment LocationsPaginatedBidirectional_data_pbnwq on DangerZone_RootQuery {
  allLocations(forceFail: false, first: $first, last: $last, after: $after, before: $before) {
    __typename
    ... on LocationConnection {
      ...LocationsPaginatedBidirectionalConnection_connection
    }
    ... on DangerZone_HTTPErrorType {
      ...HTTPError_error
    }
  }
}

fragment LocationsPaginatedBidirectionalConnection_connection on LocationConnection {
  edges {
    node {
      id
      ...Location_location
    }
  }
  pageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
}

fragment HTTPError_error on DangerZone_HTTPErrorType {
  message
  statusCode
}

fragment Location_location on Location {
  name
  ...CountryFlag_location
}

fragment CountryFlag_location on Location {
  country {
    code
    name
  }
  code
  name
  type
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dangerZone",
        "storageKey": null,
        "args": null,
        "concreteType": "DangerZone_RootQuery",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "LocationsPaginatedBidirectional_data",
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "after",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "before",
                "variableName": "before",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "last",
                "variableName": "last",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dangerZone",
        "storageKey": null,
        "args": null,
        "concreteType": "DangerZone_RootQuery",
        "plural": false,
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
                          (v1/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "country",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "LocationArea",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v1/*: any*/)
                            ]
                          },
                          (v2/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasPreviousPage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "startCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DangerZone_HTTPErrorType",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "message",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "statusCode",
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
    "name": "LocationsPaginatedBidirectionalRefetchQuery",
    "id": null,
    "text": "query LocationsPaginatedBidirectionalRefetchQuery(\n  $first: Int\n  $last: Int\n  $after: String\n  $before: String\n) {\n  dangerZone {\n    ...LocationsPaginatedBidirectional_data_pbnwq\n  }\n}\n\nfragment LocationsPaginatedBidirectional_data_pbnwq on DangerZone_RootQuery {\n  allLocations(forceFail: false, first: $first, last: $last, after: $after, before: $before) {\n    __typename\n    ... on LocationConnection {\n      ...LocationsPaginatedBidirectionalConnection_connection\n    }\n    ... on DangerZone_HTTPErrorType {\n      ...HTTPError_error\n    }\n  }\n}\n\nfragment LocationsPaginatedBidirectionalConnection_connection on LocationConnection {\n  edges {\n    node {\n      id\n      ...Location_location\n    }\n  }\n  pageInfo {\n    hasNextPage\n    hasPreviousPage\n    startCursor\n    endCursor\n  }\n}\n\nfragment HTTPError_error on DangerZone_HTTPErrorType {\n  message\n  statusCode\n}\n\nfragment Location_location on Location {\n  name\n  ...CountryFlag_location\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '31080909ba15bfb0895c85f260c62bb0';
module.exports = node;
