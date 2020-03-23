const _config = require('./_config');
_config();

const { AwsS3PublishProvider } = require('@uniformdev/publishing-awss3');
new AwsS3PublishProvider(console).deploy('out');
