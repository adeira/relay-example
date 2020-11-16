// @flow

import type { Node } from 'react';
import sx from '@adeira/sx';

type Props = {|
  +onClick?: () => void,
  +children: Node,
  +dataTest?: string,
  +disabled?: boolean,
  +iconLeft?: Node,
  +iconRight?: Node,
  +type?: 'submit' | 'button',
|};

export default function Button({
  children,
  dataTest,
  iconLeft,
  iconRight,
  type = 'button',
  ...rest
}: Props): Node {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      data-testid={dataTest}
      className={styles('button', 'primary', rest.disabled ? 'disabled' : null)}
      {...rest}
    >
      <span className={styles('spacer')}>
        {iconLeft}
        {children}
        {iconRight}
      </span>
    </button>
  );
}

const styles = sx.create({
  button: {
    cursor: 'pointer',
    outline: 'none',
    fontSize: '1.4rem',
    lineHeight: 1.42857,
    background: 'none',
    padding: '4px 20px',
    borderRadius: '3px',
    fontFamily: 'inherit',
  },
  disabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  primary: {
    'border': '2px solid var(--color-primary)',
    'backgroundColor': 'var(--color-primary)',
    'color': 'var(--text-color)',
    'transition': 'all 0.3s',
    ':hover': {
      boxShadow: 'var(--box-shadow-active)',
      transform: 'translateY(-3px)',
    },
    ':active': {
      transform: 'translateY(-1px)',
    },
    ':focus': {
      boxShadow: 'var(--box-shadow-active)',
    },
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-small)',
    justifyContent: 'center',
  },
});
