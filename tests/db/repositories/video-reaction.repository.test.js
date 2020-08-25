const videoReactionRepository = require('../../src/db/repositories/video-reaction.repository');
const { User, Video } = require('../../../src/db/models');

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
    const mockVideoComment = 'Perfect video. I rate 5/7';
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
        test('create and returns video like reaction', async () => {});
    });

    describe('createVideoDislike', () => {
        test('create and returns video dislike reaction', async () => {});
    });
});
