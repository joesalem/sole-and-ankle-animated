import React from "react";
import styled from "styled-components/macro";

import RotatingNavLink from "../RotatingNavLink";
import { WEIGHTS } from "../../constants";

const Sidebar = () => {
   return (
      <Wrapper>
         <RotatingNavLink href="/lifestyle">Lifestyle</RotatingNavLink>
         <RotatingNavLink href="/jordan">Jordan</RotatingNavLink>
         <RotatingNavLink className="active" href="/running">
            Running
         </RotatingNavLink>
         <RotatingNavLink href="/basketball">Basketball</RotatingNavLink>
         <RotatingNavLink href="/training">Training &amp; Gym</RotatingNavLink>
         <RotatingNavLink href="/football">Football</RotatingNavLink>
         <RotatingNavLink href="/skateboarding">Skateboarding</RotatingNavLink>
         <RotatingNavLink href="/us-football">
            American Football
         </RotatingNavLink>
         <RotatingNavLink href="/baseball">Baseball</RotatingNavLink>
         <RotatingNavLink href="/golf">Golf</RotatingNavLink>
         <RotatingNavLink href="/tennis">Tennis</RotatingNavLink>
         <RotatingNavLink href="/athletics">Athletics</RotatingNavLink>
         <RotatingNavLink href="/walking">Walking</RotatingNavLink>
      </Wrapper>
   );
};

const Wrapper = styled.aside``;

const Link = styled.a`
   display: block;
   text-decoration: none;
   font-weight: ${WEIGHTS.medium};
   color: var(--color-gray-900);
   line-height: 2;
`;

const ActiveLink = styled(Link)`
   color: var(--color-primary);
`;

export default Sidebar;
