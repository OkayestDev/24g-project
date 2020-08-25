const videoRepository = require('../../../src/db/repositories/video.repository');
const { VideoReaction, VideoComment, User, Video } = require('../../../src/db/models');
const { LIKE } = require('../../../src/db/models/video-reaction.model');

describe('videoRepository', () => {
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
    let videoReaction;
    let user;
    let videoComment;

    beforeAll(async () => {
        user = await User.create(mockUser);
        video = await Video.create(mockVideo);
        videoReaction = await VideoReaction.create({
            userId: user.id,
            videoId: video.id,
            reaction: LIKE,
        });
        videoComment = await VideoComment.create({
            userId: user.id,
            videoId: video.id,
            comment: mockVideoComment,
        });
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

    describe('getVideos', () => {
        test('returns an array of videos', async () => {
            const videos = await videoRepository.getVideos();
            expect(Array.isArray(videos)).toBe(true);
            expect(videos[0] instanceof Video).toBe(true);
        });

        test('returns nested video comments', async () => {
            const videos = await videoRepository.getVideos();
            const createdVideo = videos.find((videoResponse) => videoResponse.id === video.id);
            expect(createdVideo.VideoComments[0].id).toBe(videoComment.id);
            expect(createdVideo.VideoComments[0].User.id).toBe(user.id);
        });

        test('returns count of video reactions', async () => {
            const videos = await videoRepository.getVideos();
            const createdVideo = videos.find((videoResponse) => videoResponse.id === video.id);
            expect(createdVideo.VideoReactions[0].id).toBe(videoReaction.id);
        });
    });

    describe('incrementViews', () => {
        test("increments video's views", async () => {
            const isVideoUpdated = await videoRepository.incrementViews(video.id);
            expect(isVideoUpdated).toBe(true);
            await video.reload();
            expect(video.views).toBe(1);
        });
    });
});
