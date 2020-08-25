const login = async (request, response) => {
    return response.status(200).json({ message: 'Hello World' });
};

module.exports = {
    login,
};
