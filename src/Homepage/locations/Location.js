// @flow

import { LayoutInline, Text } from '@adeira/sx-design';
import type { Node } from 'react';
import { graphql, useFragment } from '@adeira/relay';
import sx from '@adeira/sx';
import Image from 'next/image';

import type { Location$key } from './__generated__/Location.graphql';

type Props = {
  +location: ?Location$key,
  +dataCount?: string,
};

export default function Location(props: Props): Node {
  const location = useFragment(
    graphql`
      fragment Location on Location {
        name
        countryFlagURL
        country {
          name
        }
      }
    `,
    props.location,
  );

  if (!location) {
    return null; // or some failure placeholder
  }

  const name = location.name ?? '';
  const countryName = location.country?.name ?? '';
  return (
    <li className={styles('li')} data-count={props.dataCount}>
      <LayoutInline>
        <Image
          loading="lazy"
          src={location.countryFlagURL}
          alt={`${countryName} flag`}
          height="24"
          width="24"
        />
        <Text data-testid={`location-${name}`} as="small">
          {name}
        </Text>
      </LayoutInline>
    </li>
  );
}

const styles = sx.create({
  li: {
    'position': 'relative',
    '::before': {
      content: 'attr(data-count) ". "',
      color: 'black',
      position: 'absolute',
      left: '-40px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
});
