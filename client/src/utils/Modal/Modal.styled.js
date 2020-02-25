import styled, { css } from 'styled-components/macro';

export const ModalOverlay = styled.div`
  align-items: center;
  background-color: rgba(31, 38, 53, 0.6);
  display: none;
  min-height: 100%;
  justify-content: center;
  left: -99999px;
  overflow-y: auto;
  position: fixed;
  top: -99999px;
  width: 100%;
  z-index: 999;
  overflow-x: hidden;
  transition: all 0.5s ease-in;
  ${({ show }) =>
    show &&
    css`
      position: fixed;
      display: flex;
      left: 0;
      top: 0;
    `}
`;

export const Modal = styled.div`
  transition: all 0.5s ease-in;
  display: flex;
  border-radius: 2px;
  margin: 0 0 80px 0;
  overflow: hidden;
  overflow-y: hidden;
  min-height: 600px;
  min-width: 400px;
  align-content: center;
  background-color: #f4f7f9;
  padding: 1em;
  padding: 0;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    margin: 0;
    width: 100%;
    max-height: 100%;
  }
`;
