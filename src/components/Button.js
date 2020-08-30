// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';

type Props = {|
  +onClick?: () => void,
  +children: React.Node,
  +dataTest?: string,
  +disabled?: boolean,
  +iconLeft?: React.Node,
  +iconRight?: React.Node,
  +type?: 'submit' | 'button',
|};

export default function Button({
  children,
  dataTest,
  iconLeft,
  iconRight,
  type = 'button',
  ...rest
}: Props): React.Node {
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
    fontSize: 14,
    lineHeight: 1.42857,
    background: 'none',
    padding: '4px 20px',
    borderRadius: '3px',
  },
  disabled: {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  primary: {
    'border': '2px solid var(--color-primary)',
    'backgroundColor': 'var(--color-primary)',
    'color': 'white',
    ':hover': {
      boxShadow: 'var(--box-shadow-active)',
    },
    ':active': {
      boxShadow: 'var(--box-shadow-active)',
      opacity: 0.5,
    },
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-small)',
    justifyContent: 'center',
  },
});
