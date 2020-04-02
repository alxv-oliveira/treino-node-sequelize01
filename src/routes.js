const moment = require('moment');
const AttendanceController = require('./controllers/AttendanceController');

function dataValida(req, res, next) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(req.body.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
    
    const dataEhValida = data >= dataCriacao;

    if(!dataEhValida)
        return res.status(400).json({ error: 'Data deve ser maior ou igual a data atual'});

    return next();
}

module.exports = routes => {
    routes.get('/attendances', AttendanceController.index)
        .get('/attendance', AttendanceController.show)
        .post('/attendances', dataValida, AttendanceController.store)
        .patch('/attendances/:id', AttendanceController.update)
        .delete('/attendances/:id', AttendanceController.delete);
};