const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const handleRoute = require('../../utils/handleRoute');

router.route('/').get(async (req, res) => {
  handleRoute(async () => {
    const boards = await boardsService.getAll();
    res.json(boards);
  }, res);
});

router.route('/:id').get(async (req, res) => {
  handleRoute(async () => {
    const board = await boardsService.get(req.params.id);
    res.json(board);
  }, res);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns
    })
  );

  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  handleRoute(async () => {
    const board = await boardsService.update(req.params.id, req.body);
    res.json(board);
  }, res);
});

router.route('/:id').delete(async (req, res) => {
  handleRoute(async () => {
    await boardsService.deleteBoard(req.params.id);
    res.status(204).send('BOARD SUCCESSFULLY DELETED!');
  }, res);
});

module.exports = router;
