// @flow

import type { Node } from 'react';
import sx from '@adeira/sx';

import Text from './Text';

type Props = {|
  +onChange: (string) => void,
  +value: string,
  +placeholder?: string,
  +label: string,
  +name?: string,
|};

export default function TextInput({ onChange, label, ...rest }: Props): Node {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <label>
      <Text size="small">{label}</Text>
      <input {...rest} className={styles('input')} onChange={handleChange} />
    </label>
  );
}

const styles = sx.create({
  input: {
    'width': '100%',
    'lineHeight': 1.15,
    'fontWeight': 600,
    'padding': 'var(--space-small)',
    'border': '1px solid rgba(0, 0, 0, 0.33)',
    'borderRadius': 'var(--border-radius-normal)',
    ':focus': {
      outline: 'none',
      boxShadow: 'var(--box-shadow-active)',
    },
  },
});
