// @flow

import type { Node } from 'react';
import { CSSTransition } from 'react-transition-group';

type Props = {|
  +children: Node,
  +timeout: number,
|};

function FadeIn({ children, ...rest }: Props): Node {
  return (
    <CSSTransition className="FadeIn__list" {...rest}>
      <div>{children}</div>
    </CSSTransition>
  );
}

export default FadeIn;
