const videoReactionRepository = require('../../../src/db/repositories/video-reaction.repository');
const { User, Video } = require('../../../src/db/models');
const { LIKE, DISLIKE } = require('../../../src/db/models/video-reaction.model');

describe('videoReactionRepository', () => {
    const mockUser = {
        email: 'fakeemail@test.com',
        firstName: 'John',
        lastName: 'Doe',
    };
    const mockVideo = {
        title: 'fake title',
        videoLink: 'fake video link',
        thumbLink: 'fake thumb link',
    };
    let video;
    let user;

    beforeAll(async () => {
        user = await User.create(mockUser);
        video = await Video.create(mockVideo);
    });

    afterAll(async () => {
        await User.destroy({
            where: {
                id: user.id,
            },
        });
        await Video.destroy({
            where: {
                id: video.id,
            },
        });
    });

    describe('createVideoLike', () => {
        test('create and returns video like reaction', async () => {
            const createdVideoReaction = await videoReactionRepository.createVideoLike({
                videoId: video.id,
                userId: user.id,
            });
            expect(createdVideoReaction.reaction).toBe(LIKE);
            expect(createdVideoReaction.id).toBeTruthy();
        });
    });

    describe('createVideoDislike', () => {
        test('create and returns video dislike reaction', async () => {
            const createdVideoReaction = await videoReactionRepository.createVideoDislike({
                videoId: video.id,
                userId: user.id,
            });
            expect(createdVideoReaction.reaction).toBe(DISLIKE);
            expect(createdVideoReaction.id).toBeTruthy();
        });
    });
});
