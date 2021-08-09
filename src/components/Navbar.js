// @flow

import Icon from '@adeira/icons';
import { LayoutInline, Text, Link as SxLink } from '@adeira/sx-design';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, forwardRef, type Node } from 'react';
import sx from '@adeira/sx';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import cssStyles from './Navbar.module.css';
import { desktop } from './breakpoints';
import { Media } from './Media';

const NavbarLink = forwardRef(
  (
    props: {
      +children: Node,
      +href: string,
      +onClick?: () => void,
      +size?: 24,
      +isActive?: boolean,
    },
    ref,
  ) => {
    const router = useRouter();
    const isActive = router.pathname === props.href;

    return (
      <Text backgroundRef={ref} size={props.size}>
        <Link href={props.href} passHref={true}>
          <SxLink
            href={props.href}
            onClick={props.onClick}
            isActive={props.isActive ?? isActive}
            xstyle={styles.navbarLink}
          >
            {props.children}
          </SxLink>
        </Link>
      </Text>
    );
  },
);

const NavbarLinks = forwardRef((props: { +onClick?: () => void }, ref): Node => {
  const { onClick } = props;
  return (
    <>
      <NavbarLink ref={ref} href="/" onClick={onClick}>
        Pagination
      </NavbarLink>
      <NavbarLink ref={ref} href="/polling" onClick={onClick}>
        Polling
      </NavbarLink>
      <NavbarLink ref={ref} href="/local-form" onClick={onClick}>
        Local schema
      </NavbarLink>
      <NavbarLink ref={ref} href="/ssr" onClick={onClick}>
        Server side rendering
      </NavbarLink>
      <NavbarLink ref={ref} href="/mutations/range-add" onClick={onClick}>
        Range add mutation
      </NavbarLink>
    </>
  );
});

export default function Navbar(): Node {
  const bgRef = useRef(null);
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
    <nav ref={bgRef} className={styles('nav', show && showMenu && 'navExpanded')}>
      <div className={styles('navInner')}>
        <NavbarLink ref={bgRef} href="/" size={24} isActive={true}>
          Adeira Relay Example
        </NavbarLink>

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
          <LayoutInline spacing="large">
            <NavbarLinks ref={bgRef} />
          </LayoutInline>
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
          <NavbarLinks ref={bgRef} onClick={() => setShow(false)} />
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
    backgroundColor: 'rgba(var(--sx-success))',
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
  navbarLink: {
    // Links in the menu should inherit colors of the parent:
    color: 'inherit',
  },
});
