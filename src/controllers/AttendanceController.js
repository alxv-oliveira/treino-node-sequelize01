const moment = require('moment');
const Op = require('sequelize/lib/operators');
const Attendance = require('../models/Attendance');

module.exports = {
  async index(req, res) {
    const attendances = await Attendance.findAll();

    return res.json(attendances);
  },

  async store(req, res) {
    const {
      client, pet, service, status, observations,
    } = req.body;

    const date = moment(req.body.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

    const attendance = await Attendance.create({
      client, pet, service, date, status, observations,
    });

    return res.json(attendance);
  },

  async show(req, res) {
    const { client } = req.query;
    const attendances = await Attendance.findOne(
      {
        where: {
          client: {
            [Op.iLike]: `%${client}%`,
          },
        },
      },
    );

    if (!attendances) { return res.status(400).json({ error: 'Attendance not found' }); }

    return res.json(attendances);
  },

  async update(req, res) {
    const { id } = req.params;
    if (req.body.date) { req.body.date = moment(req.body.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS'); }

    const attendance = await Attendance.findByPk(id);

    if (!attendance) { return res.status(400).json({ error: 'Attendance not found' }); }

    await attendance.update(req.body);

    return res.json(attendance);
  },

  async delete(req, res) {
    const { id } = req.params;

    const attendance = await Attendance.findByPk(id);

    if (!attendance) { return res.status(400).json({ error: 'Attendance not found' }); }

    attendance.destroy();

    return res.json();
  },
};
