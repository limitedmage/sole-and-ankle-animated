import React from "react";
import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <NormalLink>{children}</NormalLink>
      <BoldLink aria-hidden="true">{children}</BoldLink>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  height: 27px;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NormalLink = styled.span`
  display: block;

  @media ${QUERIES.hover} and ${QUERIES.noPreferenceReducedMotion} {
    transition: transform 300ms ease-out;
    transform: translateY(0);
    will-change: transform;

    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 150ms ease-in;
    }
  }
`;

const BoldLink = styled(NormalLink)`
  font-weight: bold;
`;

export default NavLink;
