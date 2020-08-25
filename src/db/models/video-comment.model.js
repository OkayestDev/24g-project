const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('../sequelize');
const timestampConfig = require('../timestamp.config');

const { UUID, STRING } = DataTypes;

class VideoComment extends Model {}

const videoCommentDTO = {
    id: {
        type: UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: UUID,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
            model: {
                tableName: 'users',
            },
            key: 'id',
        },
    },
    videoId: {
        type: UUID,
        field: 'video_id',
        onDelete: 'CASCADE',
        references: {
            model: {
                tableName: 'videos',
            },
            key: 'id',
        },
    },
    comment: {
        type: STRING,
        allowNull: false,
    },
    ...timestampConfig.fields,
};

VideoComment.init(videoCommentDTO, {
    ...timestampConfig.tableOptions,
    sequelize,
    tableName: 'video_comments',
    underscored: true,
});

module.exports = {
    model: VideoComment,
    videoCommentDTO,
};
