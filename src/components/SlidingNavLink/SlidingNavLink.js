import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const Wrapper = styled.a`
   --transition-duration: 300ms;
   --transition-delay: 100ms;
   position: relative;
   display: block;
   font-size: 1.125rem;
   text-transform: uppercase;
   text-decoration: none;
   font-weight: ${WEIGHTS.medium};
   color: var(--color-gray-900);

   &:first-of-type {
      color: var(--color-secondary);
   }
`;

const Text = styled.span`
   display: block;
`;

const RegularText = styled(Text)`
   transform: translateY(0);
   opacity: 1;
   transition: transform var(--transition-duration),
      opacity var(--transition-duration);
   transition-delay: var(--transition-delay);

   ${Wrapper}:hover & {
      transform: translateY(-40%);
      opacity: 0;
      transition: transform var(--transition-duration),
         opacity var(--transition-duration);
   }
`;

const HoverText = styled(Text)`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   font-weight: ${WEIGHTS.bold};
   transform: translateY(40%);
   opacity: 0;
   transition: transform var(--transition-duration),
      opacity var(--transition-duration);

   ${Wrapper}:hover & {
      transform: translateY(0);
      opacity: 1;
      transition: transform var(--transition-duration),
         opacity var(--transition-duration);
      transition-delay: var(--transition-delay);
   }
`;

const SlidingNavLink = ({ children, ...rest }) => {
   return (
      <Wrapper {...rest}>
         <RegularText>{children}</RegularText>
         <HoverText aria-hidden={true}>{children}</HoverText>
      </Wrapper>
   );
};

export default SlidingNavLink;
