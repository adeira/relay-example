// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';
import { useRouter } from 'next/router';
import { MdMenu } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';

import cssStyles from './Navbar.module.css';
import { tablet } from './breakpoints';

/* eslint-disable jsx-a11y/anchor-is-valid */
// Next.js does this automatically (https://nextjs.org/docs/api-reference/next/link)

type Props = {||};

function Link({ children, href }) {
  // Currently deactivating client side routing, since sx styles are not correctly
  // set on client side routing
  return React.cloneElement(children, {
    href,
  });
}

function NavLinks() {
  return (
    <div className={styles('navLinkWrapper')}>
      <Link href="/">
        <a className={styles('link')}>Pagination</a>
      </Link>
      <Link href="/polling">
        <a className={styles('link')}>Polling</a>
      </Link>
      <Link href="/local-form">
        <a className={styles('link')}>Local schema</a>
      </Link>
      <Link href="/ssr">
        <a className={styles('link')}>Server side rendering</a>
      </Link>
      <Link href="/mutations/range-add">
        <a className={styles('link')}>Range add mutation</a>
      </Link>
    </div>
  );
}

function Navbar() {
  const { pathname } = useRouter();
  const [show, setShow] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    setShow(false);
  }, [pathname]);

  React.useEffect(() => {
    function WidthChange(mq) {
      setShowMenu(mq.matches);
      setShow(!mq.matches);
    }
    const mq = window.matchMedia('(max-width: 901px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
    return () => {
      mq.removeEventListener(mq);
    };
  }, []);

  return (
    <nav className={styles('nav', show && showMenu && 'navExpanded')}>
      <div className={styles('navInner')}>
        <Link href="/">
          <a className={styles('link')}>Relay Example</a>
        </Link>
        {showMenu && (
          <button
            aria-label="Menu"
            className={styles('button')}
            type="button"
            onClick={() => setShow((show) => !show)}
          >
            <MdMenu color="var(--text-color)" />
          </button>
        )}
        {!showMenu && <NavLinks />}
      </div>
      <CSSTransition
        classNames={{
          enter: cssStyles['Navbar__links-enter'],
          enterActive: cssStyles['Navbar__links-enter-active'],
          exit: cssStyles['Navbar__links-exit'],
          exitActive: cssStyles['Navbar__links-enter-active'],
        }}
        in={show && showMenu}
        unmountOnExit
        timeout={200}
        appear={true}
      >
        <div className={styles('navLinkContainer')}>
          <NavLinks />
        </div>
      </CSSTransition>
    </nav>
  );
}

const styles = sx.create({
  nav: {
    width: '100%',
    maxHeight: '71px',
    overflow: 'hidden',
    transition: 'all 0.3s',
    backgroundColor: 'var(--color-primary)',
    padding: 'var(--space-small)',
    [tablet]: {
      padding: 'var(--space-x-large)',
    },
  },
  navExpanded: {
    maxHeight: '210px',
  },
  navInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  navLinkWrapper: {
    'flexDirection': 'column',
    'display': 'flex',
    '@media(min-width: 902px)': {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
  },
  navLinkContainer: {
    paddingTop: '20px',
  },
  button: {
    'backgroundColor': 'transparent',
    'border': 'none',
    'cursor': 'pointer',
    'outline': 'none',
    'position': 'relative',
    'fontSize': 'inherit',
    ':focus::before': {
      content: '""',
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      top: '-12px',
      left: '-12px',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      position: 'absolute',
    },
  },
  link: {
    'fontSize': 18,
    'lineHeight': 1.333333,
    'marginRight': 24,
    'color': 'var(--text-color)',
    'fontWeight': 600,
    'cursor': 'pointer',
    'textDecoration': 'none',
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus': {
      textDecoration: 'underline',
      outline: 'none',
    },
  },
});

export default (Navbar: React.ComponentType<Props>);
