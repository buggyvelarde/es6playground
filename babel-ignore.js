var includes = [
]

module.exports = new RegExp([
  '/node_modules/(?!',
  includes.join('|'),
  ')'
].join(''))

