import express from 'express';
const router = express();

import AuthorRouter from './author';
import BookRouter from './book';

router.use('/api/books', BookRouter);
router.use('/api/book', BookRouter);

router.use('/api/authors', AuthorRouter);
router.use('/api/author', AuthorRouter);

module.exports = router;
