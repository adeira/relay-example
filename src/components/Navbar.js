// @flow

import Icon from '@adeira/icons';
import { useState, useEffect, type ComponentType, type Node } from 'react';
import sx from '@adeira/sx';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import cssStyles from './Navbar.module.css';
import { desktop } from './breakpoints';
import { Media } from './Media';

/* eslint-disable jsx-a11y/anchor-is-valid */
// Next.js does this automatically (https://nextjs.org/docs/api-reference/next/link)

type Props = {
  +onClick?: () => void,
};

function NavLinks({ onClick }: Props): Node {
  return (
    <div className={styles('navLinkWrapper')}>
      <Link href="/">
        <a onClick={onClick} className={styles('link')}>
          Pagination
        </a>
      </Link>
      <Link href="/polling">
        <a onClick={onClick} className={styles('link')}>
          Polling
        </a>
      </Link>
      <Link href="/local-form">
        <a onClick={onClick} className={styles('link')}>
          Local schema
        </a>
      </Link>
      <Link href="/ssr">
        <a onClick={onClick} className={styles('link')}>
          Server side rendering
        </a>
      </Link>
      <Link href="/mutations/range-add">
        <a onClick={onClick} className={styles('link')}>
          Range add mutation
        </a>
      </Link>
    </div>
  );
}

function Navbar() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function WidthChange(mq) {
      setShowMenu(mq.matches);
      setShow(!mq.matches);
    }
    const mq = window.matchMedia('(max-width: 992px)');
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
        <Media lessThan="desktop">
          <button
            aria-label="Menu"
            className={styles('button')}
            type="button"
            onClick={() => setShow((show) => !show)}
          >
            <Icon name="menu_hamburger" />
          </button>
        </Media>
        <Media greaterThanOrEqual="desktop">
          <NavLinks />
        </Media>
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
      >
        <div className={styles('navLinkContainer')}>
          <NavLinks onClick={() => setShow(false)} />
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
    transition: 'max-height 0.3s',
    backgroundColor: 'rgba(var(--sx-success-light))',
    padding: 'var(--sx-spacing-large)',
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
    flexDirection: 'column',
    display: 'flex',
    [desktop]: {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
  },
  navLinkContainer: {
    paddingBlockStart: '20px',
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
    'fontSize': '1.8rem',
    'lineHeight': 1.333333,
    'marginInlineEnd': 24,
    'color': 'rgba(var(--sx-foreground))',
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

export default (Navbar: ComponentType<Props>);
