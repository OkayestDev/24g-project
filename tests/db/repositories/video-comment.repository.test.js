const videoCommentRepository = require('../../../src/db/repositories/video-comment.repository');
const { User, Video } = require('../../../src/db/models');

describe('videoCommentRepository', () => {
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

    describe('createVideoComment', () => {
        test('creates and returns video comment', async () => {
            const mockComment = 'phenomenal video';
            const videoComment = await videoCommentRepository.createVideoComment({
                videoId: video.id,
                userId: user.id,
                comment: mockComment,
            });
            expect(videoComment.comment).toBe(mockComment);
            expect(videoComment.id).toBeTruthy();
        });
    });
});
