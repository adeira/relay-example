// @flow

import { LayoutInline, Text, Link as SxLink } from '@adeira/sx-design';
import { useRouter } from 'next/router';
import { type Node } from 'react';
import sx from '@adeira/sx';
import Link from 'next/link';

function NavbarLink(props: {
  +children: Node,
  +href: string,
  +onClick?: () => void,
  +size?: 24,
  +isActive?: boolean,
}) {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Text size={props.size}>
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
}

function NavbarLinks(props: { +onClick?: () => void }): Node {
  const { onClick } = props;
  return (
    <>
      <NavbarLink href="/" onClick={onClick}>
        Pagination
      </NavbarLink>
      <NavbarLink href="/polling" onClick={onClick}>
        Polling
      </NavbarLink>
      <NavbarLink href="/local-form" onClick={onClick}>
        Local schema
      </NavbarLink>
      <NavbarLink href="/ssr" onClick={onClick}>
        Server side rendering
      </NavbarLink>
      <NavbarLink href="/mutations/range-add" onClick={onClick}>
        Range add mutation
      </NavbarLink>
    </>
  );
}

export default function Navbar(): Node {
  return (
    <nav className={styles('nav', 'navExpanded')}>
      <div className={styles('navInner')}>
        <NavbarLink href="/" size={24} isActive={true}>
          Adeira Relay Example
        </NavbarLink>

        <LayoutInline spacing="large">
          <NavbarLinks />
        </LayoutInline>
      </div>
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
    color: 'rgba(var(--sx-background))',
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
  navbarLink: {
    // Links in the menu should inherit colors of the parent:
    color: 'inherit',
  },
});
