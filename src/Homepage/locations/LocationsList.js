// @flow strict-local

import { Children, cloneElement, type Element, type ChildrenArray, type Node } from 'react';
import sx from '@adeira/sx';

import Location from './Location';

type Props = {|
  +children: Element<typeof Location> | ChildrenArray<Element<typeof Location>>,
  +start?: number,
|};

export default function LocationList({ children, start = 1 }: Props): Node {
  return (
    <ol start={start} className={styles('ol')}>
      {Children.map(children, (child, i) =>
        cloneElement(child, {
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
