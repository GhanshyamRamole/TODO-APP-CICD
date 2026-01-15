#!/bin/sh

# Create the config file
echo "window._env_ = {" > /usr/share/nginx/html/env-config.js

# Read the environment variable and write it to the file
# If the variable is missing, it defaults to empty string
echo "  \"REACT_APP_BACKEND_URL\": \"$REACT_APP_BACKEND_URL\"" >> /usr/share/nginx/html/env-config.js

echo "};" >> /usr/share/nginx/html/env-config.js
