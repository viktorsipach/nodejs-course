const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const handleRoute = require('../../utils/handleRoute');

router.route('/').get(async (req, res) => {
  handleRoute(async () => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  }, res);
});

router.route('/:id').get(async (req, res) => {
  handleRoute(async () => {
    const user = await usersService.get(req.params.id);
    res.json(User.toResponse(user));
  }, res);
});

router.route('/').post(async (req, res) => {
  handleRoute(async () => {
    const user = await usersService.create(
      new User({
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
      })
    );
    res.json(User.toResponse(user));
  }, res);
});

router.route('/:id').put(async (req, res) => {
  handleRoute(async () => {
    const user = await usersService.update(req.params.id, req.body);
    res.json(User.toResponse(user));
  }, res);
});

router.route('/:id').delete(async (req, res) => {
  handleRoute(async () => {
    await usersService.deleteUser(req.params.id);
    res.status(204).send('USER SUCCESSFULLY DELETED!');
  }, res);
});

module.exports = router;
