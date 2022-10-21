const SIMPLE_CONTRACT = artifacts.require("SimpleContract");

module.exports = function(deployer) {
  deployer.deploy(SIMPLE_CONTRACT);
};
