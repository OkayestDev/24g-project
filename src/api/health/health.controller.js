const health = async (request, response) => {
    return response.status(200).json({ message: 'Hello World' });
};

module.exports = {
    health,
};
