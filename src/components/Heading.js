// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';

type Props = {|
  +level: 1 | 2 | 3 | 4 | 5 | 6,
  +children: React.Node,
|};

export default function Heading({ level, children }: Props): React.Node {
  const Component = `h${level}`;
  return (
    <Component className={styles(level === 1 && 'h1', level === 2 && 'h2')}>{children}</Component>
  );
}

const styles = sx.create({
  h1: {
    fontSize: 34,
    lineHeight: 1.1674,
    fontWeight: 600,
  },
  h2: {
    fontSize: 26,
    lineHeight: 1.2307,
    fontWeight: 600,
  },
});