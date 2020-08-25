const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('../sequelize');
const timestampConfig = require('../timestamp.config');

const { UUID, ENUM } = DataTypes;

const LIKE = 'like';
const DISLIKE = 'dislike';
const REACTIONS = Object.freeze([LIKE, DISLIKE]);

class VideoReaction extends Model {}

const videoReactionDTO = {
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
    reaction: {
        type: ENUM(REACTIONS),
    },
    ...timestampConfig.fields,
}

VideoReaction.init(videoReactionDTO, {
    ...timestampConfig.tableOptions,
    sequelize,
    tableName: 'video_reactions',
    underscored: true,
});

module.exports = {
    model: VideoReaction,
    videoReactionDTO,
    LIKE,
    DISLIKE,
    REACTIONS,
};
