// import { hot } from "react-hot-loader/root";
import React, {
  useState,
  useContext,
  createContext,
  useReducer,
  useRef,
  useEffect,
} from 'react';
import styled, { css } from 'styled-components/macro';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Button from './components/_common/button/Button';
import {
  ActionProvider,
  StateContext,
  DispatchContext,
} from './action-context';
import Home from './components/Home/Home';
import Listing from './components/Listing/Listing';
import './App.css';

export const App = () => {
  return (
    <ActionProvider>
      <>
        <Router>
          <Navigation>
            <Switcher />
          </Navigation>
        </Router>
      </>
    </ActionProvider>
  );
};

// export default hot(App);
export default App;

const Switcher = props => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        {/*         <Route
          path="/"
          exact
          render={props => <Home {...props} content={README} />}
        /> */}
        {/*         <Route
          path="/"
          exact
          render={props => <Listing listingType={"books"} {...props} />}
        /> */}
        <Route
          path="/books"
          exact
          render={props => (
            <Listing listingType={'books'} {...props} />
          )}
        />
        <Route
          path="/authors"
          exact
          render={props => (
            <Listing listingType={'authors'} {...props} />
          )}
        />
      </Switch>
    </>
  );
};

const Navigation = ({ children }) => {
  const dispatch = useContext(DispatchContext);

  const [open, setOpen] = useState(false);

  const HandleMenuClick = () =>
    window.innerWidth < 576 ? setOpen(!open) : null;

  return (
    <>
      <NavigationContainer>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <StyledMenu open={open}>
          <Link id="HomeLink" to={'/'}>
            <span role="img" aria-label="home">
              🏠
            </span>
            Home
          </Link>
          <Link
            id="BooksLink"
            to={'/books'}
            onClick={() => HandleMenuClick()}
          >
            <span role="img" aria-label="book catalogue">
              📚
            </span>
            Books
          </Link>
          <Link
            id="AuthorsLink"
            to={'/authors'}
            onClick={() => HandleMenuClick()}
          >
            <span role="img" aria-label="authors">
              ✍️
            </span>
            Authors
          </Link>
          <NavigationButton_Container>
            <Button
              id={'CreateBook'}
              onClick={() =>
                dispatch({
                  data: null,
                  listing: 'CREATE_BOOK',
                  type: 'ShowModal',
                  payload: null,
                })
              }
            >
              📘 Add Book
            </Button>
            <Button
              id={'CreateAuthor'}
              onClick={() =>
                dispatch({
                  data: null,
                  listing: 'CREATE_AUTHOR',
                  type: 'ShowModal',
                  payload: null,
                })
              }
            >
              👩‍💼 Add Author
            </Button>
          </NavigationButton_Container>
        </StyledMenu>
      </NavigationContainer>
      <AppContainer open={open}>{children}</AppContainer>
    </>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* background: #effffa; */
  background: #fff;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  padding-top: 4em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 576px) {
    width: 100%;
    max-width: calc(100vw - 4rem);
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const StyledBurger = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#0D0C1D')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) =>
        open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NavigationButton_Container = styled.div`
  text-align: center;
`;

const NavigationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
`;

const AppContainer = styled.div`
  @media (min-width: 576px) {
    transform: ${({ open }) =>
      open ? 'translateX(300px)' : 'translateX(0px)'};
    width: ${({ open }) => open && 'calc(100vw - 350px)'};
  }
  transition: all 0.3s ease-in-out;
  padding: 3rem;

  /* Overflow hidden on Body in app.css */
`;
