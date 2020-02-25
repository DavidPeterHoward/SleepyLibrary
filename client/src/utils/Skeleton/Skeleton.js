import React from "react";
import styled, { css } from "styled-components/macro";

const Skeleton = styled.div`
  /* background-color: #eef1f3; */
  border: 1px solid #ececec;
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 0.5em 0.5em 0;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: #f3f3f3;
    transition: 0.3s ease-in-out;
  }
  margin: 0.5em 0.5em 0.5em 0;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(243, 243, 243, 0) 0,
      rgba(243, 243, 243, 0.2) 40%,
      rgba(243, 243, 243, 0.5) 80%,
      rgba(243, 243, 243, 0)
    );
    /* background: linear-gradient(-45deg, #DDDDDD, #F0F0F0, #DDDDDD, #F0F0F0); */
    animation: shimmer 2.5s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  animation: finishedLoadingPlaceholder 0.3s ease-out forwards;

  @keyframes finishedLoadingPlaceholder {
    0% {
      opacity: 0;
      transform: translateY(25px);
    }
    75% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width: 576px) {
    min-width: calc(100% / 2.5);
    margin: 0.5rem;
    padding: 0.5rem;
  }
  background: #fff;
  min-width: 10rem;
  min-height: 10rem;
  margin: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const LoopContainer = styled.div`
  display: inline-flex;
  @media (max-width: 900px) {
    & {
      flex-basis: 50%;
      width: 50%;
    }
  }

  @media (max-width: 600px) {
    & {
      flex-basis: 100%;
      width: 100%;
    }
  }
`;

const Loop = ({ count, component }) => {
  return Array.apply(null, { length: count }).map((e, i) => {
    return <Skeleton key={i}></Skeleton>;
  });
};

const SkeletonComponent = ({ loopCount }) => {
  return (
    <>
      <LoopContainer>
        <div style={{ display: "inherit", flexWrap: "wrap" }}>
          <Loop count={loopCount} />
        </div>
      </LoopContainer>
    </>
  );
};

export default SkeletonComponent;
