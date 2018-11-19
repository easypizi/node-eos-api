/**
 * Eos account result type
 */
type EosParkAccount = {
  create_timestamp: string;
  permissions: [];
  perm_name: string;
  parent: string;
  required_auth: {};
  threshold: number;
  accounts: [];
  permission: {
    actor: string;
    permission: string;
  };
  weight: number;
  keys: [];
  key: string;
  weight: number;
  waits: [];
  wait_sec: number;
  weight: number;
};

/**
 * Eos account Resource result type
 */
type EosParkAccountResource = {
  errno: number;
  errmsg: string;
  ram: {
    available: number;
    used: number;
  };
  net: {
    used: number;
    available: number;
    max: number;
  };
  cpu: {
    used: number;
    available: number;
    max: number;
  };
  staked: {
    net_weight: string;
    cpu_weight: string;
  };
};

/**
 * Eos account Balance result type
 */
type EosParkAccountBalance = {
  balance: string;
};

/**
 * Eos token list result type
 */
type EosParkTokenList = {
  symbol_list: [];
  symbol: string;
  code: string;
  balance: string;
};

/**
 * Get the list of accounts created by this account
 */
type EosParkSubAccounts = {
  created_count: number;
  created_list: [];
  account: string;
  create_timestamp: string;
};

/**
 * Get the token transfer records of account.
 */
type EosParkAccountTransactions = {
  trace_count: number;
  trace_list: [];
  trx_id: string;
  timestamp: string;
  receiver: string;
  sender: string;
  code: string;
  quantity: string;
  memo: string;
  symbol: string;
  status: string;
};

/**
 * Get contract basic info.
 */
type EosParkContract = {
  code_hash: string;
  code_deploy_time: string;
  audit_status: string;
  consistency_status: string;
};

/**
 * Get contract ABI list.
 */
type EosParkContractActions = {
  action_list: {
    action_detail: [];
  };
  name: string;
  params: [];
  actions_name_list: [];
  action_count: number;
};

/**
 * Get the ABI call records of the contract.
 */
type EosParkContractTransactions = {
  num_of_trxs: number;
  trxs: [];
  trx_id: string;
  action_info: [];
  account: string;
  name: string;
  authorization: [];
  timestamp: string;
};

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
declare class EtherscanApi {
  /**
   * @class EtherscanApi
   * @constructor
   * @param {string} [token] Etherscan API token
   * @param {string} [networkName=MAIN] Network name. Available:
   *  main, ropsten, kovan and rinkeby
   */
  constructor(token?: string, network?: keyof NETWORKS);

  /**
   * Returns Ether balance for a single address
   * @param {string} address Address
   * @param {object} [options]
   * @param {string} [options.unit=wei] Balance unit
   * @param {string} [options.tag=latest]
   * @returns {Promise<string>}
   * @todo Write test for options
   */
  getAccountBalance(
    address: string,
    options?: {
      unit?: keyof UNITS;
      tag?: string;
    }
  ): Promise<string>;
}

declare namespace EtherscanApi {

}

export = EtherscanApi;
