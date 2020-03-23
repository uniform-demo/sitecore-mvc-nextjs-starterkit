const _config = require('./_config');
_config();

const { NetlifyPublishProvider } = require('@uniformdev/publishing-netlify');
new NetlifyPublishProvider(console).deploy('out');
