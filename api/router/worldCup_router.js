const router = require('express').Router();

const worldCup_controller = require('../controller/worldCup_controller');

//all post
router.get('/', worldCup_controller.WorldCup_all_Post)

//single post get
router.get('/:id', worldCup_controller.worldCup_single_post)

//single post
router.post('/', worldCup_controller.newPostController)

// post delete
router.delete('/:id', worldCup_controller.worldCup_single_delete)

// post delete
router.patch('/:id', worldCup_controller.worldCup_single_edit)

module.exports = router 