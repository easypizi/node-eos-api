const request = require('request-promise')
const serializeObject = require('./serializeObject')

/**
 * Creates request
 * @param {string} host The host for connect
 * @param {object} params Query parameters
 * @return {any}
 */
async function createRequest(host, params) {
  const query = serializeObject(params)
  const url = `${host}?${query}`
  const resp = await request(url)
  const result = JSON.parse(resp)
  if (result.errno !== 0 || result.errmsg !== 'Success') {
    const message = result.errmsg
    throw new Error(message)
  }
  return result.data
}

module.exports = createRequest
