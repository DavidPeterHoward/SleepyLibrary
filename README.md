## Online Library:

The goal was to create a fullstack application for a library, managing authors/books.

This application was developed to be as modular as possible, while I didn't believe it was large enough to enact Redux, I opted for creating my own useContext/useReducer version instead for CRUD actions and modals. I developed this application with as little additional libraries as possible (e.g. Modals, Transitions, Pagination, Redux, etc)

# How to start:

```
localhost:3000 = CLIENT (Proxying Server)
localhost:4000 = SERVER

MongoDB Compass Community (or equivalent)

.env
PORT=4000
MONGODB_URI="mongodb://localhost:27017/library"

ROOT:
> yarn && cd client && yarn && cd ..
> yarn run dev

TESTING:
> cd client
> yarn unit:test
> yarn nyc:coverage
```

#

```
DATABASE RELATIONSHIPS
- Books: one-to-many Authors
- Authors: one-to-many Books
```

#

```toc
// Introduction
// Features
// - Frontend
// - Backend
// - Testing
// - Types of tests
// - Further Tools (Linters, etc)
// Application Structure
// Future Features
```

#

todo:

- Ability to add images to books / author profiles
- Add multiple authors to a book / add another author button (on book)
- Add multiple books to an author / add another book button (on author)
- Check if author/book exists creating (add to existing)
- Offline Support (service workers)
- Day/Night Theme Support
- Authentication

## Features:

- Restful API (CRUD)
- Custom Redux: useContext/useReducer
- Custom Hooks (FetchHook.js/FetchListAndMerge.js)
- Load More Pagination
- Skeleton loading
- Transitions
- Modal

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
- Testing-library/react-hooks (testing react hooks)
- Istanbul's Nyc (code coverage)

##### Types of testing:

- Unit
- Smoke
- Mock
- todo: integration, snapshot, UI regression, E2E

#### Further tools

- Yarn
- Babel
- Prettier
- EsLint
- StyleLint

# Application Structure:

This application has been developed with **group-by-feature** approach as opposed to group-by-files - this is due to the reusable nature of many components (such as: Listing.js / List.js / -> which dynamically fetches based upon the passed parameter type) & Book/Author folders.

    SleepyLibrary
    ├── client                                       ### Client Application (ReactJS) ###
    │   └── src
    │       ├── index.js
    │       ├── app.js
    │       ├── action-context.js                    # Custom-Redux (useContext/useReducer) - w/ Modal
    │       │
    │       ├── components
    │       │   ├── _common                          ### Reusable Components ###
    │       │   |   ├── Button.js
    │       │   |   ├── Input.js
    │       │   ├── Author                           ### Author Components ###
    │       │   |   ├── AuthorListing.js                # Single Author
    │       │   |   ├── CreateAuthor.js
    │       │   |   ├── EditAuthor.js
    │       │   ├── Book                             ### Book Components ###
    │       │   |   ├── BookListing.js                  # Single Book
    │       │   |   ├── CreateBook.js
    │       │   |   └── EditBook.js
    │       │   ├── Home                              ### Home Page ###
    │       │   │   └── Home.js
    │       │   ├── Listing                           ### Listing Components ###
    │       │   |   ├── Listing.js
    │       │   |   ├── Listing.spec.js
    │       │   │   └── Listing.styled.js
    │       │   ├── Shared
    │       │   |   └── ListingCard.styled.js
    |       └── utils                                  ### Modular Components ###
    │           ├── Modal                                   # Modal Component
    │           │   └── Modal.js
    │           │   └── Modal.spec.js
    │           │   └── Modal.styled.js
    │           ├── Skeleton                            #  Skeleton Loading
    │           │   └── Skeleton.js
    │           ├── FetchListAndMerge.js                # Used for loadmore -> merges (todo: add to custom redux)
    │           ├── Transition.js                       # Transition Animation Component
    │           ├── useWhyDidYouUpdate.js               # Custom hook for performance testing
    │           └── FetchHook.js                        # Custom Fetcher Hook
    │
    ├── server                                        ### Server Application (NodeJS/MongoDb) ###
    │   ├── models
    │   │   ├── author.js
    │   │   ├── book.js
    │   │   ├── index.js
    │   └── routes
    │       ├── author
    |       |   └── index.js                            # Author Routes
    │       ├── book
    |       |   └── index.js                            # Book Routes
    │       ├── index.js                                ## Route Controller ##
    ├── .babelrc
    ├── .eslintrc.json
    ├── .prettierrc
    ├── .stylelintrc
    └── README.md
