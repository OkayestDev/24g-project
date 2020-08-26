const videoRepository = require('../../db/repositories/video.repository');
const videoReactionRepository = require('../../db/repositories/video-reaction.repository');
const videoCommentRepository = require('../../db/repositories/video-comment.repository');

const getVideos = async (request, response) => {
    const videos = await videoRepository.getVideos();
    return response.status(200).json({ videos });
};

const createVideoDislike = async (request, response) => {
    const userId = request.headers.authorization;
    const { videoId } = request.params;

    const videoDislike = videoReactionRepository.createVideoDislike({ videoId, userId });

    if (!videoDislike) {
        return response.status(400).json({ message: 'Failed to dislike video' });
    }

    return response.status(200).json({ message: 'Successfully disliked video', videoDislike });
};

const createVideoLike = async (request, response) => {
    const userId = request.headers.authorization;
    const { videoId } = request.params;

    const videoLike = await videoReactionRepository.createVideoLike({ videoId, userId });

    if (!videoLike) {
        return response.status(400).json({ message: 'Failed to like video' });
    }

    return response.status(200).json({ message: 'Successfully liked video', videoLike });
};

const incrementView = async (request, response) => {
    const { videoId } = request.params;

    const isUpdated = await videoRepository.incrementView(videoId);

    if (!isUpdated) {
        return response.status(400).json({ message: 'Failed to increment video views' });
    }

    return response.status(200).json({ message: "Successfully incremented video's view count" });
};

const createVideoComment = async (request, response) => {
    const userId = request.headers.authorization;
    const { videoId } = request.params;
    const { comment } = request.body;

    const videoComment = await videoCommentRepository.createVideoComment({
        videoId,
        comment,
        userId,
    });

    if (!videoComment) {
        return response.status(400).json({ message: 'Failed to create video comment' });
    }

    return response.status(200).json({ videoComment });
};

module.exports = {
    getVideos,
    createVideoComment,
    createVideoLike,
    createVideoDislike,
    incrementView,
};
