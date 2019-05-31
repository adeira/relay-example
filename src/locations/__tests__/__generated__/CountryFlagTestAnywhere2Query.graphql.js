/**
 * @flow
 * @relayHash 6a523c0202335304c10ccb65c09b86f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryFlag_location$ref = any;
export type CountryFlagTestAnywhere2QueryVariables = {||};
export type CountryFlagTestAnywhere2QueryResponse = {|
  +location: ?{|
    +$fragmentRefs: CountryFlag_location$ref
  |}
|};
export type CountryFlagTestAnywhere2Query = {|
  variables: CountryFlagTestAnywhere2QueryVariables,
  response: CountryFlagTestAnywhere2QueryResponse,
|};
*/


/*
query CountryFlagTestAnywhere2Query {
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

const node/*: ConcreteRequest*/ = (function(){
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
    "name": "CountryFlagTestAnywhere2Query",
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
    "name": "CountryFlagTestAnywhere2Query",
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
    "name": "CountryFlagTestAnywhere2Query",
    "id": "2739172db8792adb8a19d47526785743",
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
(node/*: any*/).hash = '1fda0ea84c49dd00e11a36711fcc63bc';
if (__DEV__) {
  (node/*: any*/).params.text = "query CountryFlagTestAnywhere2Query {\n  location(input: {locationId: \"test-location-id\"}) {\n    ...CountryFlag_location\n    id\n  }\n}\n\nfragment CountryFlag_location on Location {\n  country {\n    code\n    name\n  }\n  code\n  name\n  type\n}\n";
}
module.exports = node;
