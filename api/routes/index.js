import { Router } from 'express'
import * as users from "../controllers/users"

/**
 * The router instance.
 */
let router = Router()

/**
 * The default response if page is not found.
 */
router.get('/', function(req, res){
  res.send(404);
})

//************************ USERS (NEW) ************************/

/**
 * Returns all of the users
 */
router.get('/users/', users.getAll);

/**
* Returns all of the users
*/
router.get('/users/:id', users.findItem);

/**
 * Updates a User on the database
 * If the data doesn't exist, then it creates it.
 */
router.put("/users/:id", users.forPutQuery);

/**
 * Posts a new User entry in the database.
 */
router.post("/users/", users.forPostQuery);

/**
 * Deletes a User entry in the database.
 */
router.delete("/users/:id", users.forDeleteQuery);

// router.put("/users/:id", users.submit);

//******************* END OF USERS(NEW) **********************/

/* GET home page. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
