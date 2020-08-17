// @flow

import * as React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

type Props = {|
  +children: React.Node,
  +timeout: number,
|};

const FadeInWrapper = styled(CSSTransition)`
  &.enter {
    opacity: 0;
    transform: translateX(-100px);
  }
  &.enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: all 0.3s ease-out;
  }
`;

function FadeIn({ children, ...rest }: Props): React.Node {
  return (
    <FadeInWrapper {...rest}>
      <div>{children}</div>
    </FadeInWrapper>
  );
}

export default FadeIn;
