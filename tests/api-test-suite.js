const BASE_URL = '/';

const GET = 'get';
const POST = 'post';
const DELETE = 'delete';
const PUT = 'put';

const apiRequest = async (method, url, userId = null, params = {}) => {
    let requestBuilder;

    switch (method) {
        case GET:
            requestBuilder = process.testServer.get(url).query(params);
            break;
        case POST:
            requestBuilder = process.testServer.post(url).send(params);
            break;
        case DELETE:
            requestBuilder = process.testServer.delete(url).send(params);
            break;
        case PUT:
            requestBuilder = process.testServer.put(url).send(params);
            break;
        default:
            throw new Error(`No method for: ${method}`);
    }

    return requestBuilder
        .set('Content-Type', 'application/json')
        .set('Authorization', userId)
        .then((res) => ({
            status: res.statusCode,
            ...res.body,
        }));
};

const createMockResponse = () => {
    const res = {};
    res.status = (statusCode) => {
        res.status = statusCode;
        return res;
    };
    res.json = (json) => {
        res.json = json;
        return res;
    };
    return res;
};

module.exports = {
    apiRequest,
    GET,
    POST,
    DELETE,
    PUT,
    createMockResponse,
};
