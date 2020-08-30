// @flow

import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = {|
  +children: React.Node,
  +timeout: number,
|};

function FadeIn({ children, ...rest }: Props): React.Node {
  return (
    <CSSTransition className="FadeIn__list" {...rest}>
      <div>{children}</div>
    </CSSTransition>
  );
}

export default FadeIn;
