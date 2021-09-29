// @flow strict

/*::

type ApiType = {
  +assertVersion: number => void,
  +cache: {
    forever: () => void,
  },
};

type BabelConfig = {
  +plugins: $ReadOnlyArray<string>,
  +presets: $ReadOnlyArray<string | [string, { ... }]>,
}

*/

module.exports = function (api /*: ApiType */) /*: BabelConfig */ {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: [
      [
        '@adeira/babel-preset-adeira',
        {
          target:
            process.env.NODE_ENV === 'test'
              ? 'js' // Jest doesn't support ES6 modules by default.
              : 'js-esm', // To support dynamic `import(…)` for `@adeira/icons`.
        },
      ],
      'next/babel',
    ],
    // For some unknown reason, we have to specify here the `class-properties` Babel plugin explicitly
    // even though it's already part of `@adeira/babel-preset-adeira`. Seems like `next/babel` preset
    // is somehow interfering with our preset because removing it fixes the issue as well.
    //
    // See: https://github.com/adeira/universe/issues/1854
    plugins: ['relay', '@babel/plugin-proposal-class-properties'],
  };
};
