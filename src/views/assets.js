const waxjs = require("@waxio/waxjs/dist");
const axios = require("axios");

class Assets{}


Assets.getassetdata=function (username)
{
  if(username===null)return;
  getconfig().then((config) => {
    
    getuser(username).then((res) => {

           var stakePower = 0;
           if(res.data.length>0)
           {
      for (let i = 0; i < res.data[0].inventory.length; i++) {
        for (let j = 0; j < config.levels.length; j++) {
          if (res.data[0].inventory[i].key === config.levels[j].key) {
            stakePower += res.data[0].inventory[i].value * config.levels[j].value;
          }
      }
    
      res.last_claim= res.data[0].last_claim;
           }
          }
          else res.last_claim=0;
    res.stakePower = stakePower;
    module.exports.user_data = res;
  

    getassets(username).then((res) => {

      unstakedassets(res.data.data,username).then((v) => {
        module.exports.assets = v.staked;
        module.exports.unstaked = v.unstaked
        
      });
    });
  });
  
});


}



async function getuser(user) {
  try{
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://waxtestnet.greymass.com",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "crypliftrstk",
    scope: "crypliftrstk",
    table: "accounts",
    limit: 1,
    lower_bound: user,
  });


  var empty={
    account : user,
    data :[]
  }
  if(r.rows.length===0 || r.rows[0].account!==user) return empty;
  return r.rows[0];
}
catch(e){

}
}

async function getconfig() {
  try{
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://waxtestnet.greymass.com",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "crypliftrstk",
    scope: "crypliftrstk",
    table: "pools",
    limit: 1,
  });


  return r.rows[0];
}
catch(e){

}
}

async function getassets(user) {
  var data = await axios.get(
    `${process.env.REACT_APP_ATOMIC_ASSETS_API}/atomicassets/v1/assets?collection_name=cryptolifter&owner=${user}&page=1&limit=1000&order=desc&sort=asset_id`
  );
  return data;
}

async function unstakedassets(assets,user) {
  try{
  let unstake = [];
  let stake = [];

  Object.values(assets).forEach(function (v) {
    checktemplate(v.template.template_id).then((q)=>{
    checkasset(v.asset_id,user).then((r) => {
      if (!r &&q ) unstake.push(v);
      else if(q)stake.push(v);
    });

});
});
  var object= {
    unstaked:unstake,
    staked:stake
  }
  return object;
}
catch(e){

}
}

async function checkasset(assetID,user) {
  try{
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://waxtestnet.greymass.com",
    tryAutoLogin: false,
  });

  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "crypliftrstk",
    scope: "crypliftrstk",
    table: "plates",
    limit: 1,
    lower_bound: assetID,
  });
  if(r.rows.length===0) return false;
  if (r.rows[0].asset_id === assetID && r.rows[0].account===user) {
    return true;
  } else return false;

}
catch(e){

}
}

async function checktemplate(templateID) {
  try{
  const wax = new waxjs.WaxJS({
    rpcEndpoint: "https://waxtestnet.greymass.com",
    tryAutoLogin: false,
  });
  var check=false;
  const r = await wax.rpc.get_table_rows({
    json: true,
    code: "crypliftrstk",
    scope: "crypliftrstk",
    table: "rarity",
    limit: 1000,
  });
  if(r.rows.length===0) check= false;
  r.rows.forEach(function(v)
  {
    for(let i=0;i<v.template_ids.length;i++)
    {
      if(templateID===v.template_ids[i])
      {
        check= true;
      }
    }
});

return check;
}
catch(e){

}
}

module.exports = {
  functions: Assets
};