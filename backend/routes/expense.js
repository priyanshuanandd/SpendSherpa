const { fetchExpenses, addExpenses, deleteExpenses } = require('../controllers/expenseController');

const router = require('express').Router();

// router.get('/', (req, res) => 
//     res.send('expense get method working'));
// get expense for user
router.get('/',fetchExpenses);
// add expense
router.post('/',addExpenses);
//delete expense
router.delete('/:expenseId',deleteExpenses);

module.exports = router;