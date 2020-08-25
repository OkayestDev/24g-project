const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('../sequelize');

const { STRING, UUID, INTEGER } = DataTypes;

class Video extends Model {}

const videoDTO = {
    id: {
        type: UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    videoLink: {
        type: STRING,
        allowNull: false,
        field: 'video_link',
    },
    thumbLink: {
        type: STRING,
        allowNull: false,
        field: 'thumb_link',
    },
    likes: {
        type: INTEGER,
        defaultValue: 0,
    },
    dislikes: {
        type: INTEGER,
        defaultValue: 0,
    },
    timestamps: true,
};

Video.init(videoDTO, {
    sequelize,
    modelName: 'Video',
});

module.exports = {
    videoDTO,
    Video,
};
