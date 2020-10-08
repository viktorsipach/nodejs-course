const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/:id/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.id);
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id);
  res.json(Task.toResponse(task));
});

router.route('/:id/tasks').post(async (req, res) => {
  const task = await tasksService.create(
    req.params.id,
    new Task({
      title: req.body.title,
      description: req.body.description,
      order: req.body.order,
      userId: req.body.userId,
      boardId: req.params.id,
      columnId: req.body.columnId
    })
  );

  res.json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);

  res.json(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  const tasks = await tasksService.deleteUser(req.params.id);

  res.json(tasks.map(Task.toResponse));
});

module.exports = router;
