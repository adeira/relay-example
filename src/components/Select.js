// @flow

import Icon from '@adeira/icons';
import { Text } from '@adeira/sx-design';
import { useState, type Node } from 'react';
import sx from '@adeira/sx';

type Option = {
  +label: string,
  +value: string,
};

type Props = {
  +options: $ReadOnlyArray<Option>,
  +label: string,
  +onChange: (string) => void,
  +placeholder?: string,
  +name?: string,
};

export default function Select({ options, label, placeholder, onChange, ...rest }: Props): Node {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <label className={styles('label')}>
      <Text as="small">{label}</Text>
      <select
        {...rest}
        onChange={handleChange}
        className={styles('select', value === '' && 'placeholder')}
      >
        {placeholder != null && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles('iconContainer')}>
        <Icon name="chevron_down" />
      </div>
    </label>
  );
}

const styles = sx.create({
  label: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
  },
  select: {
    'appearance': 'none',
    'background': 'transparent',
    'width': '100%',
    'lineHeight': 1.15,
    'fontWeight': 600,
    'padding': 'var(--sx-spacing-small)',
    'border': '1px solid rgba(0, 0, 0, 0.33)',
    'borderRadius': 'var(--sx-radius)',
    ':focus': {
      outline: 'none',
      boxShadow: 'var(--sx-shadow-small)',
    },
  },
  placeholder: {
    color: '#757575',
  },
  iconContainer: {
    position: 'absolute',
    right: '12px',
    top: '29px',
  },
});
