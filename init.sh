#!/bin/sh

#entorno
if [[ $2 ]]
then
    export -p FLASK_APP=app.py
    export -p FLASK_ENV=development
    export -p FLASK_DEBUG=1
    echo "Desarrollo  🌪  💣"
else
    echo "Production  🚀 🚀"
fi

# export -p FLASK_APP=app.py
# export -p FLASK_ENV=development
# export -p FLASK_DEBUG=1
# aplicacion
source $1
export -p TOKEN_APP="DASHKLDASJKH23732IOHE23"
export -p DB_APP=content
export -p DB_HOST=localhost
export -p DB_USER_APP=scraper
export -p DB_PASS_APP=scraperpass
export -p REDIS_PASS=contrasena
export -p REDIS_PORT=6379
export -p REDIS_HOST=localhost
echo "🔥 🔥 🔥 🔥 DONE! 🔥 🔥 🔥 🔥 🔥 "