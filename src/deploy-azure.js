const _config = require('./_config');
_config();

const { AzurePublishProvider } = require('@uniformdev/publishing-azureblobstorage');
new AzurePublishProvider(console).deploy('out');
