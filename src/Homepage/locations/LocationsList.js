// @flow strict-local

import * as React from 'react';
import * as sx from '@adeira/sx';

import Location from './Location';

type Props = {|
  +children: React.Element<typeof Location> | React.ChildrenArray<React.Element<typeof Location>>,
  +start?: number,
|};

export default function LocationList({ children, start = 1 }: Props): React.Node {
  return (
    <ol start={start} className={styles('ol')}>
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, {
          dataCount: start + i,
        }),
      )}
    </ol>
  );
}

const styles = sx.create({
  ol: {
    paddingInlineStart: 40,
    margin: '1rem 0',
    listStyle: 'none',
  },
});
