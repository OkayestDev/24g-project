const { DataTypes, Sequelize } = require('sequelize');

const { DATE } = DataTypes;

module.exports = {
    fields: {
        updatedAt: {
            type: DATE,
            field: 'updated_at',
            defaultValue: Sequelize.fn('now'),
        },
        createdAt: {
            type: DATE,
            field: 'created_at',
            defaultValue: Sequelize.fn('now'),
        },
    },
    tableOptions: {
        timestamps: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    },
};
