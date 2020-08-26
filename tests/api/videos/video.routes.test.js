const { apiRequest, PUT, DELETE, POST, GET } = require('../../api-test-suite');
const { User, Video } = require('../../../src/db/models');

describe('videoController', () => {
    const baseRoute = '/videos';
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

    describe('GET /videos', () => {
        test('returns videos', async () => {
            const response = await apiRequest(GET, baseRoute, user.id);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.videos)).toBe(true);
        });
    });

    describe('POST /:videoId/dislike', () => {
        test('creates video dislike', async () => {
            const response = await apiRequest(POST, `${baseRoute}/${video.id}/dislike`, user.id);
            expect(response.status).toBe(200);
            expect(response.message).toBe('Successfully disliked video');
        });
    });

    describe('POST /:videoId/like', () => {
        test('creates video like', async () => {
            const response = await apiRequest(POST, `${baseRoute}/${video.id}/like`, user.id);
            expect(response.status).toBe(200);
            expect(response.message).toBe('Successfully liked video');
        });
    });

    describe('PUT /:videoId/view', () => {
        test("increments video's view count", async () => {
            const response = await apiRequest(PUT, `${baseRoute}/${video.id}/view`, user.id);
            expect(response.status).toBe(200);
            await video.reload();
            expect(video.views).toBe(1);
        });
    });

    describe('POST /:videoId/comment', () => {
        test('creates a new video comment', async () => {
            const mockComment = 'fake comment';
            const response = await apiRequest(POST, `${baseRoute}/${video.id}/comment`, user.id, {
                comment: mockComment,
            });
            expect(response.status).toBe(200);
            expect(response.videoComment.userId).toBe(user.id);
            expect(response.videoComment.comment).toBe(mockComment);
        });
    });
});
