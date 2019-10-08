/**
 * @flow
 * @relayHash c775a68c9b9aafe25da301ea360efddb
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type CountryFlag_location$ref = any;
export type CountryFlagTestSuccessQueryVariables = {||};
export type CountryFlagTestSuccessQueryResponse = {|
  +location: ?{|
    +$fragmentRefs: CountryFlag_location$ref
  |}
|};
export type CountryFlagTestSuccessQuery = {|
  variables: CountryFlagTestSuccessQueryVariables,
  response: CountryFlagTestSuccessQueryResponse,
|};

/*
query CountryFlagTestSuccessQuery {
  location(input: {locationId: "test-location-id"}) {
    ...CountryFlag_location
    id
  }
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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "locationId": "test-location-id"
    }
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CountryFlagTestSuccessQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": "location(input:{\"locationId\":\"test-location-id\"})",
        "args": (v0/*: any*/),
        "concreteType": "Location",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CountryFlag_location",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CountryFlagTestSuccessQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": "location(input:{\"locationId\":\"test-location-id\"})",
        "args": (v0/*: any*/),
        "concreteType": "Location",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationArea",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CountryFlagTestSuccessQuery",
    "id": "ed188ee8330f67fde8dc61c2c0eea717",
    "text": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "location": {
          "type": "Location",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.country": {
          "type": "LocationArea",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "location.code": (v3/*: any*/),
        "location.name": (v3/*: any*/),
        "location.type": (v3/*: any*/),
        "location.country.code": (v3/*: any*/),
        "location.country.name": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = 'f9068b37180c98367f5204294c452894';
export default node;
