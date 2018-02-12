# GPT_Chrome
Chrome extension for frontend googletag debugging

### BUILD
For dev builds first install chrome cli ```brew install chrome-cli```

|                |Command                         |Description                       |
|----------------|-------------------------------|-----------------------------|
|Production|``````npm run build-all-prod`````` |Builds minified extension.|
|Scripts Dev|```build-scripts-dev``` |Build scripts and watch for changes. Refreshes chrome extension. Sourcemapping.|
|Popup Dev|```npm run build-popup```|Builds unminified popup. Sourcemapping.|
|Popup Hot|```npm run hot```|Popup Dev with hot module replacement. Sourcemapping. ```http://localhost:3001/``` |
