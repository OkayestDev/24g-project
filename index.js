const { server } = require('./src/server');

server.listen(server.get('port'), () => {
    console.log(`App is running on ${server.get('port')} in ${server.get('env')} mode`);
});
