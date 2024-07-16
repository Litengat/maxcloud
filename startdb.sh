docker run -d --name pocketbase -p 80:8090 \
  --env USER_DEFINED_KEY=value \
  --network pocketbase_network \
  --volume /path/to/pocketbase-persistence:/pocketbase \
  adrianmusante/pocketbase:latest
  