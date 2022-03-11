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
        name @required(action: LOG)
        countryFlagURL
        country {
          name @required(action: LOG)
        }
      }
    `,
    props.location,
  );

  if (!location) {
    return null; // or some failure placeholder
  }

  return (
    <li className={styles('li')} data-count={props.dataCount}>
      <LayoutInline>
        <Image
          loading="lazy"
          src={location.countryFlagURL}
          alt={`${location.country?.name ?? 'a'} flag`}
          height="24"
          width="24"
        />
        <Text data-testid={`location-${location.name}`} as="small">
          {location.name}
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
