// @flow

import type { Node } from 'react';
import * as sx from '@adeira/sx';

type Props = {|
  +size?: 'small' | 'normal',
  +children: Node,
  +dataTest?: string,
|};

export default function Text({ size = 'normal', children, dataTest }: Props): Node {
  return (
    <span data-testid={dataTest} className={styles(size)}>
      {children}
    </span>
  );
}

const styles = sx.create({
  small: {
    fontSize: '1.4rem',
    lineHeight: 1.42857,
  },
  normal: {
    fontSize: '1.6rem',
    lineHeight: 1.42857,
  },
});
