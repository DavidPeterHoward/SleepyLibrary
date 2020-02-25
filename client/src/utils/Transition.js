import React, { useEffect, useState, memo } from "react";
import styled, { css } from "styled-components/macro";

const FadeContainer = styled.div`
  ${props =>
    props.show &&
    css`
      animation: fadeIn 0.3s;
    `}

  ${props =>
    !props.show &&
    css`
      animation: fadeOut 0.3s;
    `}


  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(0, -20px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(0, -20px);
    }
  }
`;

const TransitionFade = ({ show, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <FadeContainer show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </FadeContainer>
    )
  );
};

export default TransitionFade;
