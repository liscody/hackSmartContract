/**
 *Submitted for verification at Etherscan.io on 2022-04-24
*/

//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;


/// @notice The contract contrains a few secrets, to apply at least 2/3 has to be solved
contract Solution {
    bytes32 private immutable pwd2;
    address private factory;
    uint24 public nonce;
    bytes32 private pwd1;

    bytes32 public mySecret1;
    bytes32 public mySecret2;
    bytes32 public mySecret3;

    constructor() {
        pwd1 = 0xe6059ea98a7014ce90de2f750de75cd3db11e6c8db1f86f55535cf761d055f8d;
        pwd2 = 0x8c1064313c5652bd96285aea34e2bc1696f49489ea18c67d2118402b3f154b56;
        factory = 0x1F98431c8aD98523631AE4a59f267346ea31F984;
    }

    function setNonce(uint24 _nonce) public {
        nonce = _nonce;
    }

    function getAllSecrets() public {

        // get first secret 
        
        uint256 secret;
        address f = factory;
        uint256 n = nonce;
        bytes memory data = abi.encodePacked(bytes4(0x22afcccb), uint256(3000));
        bytes memory buffer = new bytes(32);
        assembly {
            secret := sload(0x0)
            let bufref := add(buffer, 0x20)
            pop(call(gas(), f, 0, add(data, 0x20), 0x24, bufref, 0x20))
            let y := mload(bufref)
            mstore(bufref, add(add(secret, y), n))
            secret := keccak256(bufref, 0x20)  
        }
        mySecret1 = bytes32(secret);
        nonce += 1;

        // get second secret
        
        bytes32 scr2 = pwd1;
        mySecret2 = keccak256(abi.encode(scr2, nonce));
        nonce += 1;

        // get third secret

        bytes32 scr3 = pwd2;
        mySecret3 = keccak256(abi.encode(scr3, nonce));
        nonce += 1;

    }
}