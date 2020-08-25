const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('../sequelize');
const timestampConfig = require('../timestamp.config');

const { STRING, UUID } = DataTypes;

class User extends Model {}

const userDTO = {
    id: {
        type: UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    email: {
        type: STRING,
        unique: true,
        allowNull: false,
    },
    firstName: {
        type: STRING,
        field: 'first_name',
    },
    lastName: {
        type: STRING,
        field: 'last_name',
    },
    ...timestampConfig.fields,
};

User.init(userDTO, {
    ...timestampConfig.tableOptions,
    sequelize,
    tableName: 'users',
    underscored: true,
});

module.exports = {
    model: User,
    userDTO,
};
