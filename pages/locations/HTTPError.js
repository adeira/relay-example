// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import type { HTTPError_error as HTTPErrorType } from '__generated__/HTTPError_error.graphql';

type Props = {|
  +error: ?HTTPErrorType,
|};

function HTTPError(props: Props) {
  React.useEffect(() => {
    // TODO: log it somewhere so you know your FE is failing
    console.error('HTTP UI error', props.error); // eslint-disable-line no-console
  });

  const error = props.error;

  return (
    <div>
      {error?.message} (code {error?.statusCode})
    </div>
  );
}

export default createFragmentContainer(HTTPError, {
  error: graphql`
    fragment HTTPError_error on DangerZone_HTTPErrorType {
      message
      statusCode
    }
  `,
});
