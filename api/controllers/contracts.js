var mongoose = require('mongoose');
var Contracts = require('../schemas/contracts');
module.exports.postContracts = function(req,res){
    var contracts = new Contracts();
    contracts.contractname = req.body.contractname;
    contracts.tokensymbol = req.body.tokensymbol;
    contracts.tokenname = req.body.tokenname;
    contracts.decimals = req.body.decimals;
    contracts.tokentype = req.body.tokentype;
    contracts.invstad = req.body.invstad;
    contracts.tokenrate = req.body.tokenrate;
    contracts.tokenowner = req.body.tokenowner;
    contracts.tokenrate = req.body.tokenrate;
    contracts.hardcaptokens = req.body.hardcaptokens;
    contracts.softcaptokens = req.body.softcaptokens;
    contracts.startdate = req.body.startdate;
    contracts.starttime = req.body.starttime;
    contracts.whitelist = req.body.whitelist;
    contracts.changingdates = req.body.changingdates;
    contracts.transferable = req.body.transferable;
    contracts.invlimit = req.body.invlimit;
    contracts.minlimit = req.body.minlimit;
    contracts.maxlimit = req.body.maxlimit;
    contracts.bonus1 = req.body.bonus1;
    contracts.bonus2 = req.body.bonus2;
    contracts.bonus3 = req.body.bonus3;
    contracts.bonus4 = req.body.bonus4;
    contracts.bonus5 = req.body.bonus5;
    contracts.bonus6 = req.body.bonus6;
    contracts.bonus7 = req.body.bonus7;
    contracts.bonus8 = req.body.bonus8;
    contracts.bonus9 = req.body.bonus9;
    contracts.amountbonus1 = req.body.amountbonus1;
    contracts.amountbonus2 = req.body.amountbonus2;
    contracts.amountbonus3 = req.body.amountbonus3;
    Contracts.create(contracts, function (err, post) {
        if (err) {
            console.log(err);
            return err;
        }
        res.json(post);
      });
};
module.exports.getContracts = function(req,res){
    Contracts.find({},function(err,data){
        if (err) throw err;
        res.json(data);
    });
};