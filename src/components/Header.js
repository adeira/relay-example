// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';

import { tablet } from './breakpoints';

type Props = {|
  +children: React.Node,
|};

export default function Header(props: Props): React.Node {
  return <header className={styles('header')}>{props.children}</header>;
}

const styles = sx.create({
  header: {
    backgroundColor: 'var(--color-primary)',
    padding: 'var(--space-small)',
    [tablet]: {
      padding: 'var(--space-x-large)',
    },
  },
});
