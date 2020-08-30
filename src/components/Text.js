// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';

type Props = {|
  +size?: 'small' | 'normal',
  +children: React.Node,
  +dataTest?: string,
|};

export default function Text({ size = 'normal', children, dataTest }: Props): React.Node {
  return (
    <span data-testid={dataTest} className={styles(size)}>
      {children}
    </span>
  );
}

const styles = sx.create({
  small: {
    fontSize: 14,
    lineHeight: 1.42857,
  },
  normal: {
    fontSize: 16,
    lineHeight: 1.42857,
  },
});
