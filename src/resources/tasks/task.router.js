const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');
const handleRoute = require('../../utils/handleRoute');

router.route('/').get(async (req, res) => {
  handleRoute(async () => {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks);
  }, res);
});

router.route('/:id').get(async (req, res) => {
  handleRoute(async () => {
    const { id, boardId } = req.params;
    const task = await tasksService.get(id, boardId);
    res.json(task);
  }, res);
});

router.route('/').post(async (req, res) => {
  handleRoute(async () => {
    const { boardId } = req.params;
    const task = await tasksService.create(
      new Task({
        title: req.body.title,
        description: req.body.description,
        order: req.body.order,
        userId: req.body.userId,
        boardId,
        columnId: req.body.columnId
      })
    );
    res.json(task);
  }, res);
});

router.route('/:id').put(async (req, res) => {
  handleRoute(async () => {
    const { id, boardId } = req.params;
    const data = req.body;
    const task = await tasksService.update(id, boardId, data);
    res.json(task);
  }, res);
});

router.route('/:id').delete(async (req, res) => {
  handleRoute(async () => {
    const { id, boardId } = req.params;
    await tasksService.deleteTask(id, boardId);
    res.status(204).send('TASK SUCCESSFULLY DELETED!');
  }, res);
});

module.exports = router;
