// @flow

import type { Node } from 'react';
import { graphql, useFragment } from '@adeira/relay';
import sx from '@adeira/sx';
import Image from 'next/image';

import Text from '../../components/Text';
import type { Location$key } from './__generated__/Location.graphql';

type Props = {|
  +location: ?Location$key,
  +dataCount?: string,
|};

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
      <div className={styles('box')}>
        <Image
          loading="lazy"
          src={location.countryFlagURL}
          alt={`${countryName} flag`}
          height="24"
          width="24"
        />
        <Text dataTest={`location-${name}`} size="small">
          {name}
        </Text>
      </div>
    </li>
  );
}

const styles = sx.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px', // Works in edge, chrome and firefox, but should be ok for this app
  },
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
