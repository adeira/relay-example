// @flow

// https://github.com/vercel/next.js/issues/18415#issuecomment-718180659
process.env = {
  ...process.env,
  // $FlowExpectedError[incompatible-type]
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['images.kiwi.com'],
    path: '/_next/image',
    loader: 'default',
  },
};
