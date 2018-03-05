const image = require('./image')

module.exports = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    image: image,
  }
}
