Send-AU3Key -Key "{F5}";
clear;
docker exec -it 24g_api node --inspect=0.0.0.0:9228 $args[0]