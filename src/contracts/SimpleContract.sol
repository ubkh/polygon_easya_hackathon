pragma solidity ^0.5.16;

contract SimpleContract {
  uint public voteCount = 0;
  uint public funds = 0;

  struct Vote {
    string category;
    address voter;
  }
  
  struct Charity {
    address payable rep;
    string name;
    string description;
    string category;
  }

  //mapping(address=>uint) public donors;

  event CharityCreated(
    address rep,
    string name,
    string category,
    string desciption
  );

  event donationReceived(address donor, uint amount);
  event donationSentToTarget(address recipient);

  // user -> Category
  //mapping(address=>Category) public votes;
  Vote[] private votes;

  Charity[] private charities;

  event VotedCategory(
    string name 
  );

  constructor() public {
  }

  function getVotesLen() public view returns (address) {
    return msg.sender;
  }

  // public or external?
  function vote(string memory cat) public {
    votes.push(Vote(cat, msg.sender));
    //votes[msg.sender] = Category(cat);
    //catVotes.push(msg.sender);

    voteCount++;

    emit VotedCategory(cat);
  }

  function checkVoted(address sender) public view returns (bool) {
    for (uint i=0; i < votes.length; i++) {
      if (votes[i].voter == sender) {
        return true;
      }
    }
    return false;
  }

  function compareStrings(string memory a, string memory b) public pure returns (bool) {
      return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
  }

  function getVoteCountByCat(string memory cat) public view returns (uint) {
    uint count = 0;
    for (uint i=0; i < votes.length; i++) {
      if (compareStrings(votes[i].category, cat)) {
      //if (votes[i].category == cat) {
        count++;
      }
    }
    return count;
  }

  function createCharity(address payable rep, string calldata name, string calldata category, string calldata desc) external {
    charities.push(Charity(rep, name, category, desc));

    emit CharityCreated(rep, name, category, desc);
  }

  function donate() payable public {
    funds += msg.value;
    msg.sender.transfer(msg.value);
  }

  function transfer(string memory charity, uint amount) public payable returns (bool) {
    address payable rep;

    for (uint i=0; i < charities.length; i++) {
      if (compareStrings(charities[i].name,charity)) {
        rep = charities[i].rep;
      } else {
        return false;
      }
    }

    require(msg.sender != rep);
    if(rep.send(amount)) {
        emit donationSentToTarget(rep);
        emit donationReceived(msg.sender, amount);
        return true;
    }
    return false;
  }

  function allocateFunds() public {
    uint counter = 0;
    uint share = 0;
    for (uint i=0; i < charities.length; i++) {
      counter = 0;
      for (uint j=0; j < votes.length; j++) {
        if (compareStrings(votes[j].category,charities[i].category)) {
          counter++;
        }
      }
      if (counter==0) {
        share = 1;
      } else {
        share = counter / votes.length;
      }
      transfer(charities[i].name, share*funds);
    }
    funds = 0;
    delete votes;
  }
}
