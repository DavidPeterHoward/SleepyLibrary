## Online Library:

The goal was to create a fullstack application for a library, managing authors/books.

This application was developed to be as modular as possible, while I didn't believe it was large enough to enact Redux, I opted for creating my own useContext/useReducer version instead.

I wanted to do this with no additional libraries for design/components (e.g. Modals, Transitions, Pagination)

# How to start:

```
MongoDB Compass Community (or equivalent)

**in root dir:**
> yarn && cd client && yarn && cd ..
> yarn run dev

**testing:**
> cd client/

> yarn unit:test
> yarn nyc:coverage

```

#

```
**Relationships:**

- Books: one-to-many Authors
- Authors: one-to-many Books
```

#

This application was developed to be as modular/reusable as possible while still maintaining flexibility -> accounting possible features in the future.

```toc
// Introduction
// Features
// - Frontend
// - Backend
// - Testing
// -- Types of tests
// - Further Tools (Linters, etc)
// Application Structure
// Database Schema / UML Design
// User Stories
// Future Features
```

#

todo:

- Ability to add images to books / author profiles
- Add in skeleton loading
- Add Error Boundaries
- Add multiple authors to a book / add another author button (on book)
- Add multiple books to an author / add another book button (on author)
- Check if author/book exists creating (add to existing)
- Offline Support (service workers)
- Day/Night Theme Support
- Authentication
- Responsive Design

## Features:

- Restful API (CRUD)
- Custom Redux: useContext/useReducer
- Custom Hooks (FetchHook.js/FetchListAndMerge.js)
- Load More Lazy Pagination
- Transitions
- Modals

#### Backend:

- NodeJS / Express
- MongoDB (Mongoose)

#### Frontend:

- React (v16.12.0)
- ReactDOM (v16.12.0)
- React-Dom-Router (5.1.2)
- Styled-Components (5.0.1)
- Fetch WEB API

#### Testing:

- Mocha (Test Runner/Framework)
- Chai (Assertion Library)
- Enzyme (Test Utility for ReactJS)
- Sinon (test spies, stubs, mocks)
- Testing-library/react-hooks (testing react hooks)
- Istanbul's Nyc (code coverage)

#### CI / CD

- GitLab
- GitHub (Source Control)

##### Types of testing:

- Unit
- Smoke
- Integration
- Snapshot
- Stubs
- Mock
- UI Regression
- E2E (todo: add Cyprus)

#### Further tools

- Yarn (Package Manager)
- Babel (Transpile / PollyFiller)
- Prettier
- EsLint
- StyleLint

# Application Structure:

This application has been developed with **group-by-files** approach as opposed to group-by-feature - this is due to the reusable nature of many components (such as: Listing.js / List.js / -> which dynamically fetches based upon the passed parameter type)

    SleepyLib -- Because it's restful ;)
    ├── client                                        ### Client Application (ReactJS) ###
    │   └── src
    │       ├── index.js
    │       ├── app.js
    │       ├── action-context.js                     # Custom-Redux (useContext/useReducer) - w/ Modal
    │       │
    │       ├── components
    │       │   ├── actions                           ### ACTIONS ###
    │       │   |   ├── CreateBook.js                 # Create new book
    │       │   |   ├── CreateAuthor.js               # Create new author
    │       │   |   └── AppView.test.js
    │       │   ├── __tests__
    │       │   │   └── AppView.test.js
    │       │   ├── Listing
    │       │   |   ├── Listing.js
    │       │   |   ├── Listing.js
    │       │   │   └── List.js
    │       │   ├── Listing
    │       │   |   ├── Listing.js
    │       │   |   ├── Listing.js
    │       │   │   └── List.js
    |       └── utils                                   ### Modular Components ###
    │           ├── Modal.js                            # Modal Component
    │           ├── Modal.js                            # Modular Component
    │           ├── Transition.js                       # Transition Component
    │           └── FetchHook.js                        # Custom Fetcher Hook
    │
    ├── server                                        ### Server Application (NodeJS(Express) && MongoDB(Mongoose)) ###
    │   ├── models
    │   │   ├── author.js
    │   │   ├── book.js
    │   │   ├── index.js
    │   └── routes
    │       ├── author
    |       |   └── index.js                            # Author Routes
    │       ├── book
    |       |   └── index.js                            # Book Routes
    |       |
    │       ├── index.js                                ## Route Controller ##
    ├── .babelrc
    ├── .eslintrc.json
    ├── .prettierrc
    ├── .stylelintrc
    └── README.md

<!--

    │           ├── __tests__
    │           │   └── AppView.test.js
 -->

Database Schema / UML Diagram:

user:

- Name
- Favourites

author:

- First_name
- Last_name
- authored_books

book:

- title
- ISBN (International Standard Book Number)
- author

publisher:

- name
- authors
- books

#

## Relationship Types:

- AUTHOR can have many Books
- AUTHOR can have many Publishers

#

- BOOKS can have many Authors
- BOOKS can have one Publisher

#

- PUBLISHER can have many Authors
- PUBLISHER can have many Books

#

- USER can save many Books
- USER can assign 'stars/rating' to any Book
- USER can follow many Authors/Publishers

#

## User Stories

- As a user I would like to see ALL BOOKS
- As a user I would like to see ALL AUTHORS
- As a user I would like to see ALL PUBLISHERS

#

- As a user I would like to see A SINGLE BOOK (with ALL EXTRA DETAILS)
- As a user I would like to see A SINGLE AUTHOR (with ALL EXTRA DETAILS)
- As a user I would like to see A SINGLE PUBLISHER (with ALL EXTRA DETAILS)

#

- As a user I would like to change the theme from NIGHT TO DAY / DAY TO NIGHT & have the website REMEMBER
- As a user I would like to create an account
- As a user I would like to save books to my favorite's

#
