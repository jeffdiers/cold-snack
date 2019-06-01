import { Router } from 'express';
import path from 'path';
import * as users from '../controllers/users';
import * as sessions from '../controllers/sessions';
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
// router.post('/users/login', auth('basic'), users.postLogin);

router.post('/sessions', sessions.login);

router.delete('/sessions/', sessions.logout);

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
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
