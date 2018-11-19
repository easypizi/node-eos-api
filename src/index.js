const MODULES = require('./constants/modules')
const ACTIONS = require('./constants/actions')
const createRequest = require('./utils/createRequest')

class EosParkApi {
  /**
   * @class EosPark Api
   * @constructor
   * @param {string} [token] EosPark API token
   */
  constructor(token = '') {
    this.token = token
    this.host = 'https://api.eospark.com/api'
  }

  /**
   * Creates request
   * @private
   * @param {object} params Query params
   * @return {Promise}
   */
  _createRequest(params) {
    return createRequest(this.host, {
      ...params,
      apikey: this.token
    })
  }

  /**
   * Get account basic info by account name.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getAccountInfo(account) {
    return this._createRequest({
      module: MODULES.ACCOUNT,
      action: ACTIONS.GET_ACCOUNT,
      account
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get the RAM/CPU/NET information of the account.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getAccountResource(account) {
    return this._createRequest({
      module: MODULES.ACCOUNT,
      action: ACTIONS.GET_ACCOUNT_RESOURCE,
      account
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get the EOS balance of the account.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getAccountBalance(account) {
    return this._createRequest({
      module: MODULES.ACCOUNT,
      action: ACTIONS.GET_ACCOUNT_BALANCE,
      account
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get one token or all token balances of account.
   * @param {string} account Account
   * @param {string} symbol The name of the token; if not filled, it means to query all tokens about the account.
   * @returns {Promise<string>}
   */

  getTokenList(account, symbol = '') {
    return this._createRequest({
      module: MODULES.ACCOUNT,
      action: ACTIONS.GET_TOKEN_LIST,
      account,
      symbol
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get the list of accounts created by this account
   * @param {string} account Account
   * @param {number} page Page number
   * @param {number} size Number of records per page
   * @returns {Promise<string>}
   */

  getSubAccounts(account, page = 1, size = 20) {
    return this._createRequest({
      module: MODULES.ACCOUNT,
      action: ACTIONS.GET_SUB_ACCOUNTS,
      account,
      page,
      size
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get the token transfer records of account.
   * @param {string} account Account
   * @param {number} page Page number
   * @param {string} symbol	Token name
   * @param {string} code	Issue account
   * @param {number} size Number of records per page
   * @returns {Promise<string>}
   */

  getAccountTx(account, symbol = '', code = '', page = 1, size = 200) {
    return this._createRequest({
      module: MODULES.ACCOUNT,
      action: ACTIONS.GET_ACCOUNTS_TRANSACTIONS,
      account,
      symbol,
      code,
      page,
      size
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get block details based on block number.
   * @param {number} block_num Block number
   * @returns {Promise<string>}
   */

  getBlock(block_num) {
    return this._createRequest({
      module: MODULES.BLOCK,
      action: ACTIONS.GET_BLOCK,
      block_num
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get block detail of latest block.
   * @returns {Promise<string>}
   */

  getLatestBlock() {
    return this._createRequest({
      module: MODULES.BLOCK,
      action: ACTIONS.GET_LATEST_BLOCK
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get contract basic info.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getContract(account) {
    return this._createRequest({
      module: MODULES.CONTRACT,
      action: ACTIONS.GET_CONTRACT,
      account
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get contract ABI list.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getContractActions(account) {
    return this._createRequest({
      module: MODULES.CONTRACT,
      action: ACTIONS.GET_CONTRACT_ACTIONS,
      account
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get the ABI call records of the contract.
   * @param {string} account Account
   * @param {string} action_name ABI name, Can be obtained from getContractActions()
   * @param {number} page Page number
   * @param {number} size Number of records per page
   * @returns {Promise<string>}
   */

  getContractTransactions(account, action_name, page = 1, size = 20) {
    return this._createRequest({
      module: MODULES.CONTRACT,
      action: ACTIONS.GET_CONTRACT_TRANSACTIONS,
      account,
      action_name,
      page,
      size
    }).then(resp => {
      return resp
    })
  }

  /**
   * Get transaction details by transaction ID.
   * @param {string} trx_id transaction ID
   * @returns {Promise<string>}
   */
  getTransaction(trx_id) {
    return this._createRequest({
      module: MODULES.TRANSACTION,
      action: ACTIONS.GET_TRANSACTION,
      trx_id
    }).then(resp => {
      return resp
    })
  }
}

module.exports = EosParkApi
