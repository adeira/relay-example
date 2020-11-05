// @flow strict

/*::

type ApiType = {|
  +assertVersion: number => void,
  +cache: {|
    forever: () => void,
  |},
|};

type BabelConfig = {|
  +plugins: $ReadOnlyArray<string>,
  +presets: $ReadOnlyArray<string | [string, { ... }]>,
|}

*/

module.exports = function (api /*: ApiType */) /*: BabelConfig */ {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: ['@adeira/babel-preset-adeira', 'next/babel'],
    plugins: ['relay'],
  };
};
