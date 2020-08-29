// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';
import Link from 'next/link';
import { Anchor as GrommetAnchor } from 'grommet';
import { Menu } from 'grommet-icons';

type Props = {||};

function Anchor(props) {
  return <GrommetAnchor margin={{ right: 'medium' }} color="white" {...props} />;
}

function NavLinks() {
  return (
    <div className={styles('navLinkWrapper')}>
      <Link href="/">
        <Anchor>Pagination</Anchor>
      </Link>
      <Link href="/polling">
        <Anchor>Polling</Anchor>
      </Link>
      <Link href="/local-form">
        <Anchor>Local schema</Anchor>
      </Link>
      <Link href="/ssr">
        <Anchor>Server side rendering</Anchor>
      </Link>
      <Link href="/mutations/range-add">
        <Anchor>Range add mutation</Anchor>
      </Link>
    </div>
  );
}

function Navbar() {
  const [show, setShow] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    function WidthChange(mq) {
      setShowMenu(mq.matches);
      setShow(!mq.matches);
    }
    const mq = window.matchMedia('(max-width: 900px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
    return () => {
      mq.removeEventListener(mq);
    };
  }, []);

  return (
    <nav className={styles('nav')}>
      <div className={styles('navInner')}>
        <div>
          <Link href="/">
            <Anchor color="white">Relay Example</Anchor>
          </Link>
        </div>
        {showMenu && (
          <button
            aria-label="Menu"
            className={styles('button')}
            type="button"
            onClick={() => setShow((show) => !show)}
          >
            <Menu color="white" />
          </button>
        )}
        {!showMenu && <NavLinks />}
      </div>
      {show && showMenu && <NavLinks />}
    </nav>
  );
}

const styles = sx.create({
  nav: {
    width: '100%',
  },
  navInner: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  navLinkWrapper: {
    'flexDirection': 'column',
    'display': 'flex',
    '@media(min-width: 900px)': {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
});

export default (Navbar: React.ComponentType<Props>);
