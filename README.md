#### Install
```
TAG=3 \
&& wget https://github.com/wumvi/wm.ts.react-app-tpl/archive/refs/tags/v$TAG.zip -O tpl.zip \
&& unzip tpl.zip \
&& mv wm.ts.react-app-tpl-$TAG/* ./ \
&& mv wm.ts.react-app-tpl-$TAG/.* ./ \
&& rm tpl.zip \
&& rm -rf wm.ts.react-app-tpl-$TAG \
&& node tpl-init.mjs
```

#### ENV Run
use .env file or VARS to customize 
```bash
PORT=8159 npm run dev
```
or
```
echo PORT=8159 > .env
npm run dev
```

#### Vars
- PORT Dev port
- HOST Dev host
- \_\_DEV\_\_ Dev ENV