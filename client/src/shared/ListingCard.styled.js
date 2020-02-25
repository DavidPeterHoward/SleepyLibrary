import styled from "styled-components/macro";

export const ListingCard = styled.div`
  width: 200px;
  height: 200px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  margin: 0.5em;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const CardContainer_Column = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  flex-grow: 1;
  justify-content: flex-start;

  @media (max-width: 600px) {
    & {
      flex-basis: 100%;
      width: 100%;
    }
  }
`;

export const Card_Single = styled.div`
  background: #fff;
  min-width: 10rem;
  @media (max-width: 576px) {
    min-width: calc(100% / 2.5);
    margin: 0.5rem;
    padding: 0.5rem;
  }
  min-height: 10rem;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 2px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: none;
    transform-origin: center;
    transform: scale(0.98);
  }

  &__category {
    display: inline-block;
    /* // background: #212121; */
    padding: 8px 10px;
    margin: 0 0 10px;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.075rem;
    text-transform: uppercase;
  }

  &__excerpt {
    color: #666;
    line-height: 1.5rem;
    font-size: 0.875rem;
  }

  &__title {
    margin: 0 0 10px;
    color: #444;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.75rem;
  }
`;

export const ListingTitle = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 0.75rem 0;
  font-weight: bold;
  letter-spacing: 0.25rem;
  color: #0d0c1d;
  margin: 1rem;
`;
