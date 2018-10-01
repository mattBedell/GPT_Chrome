# GPT_Chrome
Chrome extension for frontend googletag debugging

### BUILD
For dev builds first install chrome cli ```brew install chrome-cli```

Install dependencies: ```npm i```

|                |Command                         |Description                       |
|----------------|-------------------------------|-----------------------------|
|Production|``````npm run build-prod`````` |Builds minified extension.|
|Dev|```npm run build-dev``` |Builds extension and watches for changes. Refreshes chrome extension. Sourcemapping.|

### Install to Chrome
https://developer.chrome.com/extensions/getstarted#manifest
<img src="https://developer.chrome.com/static/images/get_started/load_extension.png">
