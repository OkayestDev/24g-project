const videoController = require('../../../src/api/videos/video.controller');
const { createMockResponse } = require('../../api-test-suite');
const { User, Video } = require('../../../src/db/models');

describe('videoController', () => {
    let mockResponse;
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

    beforeEach(() => {
        mockResponse = createMockResponse();
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

    describe('getVidoes', () => {
        test('returns array of vidoes', async () => {
            await videoController.getVideos({}, mockResponse);
            expect(mockResponse.status).toBe(200);
            expect(Array.isArray(mockResponse.json.videos)).toBe(true);
        });
    });

    describe('createVideoDislike', () => {
        test('creates video reaction and returns it', async () => {
            const request = {
                params: {
                    videoId: video.id,
                },
                headers: {
                    authorization: user.id,
                },
            };
            await videoController.createVideoDislike(request, mockResponse);
            expect(mockResponse.status).toBe(200);
            expect(mockResponse.json.message).toBe('Successfully disliked video');
        });
    });

    describe('createVideoLike', () => {
        test('creates video reaction and returns it', async () => {
            const request = {
                params: {
                    videoId: video.id,
                },
                headers: {
                    authorization: user.id,
                },
            };
            await videoController.createVideoLike(request, mockResponse);
            expect(mockResponse.status).toBe(200);
            expect(mockResponse.json.message).toBe('Successfully liked video');
        });
    });

    describe('incrementView', () => {
        test('increments view of a video', async () => {
            const request = {
                params: {
                    videoId: video.id,
                },
            };
            await videoController.incrementView(request, mockResponse);
            await video.reload();
            expect(video.views).toBe(1);
        });
    });

    describe('createVideoComment', () => {
        test('create and returns video comment', async () => {
            const mockComment = 'fake comment';
            const request = {
                params: {
                    videoId: video.id,
                },
                headers: {
                    authorization: user.id,
                },
                body: {
                    comment: mockComment,
                },
            };
            await videoController.createVideoComment(request, mockResponse);
            expect(mockResponse.status).toBe(200);
            expect(mockResponse.json.videoComment.comment).toBe(mockComment);
        });
    });
});
