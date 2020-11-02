// @flow

import { createFragmentContainer, graphql, type FragmentContainerType } from '@adeira/relay';

import type { LocationListItem_location as Location } from './__generated__/LocationListItem_location.graphql';

type Props = {|
  +location: ?Location,
|};

const LocationListItem = (props: Props) => {
  return <div>{props.location?.name}</div>;
};

export default (createFragmentContainer(LocationListItem, {
  location: graphql`
    fragment LocationListItem_location on Location {
      name
    }
  `,
}): FragmentContainerType<Props>);
