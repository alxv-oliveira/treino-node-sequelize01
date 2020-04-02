const { Model, DataTypes } = require('sequelize');

class Attendance extends Model {
    static init(sequelize) {
        super.init({
            client: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [3, ],
                        msg: 'Cliente deve ter pelo menos três caracteres'
                    },
                },
            },
            pet: DataTypes.STRING,
            service: DataTypes.STRING,
            date: DataTypes.DATE,
            status: DataTypes.STRING,
            observations: DataTypes.STRING,
        }, { sequelize, tableName: 'attendances' });
    }
}

module.exports = Attendance;