import { Router } from 'express';
import * as users from '../controllers/users';
import auth from '../middleware/auth';

/**
 * The router instance.
 */
const router = Router();

/**
 * The default response if page is not found.
 */
router.get('/', (req, res) => {
  res.send(404);
});

/**
 * Returns all of the users
 */
router.get('/users/', auth('admin'), users.getAll);

/**
* user login
*/
router.post('/users/login', auth('basic'), users.postLogin);

/**
 * Updates a User on the database
 * If the data doesn't exist, then it creates it.
 router.put('/users/:id', users.forPutQuery);
*/

/**
 * Posts a new User entry in the database.
 */
router.post('/users/', auth('basic'), users.forPostQuery);

/**
 * Deletes a User entry in the database.
 router.delete('/users/:id', users.forDeleteQuery);
*/

// router.put("/users/:id", users.submit);

/* GET home page. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
