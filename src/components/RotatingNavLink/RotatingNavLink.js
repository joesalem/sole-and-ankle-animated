import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const Wrapper = styled.a`
   --transition-duration: 300ms;
   --transition-delay: 100ms;
   position: relative;
   display: block;
   width: max-content;
   text-decoration: none;
   font-weight: ${WEIGHTS.medium};
   color: var(--color-gray-900);
   perspective: 200px;
   perspective-origin: center;

   &.active {
      color: var(--color-primary);
   }
`;

const Text = styled.span`
   display: block;
   width: max-content;
   line-height: 2;
`;

const RegularText = styled(Text)`
   transform: rotateX(0);
   opacity: 1;
   transition: transform var(--transition-duration),
      opacity var(--transition-duration);
   transition-delay: var(--transition-delay);
   ${Wrapper}:hover & {
      transform: rotateX(90deg);
      opacity: 0;
      transition: transform var(--transition-duration),
         opacity var(--transition-duration);
   }
`;

const HoverText = styled(Text)`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   font-weight: ${WEIGHTS.bold};
   transform: rotateX(-90deg);
   opacity: 0;
   transition: transform var(--transition-duration),
      opacity var(--transition-duration);
   ${Wrapper}:hover & {
      transform: rotateX(0);
      opacity: 1;
      transition: transform var(--transition-duration),
         opacity var(--transition-duration);
      transition-delay: var(--transition-delay);
   }
`;

const RotatingNavLink = ({ children, ...rest }) => {
   return (
      <Wrapper {...rest}>
         <RegularText>{children}</RegularText>
         <HoverText aria-hidden={true}>{children}</HoverText>
      </Wrapper>
   );
};

export default RotatingNavLink;
