const waxjs = require('@waxio/waxjs/dist');
const axios = require('axios');

class Assets {}

Assets.getbalancedata = function (username, props) {
  if (username == null) return;

  getgainsbalance(username).then((r) => {
    getwaxbalance(username).then((x) => {
      module.exports.wax = x;
      module.exports.gains = r;
      if (props != null) props.GetBalance(true);
    });
  });
};

async function getwaxbalance(user) {
  try {
    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://waxtestnet.greymass.com',
      tryAutoLogin: false,
    });
    console.log(user);
    const r = await wax.rpc.get_table_rows({
      json: true,
      code: 'eosio.token',
      scope: user,
      table: 'accounts',
    });
    var empty = '0.00000000 WAX';

    if (r.rows.length == 0) return empty;

    return r.rows[0].balance;
  } catch (e) {
    return '0.00000000 WAX';
  }
}
async function getgainsbalance(user) {
  try {
    console.log(user);

    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://waxtestnet.greymass.com',
      tryAutoLogin: false,
    });

    const r = await wax.rpc.get_table_rows({
      json: true,
      code: 'crypliftrstk',
      scope: user,
      table: 'accounts',
      limit: 1,
    });
    var empty = '0.0000 GAINS';

    if (r.rows.length == 0) return empty;

    return r.rows[0].balance;
  } catch (e) {
    return '0.0000 GAINS';
  }
}

Assets.getassetdata = function (username) {
  if (username == null) return;
  getconfig().then((config) => {
    getuser(username).then((res) => {
      var stakePower = 0;
      if (res.data.length > 0) {
        for (let i = 0; i < res.data[0].inventory.length; i++) {
          for (let j = 0; j < config.levels.length; j++) {
            if (res.data[0].inventory[i].key == config.levels[j].key) {
              stakePower +=
                res.data[0].inventory[i].value * config.levels[j].value;
            }
          }

          res.last_claim = res.data[0].last_claim;
        }
      } else res.last_claim = 0;
      res.stakePower = stakePower;
      module.exports.user_data = res;

      getassets(username).then((res) => {
        unstakedassets(res.data.data, username, config).then((v) => {
          module.exports.assets = v.staked;
          module.exports.unstaked = v.unstaked;
          return username;
        });
      });
    });
  });
};

async function getuser(user) {
  try {
    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://waxtestnet.greymass.com',
      tryAutoLogin: false,
    });

    const r = await wax.rpc.get_table_rows({
      json: true,
      code: 'crypliftrstk',
      scope: 'crypliftrstk',
      table: 'accounts',
      limit: 100,
    });

    for (let i = 0; i < r.rows.length; i++) {
      if (r.rows[i].account == user) return r.rows[i];
    }
    var empty = {
      data: [],
      account: user,
    };
    if (r.rows.length == 0) return empty;
    return empty;
  } catch (e) {
    return empty;
  }
}

async function getconfig() {
  try {
    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://waxtestnet.greymass.com',
      tryAutoLogin: false,
    });

    const r = await wax.rpc.get_table_rows({
      json: true,
      code: 'crypliftrstk',
      scope: 'crypliftrstk',
      table: 'pools',
      limit: 1,
    });

    return r.rows[0];
  } catch (e) {}
}

async function getassets(user) {
  var data = await axios.get(
    `https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=cryptolifter&owner=${user}&page=1&limit=1000&order=desc&sort=asset_id`
  );
  return data;
}

async function unstakedassets(assets, user, config) {
  try {
    let unstake = [];
    let stake = [];

    Object.values(assets).forEach(function (v) {
      checktemplate(v, config).then((q) => {
        checkasset(v.asset_id, user).then((r) => {
          if (!r && q.rate != 0) unstake.push(q);
          if (r) stake.push(q);
        });
      });
    });
    var object = {
      unstaked: unstake,
      staked: stake,
    };
    return object;
  } catch (e) {}
}

async function checkasset(assetID, user) {
  try {
    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://waxtestnet.greymass.com',
      tryAutoLogin: false,
    });

    const r = await wax.rpc.get_table_rows({
      json: true,
      code: 'crypliftrstk',
      scope: 'crypliftrstk',
      table: 'plates',
      limit: 1,
      lower_bound: assetID,
    });
    if (r.rows.length == 0) return false;
    if (r.rows[0].asset_id == assetID && r.rows[0].account == user) {
      return true;
    } else return false;
  } catch (e) {}
}

async function checktemplate(asset, config) {
  try {
    const wax = new waxjs.WaxJS({
      rpcEndpoint: 'https://waxtestnet.greymass.com',
      tryAutoLogin: false,
    });

    var tID = asset.template.template_id;
    var rate = parseFloat('0');
    const r = await wax.rpc.get_table_rows({
      json: true,
      code: 'crypliftrstk',
      scope: 'crypliftrstk',
      table: 'rarity',
      limit: 100,
    });
    if (r.rows.length == 0) rate = 0;
    r.rows.forEach(function (v) {
      for (let i = 0; i < v.template_ids.length; i++) {
        if (tID == v.template_ids[i]) {
          for (let j = 0; j < config.levels.length; j++) {
            if (config.levels[j].key == v.level) {
              rate = parseFloat(config.levels[j].value);
            }
          }
        }
      }
    });
    asset.rate = rate.toFixed(4);
    return asset;
  } catch (e) {}
}

module.exports = {
  functions: Assets,
};
