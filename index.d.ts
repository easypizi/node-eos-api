/**
 * Eos account result type
 */
type EosParkAccount = {
  create_timestamp: string
  permissions: []
  perm_name: string
  parent: string
  required_auth: {}
  threshold: number
  accounts: []
  permission: {
    actor: string
    permission: string
  }
  weight: number
  keys: []
  key: string
  weight: number
  waits: []
  wait_sec: number
  weight: number
}

/**
 * Eos account Resource result type
 */
type EosParkAccountResource = {
  errno: number
  errmsg: string
  ram: {
    available: number
    used: number
  }
  net: {
    used: number
    available: number
    max: number
  }
  cpu: {
    used: number
    available: number
    max: number
  }
  staked: {
    net_weight: string
    cpu_weight: string
  }
}

/**
 * Eos account Balance result type
 */
type EosParkAccountBalance = {
  balance: string
}

/**
 * Eos token list result type
 */
type EosParkTokenList = {
  symbol_list: []
  symbol: string
  code: string
  balance: string
}

/**
 * Get the list of accounts created by this account
 */
type EosParkSubAccounts = {
  created_count: number
  created_list: []
  account: string
  create_timestamp: string
}

/**
 * Get the token transfer records of account.
 */
type EosParkAccountTransactions = {
  trace_count: number
  trace_list: []
  trx_id: string
  timestamp: string
  receiver: string
  sender: string
  code: string
  quantity: string
  memo: string
  symbol: string
  status: string
}

/**
 * Get contract basic info.
 */
type EosParkContract = {
  code_hash: string
  code_deploy_time: string
  audit_status: string
  consistency_status: string
}

/**
 * Get contract ABI list.
 */
type EosParkContractActions = {
  action_list: {
    action_detail: []
  }
  name: string
  params: []
  actions_name_list: []
  action_count: number
}

/**
 * Get the ABI call records of the contract.
 */
type EosParkContractTransactions = {
  num_of_trxs: number
  trxs: []
  trx_id: string
  action_info: []
  account: string
  name: string
  authorization: []
  timestamp: string
}

// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================
// ==============++++++++++++===================================================================

/**
 * The Etherscan API
 */
declare class EosParkApi {
  /**
   * @class EosParkApi
   * @constructor
   * @param {string} [token] Etherscan API token
   */
  constructor(token?: string)

  /**
   * Get account basic info by account name.
   * @param {string} account Account
   * @returns {Promise<string>}
   */
  getAccountInfo(account: string): Promise<string>

  /**
   * Get the RAM/CPU/NET information of the account.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getAccountResource(account: string): Promise<string>

  /**
   * Get one token or all token balances of account.
   * @param {string} account Account
   * @param {string} symbol The name of the token; if not filled, it means to query all tokens about the account.
   * @returns {Promise<string>}
   */

  getTokenList(account: string, symbol?: string): Promise<string>

  /**
   * Get the list of accounts created by this account
   * @param {string} account Account
   * @param {number} page Page number
   * @param {number} size Number of records per page
   * @returns {Promise<string>}
   */

  getSubAccounts(account: string, page?: number, size?: number): Promise<string>

  /**
   * Get the token transfer records of account.
   * @param {string} account Account
   * @param {number} page Page number
   * @param {string} symbol	Token name
   * @param {string} code	Issue account
   * @param {number} size Number of records per page
   * @returns {Promise<string>}
   */

  getAccountTx(
    account: string,
    symbol?: string,
    code?: string,
    page?: number,
    size?: number
  ): Promise<string>

  /**
   * Get block details based on block number.
   * @param {number} block_num Block number
   * @returns {Promise<string>}
   */

  getBlock(block_num: number): Promise<string>

  /**
   * Get block detail of latest block.
   * @returns {Promise<string>}
   */

  getLatestBlock(): Promise<string>

  /**
   * Get contract basic info.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getContract(account: string): Promise<string>

  /**
   * Get contract ABI list.
   * @param {string} account Account
   * @returns {Promise<string>}
   */

  getContractActions(account: string): Promise<string>

  /**
   * Get the ABI call records of the contract.
   * @param {string} account Account
   * @param {string} action_name ABI name, Can be obtained from getContractActions()
   * @param {number} page Page number
   * @param {number} size Number of records per page
   * @returns {Promise<string>}
   */

  getContractTransactions(
    account: string,
    action_name: string,
    page?: number,
    size?: number
  ): Promise<string>

  /**
   * Get transaction details by transaction ID.
   * @param {string} trx_id transaction ID
   * @returns {Promise<string>}
   */
  getTransaction(trx_id: string): Promise<string>
}

declare namespace EtherscanApi {

}

export = EtherscanApi
