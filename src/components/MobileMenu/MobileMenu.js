/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { keyframes } from "styled-components";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <ContentWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale" index={0}>
              Sale
            </NavLink>
            <NavLink href="/new" index={1}>
              New&nbsp;Releases
            </NavLink>
            <NavLink href="/men" index={2}>
              Men
            </NavLink>
            <NavLink href="/women" index={3}>
              Women
            </NavLink>
            <NavLink href="/kids" index={4}>
              Kids
            </NavLink>
            <NavLink href="/collections" index={5}>
              Collections
            </NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms" index={6}>
              Terms and Conditions
            </SubLink>
            <SubLink href="/privacy" index={7}>
              Privacy Policy
            </SubLink>
            <SubLink href="/contact" index={8}>
              Contact Us
            </SubLink>
          </Footer>
        </ContentWrapper>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const doorOpen = keyframes`
  from {
    transform: rotateY(-180deg);
  }
  to {
    transform: rotateY(0);
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 200ms ease-out both;
  will-change: opacity;
  perspective: 200px;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;

  @media ${QUERIES.noPreferenceReducedMotion} {
    transform-origin: right;
    animation: ${doorOpen} 400ms cubic-bezier(0.59, 0.27, 0, 1.05) both;
    animation-delay: 200ms;
    will-change: transform;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  @media ${QUERIES.noPreferenceReducedMotion} {
    animation: ${fadeIn} 400ms ease-out both;
    animation-delay: calc(400ms + ${({ index }) => index * 70}ms);
    will-change: opacity;
  }

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;

  @media ${QUERIES.noPreferenceReducedMotion} {
    animation: ${fadeIn} 400ms ease-out both;
    animation-delay: calc(200ms + ${({ index }) => index * 70}ms);
    will-change: opacity;
  }
`;

export default MobileMenu;
