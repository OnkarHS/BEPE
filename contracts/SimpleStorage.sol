pragma solidity 0.4.24;
contract Ballot {

struct Documents {
    
    string aadhar;

}

 
struct MultiSig
{
    
    address inst;
    address stud;
Documents documents;
    
    
}



mapping(address=>MultiSig) public wallets ;







function createNewMultiSigbyUser(address instituteaddress) public {
        
        //var wa = wallets[msg.sender];
        wallets[msg.sender].inst=instituteaddress;
        wallets[msg.sender].stud=msg.sender;
    

}



function uploadAadhar(string a){
    
    //var wa=wallets[msg.sender];

    
    
    
}
}

