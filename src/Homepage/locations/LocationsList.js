// @flow strict-local

import * as React from 'react';
import * as sx from '@adeira/sx';

import Location from './Location';

type Props = {|
  +children: React.Element<typeof Location> | React.ChildrenArray<React.Element<typeof Location>>,
  +start?: number,
|};

export default function LocationList({ children, ...rest }: Props): React.Node {
  return (
    <ol {...rest} className={styles('ol')}>
      {children}
    </ol>
  );
}

const styles = sx.create({
  ol: {
    paddingInlineStart: 40,
    margin: '1rem 0',
  },
});
