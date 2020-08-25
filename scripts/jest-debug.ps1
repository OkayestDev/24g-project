# Requires auto-it
# https://www.autoitscript.com/site/autoit/downloads/
# Send f5 to start debugger in code
Send-AU3Key -Key "{F5}";
clear;
docker exec -it 24g_api node --inspect=0.0.0.0:9228 /app/node_modules/jest/bin/jest.js --runInBand --forceExit $args[0]


