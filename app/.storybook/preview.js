const addParameters = require('@storybook/react').addParameters;

addParameters({
  options: {
    // ソートの仕方を設定
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
});