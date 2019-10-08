/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CountryFlag_location$ref: FragmentReference;
declare export opaque type CountryFlag_location$fragmentType: CountryFlag_location$ref;
export type CountryFlag_location = {|
  +country: ?{|
    +code: ?string,
    +name: ?string,
  |},
  +code: ?string,
  +name: ?string,
  +type: ?string,
  +$refType: CountryFlag_location$ref,
|};
export type CountryFlag_location$data = CountryFlag_location;
export type CountryFlag_location$key = {
  +$data?: CountryFlag_location$data,
  +$fragmentRefs: CountryFlag_location$ref,
};


const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CountryFlag_location",
  "type": "Location",
  "metadata": null,
  "argumentDefinitions": [],
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
        (v0/*: any*/),
        (v1/*: any*/)
      ]
    },
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node: any).hash = '75035d3c7ae80a08669ff2179e0dc9e6';
export default node;
