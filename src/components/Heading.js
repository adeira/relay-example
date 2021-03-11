// @flow

import type { Node } from 'react';
import sx from '@adeira/sx';

type Props = {
  +level: 1 | 2 | 3 | 4 | 5 | 6,
  +children: Node,
};

export default function Heading({ level, children }: Props): Node {
  const Component = `h${level}`;
  return (
    <Component className={styles(level === 1 && 'h1', level === 2 && 'h2', level === 3 && 'h3')}>
      {children}
    </Component>
  );
}

const styles = sx.create({
  h1: {
    fontSize: '3.4rem',
    lineHeight: 1.1674,
    fontWeight: 600,
    margin: '1.4rem 0',
  },
  h2: {
    fontSize: '2.6rem',
    lineHeight: 1.2307,
    fontWeight: 600,
    margin: '1.3rem 0',
  },
  h3: {
    fontSize: '1.8rem',
    lineHeight: 1.15,
    fontWeight: 600,
    margin: '1.15rem 0',
  },
});
