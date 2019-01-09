// 記得要 0x 開頭...
var EvaluationBin =
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611c8a806100536000396000f3fe6080604052600436106100a3576000357c010000000000000000000000000000000000000000000000000000000090048063712965281161007657806371296528146102b057806377a92aee146103955780639bf538d814610494578063e2c29efb14610579578063e8a49b4c14610609576100a3565b80633e7436571461010d578063421b2d8b1461016357806342242e56146101b45780634867f01814610206575b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561010a573d6000803e3d6000fd5b50005b34801561011957600080fd5b506101466004803603602081101561013057600080fd5b8101908080359060200190929190505050610674565b604051808381526020018281526020019250505060405180910390f35b34801561016f57600080fd5b506101b26004803603602081101561018657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d3565b005b3480156101c057600080fd5b50610204600480360360608110156101d757600080fd5b810190808035906020019092919080359060200190929190803560000b90602001909291905050506107db565b005b34801561021257600080fd5b506102ae600480360361018081101561022a57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610b5d565b005b3480156102bc57600080fd5b506102e9600480360360208110156102d357600080fd5b8101908080359060200190929190505050611069565b604051808060200189815260200188815260200187815260200186815260200185815260200184815260200183815260200182810382528a818151815260200191508051906020019080838360005b83811015610353578082015181840152602081019050610338565b50505050905090810190601f1680156103805780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b3480156103a157600080fd5b506103d8600480360360408110156103b857600080fd5b8101908080359060200190929190803590602001909291905050506112af565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561045657808201518184015260208101905061043b565b50505050905090810190601f1680156104835780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b3480156104a057600080fd5b50610577600480360360608110156104b757600080fd5b81019080803590602001906401000000008111156104d457600080fd5b8201836020820111156104e657600080fd5b8035906020019184600183028401116401000000008311171561050857600080fd5b90919293919293908035906020019064010000000081111561052957600080fd5b82018360208201111561053b57600080fd5b8035906020019184600183028401116401000000008311171561055d57600080fd5b9091929391929390803590602001909291905050506114ed565b005b34801561058557600080fd5b506106076004803603604081101561059c57600080fd5b8101908080359060200190929190803590602001906401000000008111156105c357600080fd5b8201836020820111156105d557600080fd5b803590602001918460018302840111640100000000831117156105f757600080fd5b9091929391929390505050611682565b005b34801561061557600080fd5b506106426004803603602081101561062c57600080fd5b81019080803590602001909291905050506118b3565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6000806000600280549050148061069057508260028054905011155b156106a9576002805490506000809050915091506106ce565b6002805490506002848154811015156106be57fe5b9060005260206000200154915091505b915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072e57600080fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f18b625038d93eedab8ccf3ccd58c37a03a2ddd836f522a9b9ceeff8a555b3a9f426040518082815260200191505060405180910390a350565b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054148061087557506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561088057600080fd5b60006001600085815260200190815260200160002060000154141515156108a657600080fd5b8160036000858152602001908152602001600020600001541115156108ca57600080fd5b60006003600085815260200190815260200160002090508160000b8160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060009054906101000a900460000b60000b14156109545750610b58565b60008160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060009054906101000a900460000b60000b1415610a82576109f08260000b82600301858154811015156109d757fe5b9060005260206000200154611add90919063ffffffff16565b8160030184815481101515610a0157fe5b9060005260206000200181905550818160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff021916908360000b60ff160217905550610b56565b610ac88260000b610aba8460000b8460030187815481101515610aa157fe5b9060005260206000200154611add90919063ffffffff16565b611add90919063ffffffff16565b8160030184815481101515610ad957fe5b9060005260206000200181905550818160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085815260200190815260200160002060006101000a81548160ff021916908360000b60ff1602179055505b505b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610bf757506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b1515610c0257600080fd5b60001515600160008e8152602001908152602001600020600f0160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610c7557600080fd5b6000600160008e81526020019081526020016000206000015414151515610c9b57600080fd5b610cc48b600160008f815260200190815260200160002060030154611b2190919063ffffffff16565b600160008e815260200190815260200160002060030181905550610d078a600160008f815260200190815260200160002060040154611b2190919063ffffffff16565b600160008e815260200190815260200160002060040181905550610d4a89600160008f815260200190815260200160002060050154611b2190919063ffffffff16565b600160008e815260200190815260200160002060050181905550610d8d88600160008f815260200190815260200160002060060154611b2190919063ffffffff16565b600160008e815260200190815260200160002060060181905550610dd087600160008f815260200190815260200160002060070154611b2190919063ffffffff16565b600160008e815260200190815260200160002060070181905550610e1386600160008f815260200190815260200160002060080154611b2190919063ffffffff16565b600160008e815260200190815260200160002060080181905550610e5685600160008f815260200190815260200160002060090154611b2190919063ffffffff16565b600160008e815260200190815260200160002060090181905550610e9984600160008f8152602001908152602001600020600a0154611b2190919063ffffffff16565b600160008e8152602001908152602001600020600a0181905550610edc83600160008f8152602001908152602001600020600b0154611b2190919063ffffffff16565b600160008e8152602001908152602001600020600b0181905550610f1f82600160008f8152602001908152602001600020600c0154611b2190919063ffffffff16565b600160008e8152602001908152602001600020600c0181905550610f6281600160008f8152602001908152602001600020600d0154611b2190919063ffffffff16565b600160008e8152602001908152602001600020600d0181905550610fa560018060008f8152602001908152602001600020600e0154611b2190919063ffffffff16565b600160008e8152602001908152602001600020600e018190555060011515600160008e8152602001908152602001600020600f0160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a905050508b7fdeabd14f29155a217a237126bae40f53223a64c7ec83120aa9e6d086c6e75a25426040518082815260200191505060405180910390a2505050505050505050505050565b6060600080600080600080600061107e611b42565b600160008b81526020019081526020016000206101e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111415780601f1061111657610100808354040283529160200191611141565b820191906000526020600020905b81548152906001019060200180831161112457829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111e35780601f106111b8576101008083540402835291602001916111e3565b820191906000526020600020905b8154815290600101906020018083116111c657829003601f168201915b5050505050815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a8201548152602001600b8201548152602001600c8201548152602001600d8201548152602001600e8201548152505090508060400151816060015182608001518360a001518460c001518560e001518661010001518761012001518797509850985098509850985098509850985050919395975091939597565b600060606000806000600360008881526020019081526020016000206000015414806112f1575060036000878152602001908152602001600020600001548511155b1561135b5760008060036000898152602001908152602001600020600001548292506040805190810160405280600481526020017f6e756c6c00000000000000000000000000000000000000000000000000000000815250919081915093509350935093506114e4565b60036000878152602001908152602001600020600001548510151561137f57600080fd5b60036000878152602001908152602001600020600101858154811015156113a257fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660036000888152602001908152602001600020600201868154811015156113f057fe5b90600052602060002001600360008981526020019081526020016000206003018781548110151561141d57fe5b9060005260206000200154600360008a815260200190815260200160002060000154828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114d45780601f106114a9576101008083540402835291602001916114d4565b820191906000526020600020905b8154815290600101906020018083116114b757829003601f168201915b5050505050925093509350935093505b92959194509250565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061158757506001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b151561159257600080fd5b600060016000838152602001908152602001600020600001541415156115b757600080fd5b60028190806001815401808255809150509060018203906000526020600020016000909192909190915055506000600160008381526020019081526020016000209050858582600201919061160d929190611bb9565b508383826001019190611621929190611bb9565b50818160000181905550813373ffffffffffffffffffffffffffffffffffffffff167f75d036412927cea255a9f618a0050efaaa7a639fea5df5b252890bfd565fbdf4426040518082815260200191505060405180910390a3505050505050565b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054148061171c57506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561172757600080fd5b600060016000858152602001908152602001600020600001541415151561174d57600080fd5b6000600360008581526020019081526020016000209050806001013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508060020183839091806001815401808255809150509060018203906000526020600020016000909192939091929390919290919250919061180e929190611bb9565b5050806003016000908060018154018082558091505090600182039060005260206000200160009091929091909150555061185760018260000154611b2190919063ffffffff16565b81600001819055503373ffffffffffffffffffffffffffffffffffffffff167fbcd4df942086ef0d7d9a4de0678ae5ad7a06847d95680355b7503760376b0889426040518082815260200191505060405180910390a250505050565b60008060008060006118c3611b42565b600160008881526020019081526020016000206101e0604051908101604052908160008201548152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119865780601f1061195b57610100808354040283529160200191611986565b820191906000526020600020905b81548152906001019060200180831161196957829003601f168201915b50505050508152602001600282018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a285780601f106119fd57610100808354040283529160200191611a28565b820191906000526020600020905b815481529060010190602001808311611a0b57829003601f168201915b5050505050815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a8201548152602001600b8201548152602001600c8201548152602001600d8201548152602001600e820154815250509050806101400151816101600151826101800151836101a00151846101c00151955095509550955095505091939590929450565b600080828401905060008312158015611af65750838112155b80611b0c5750600083128015611b0b57508381125b5b1515611b1757600080fd5b8091505092915050565b6000808284019050838110151515611b3857600080fd5b8091505092915050565b6101e0604051908101604052806000815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611bfa57803560ff1916838001178555611c28565b82800160010185558215611c28579182015b82811115611c27578235825591602001919060010190611c0c565b5b509050611c359190611c39565b5090565b611c5b91905b80821115611c57576000816000905550600101611c3f565b5090565b9056fea165627a7a723058202b2e8decb175151e6bd1da9622bbe1124d5826108a420fcc54cf60b09932f2e90029";

var EvaluationAbi = JSON.parse(`[
	{
		"constant": true,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getClassIndex",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "addUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "classId",
				"type": "uint256"
			},
			{
				"name": "_commentNum",
				"type": "uint256"
			},
			{
				"name": "_vote",
				"type": "int8"
			}
		],
		"name": "addVoteToComment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "classId",
				"type": "uint256"
			},
			{
				"name": "homework",
				"type": "uint256"
			},
			{
				"name": "hwLength",
				"type": "uint256"
			},
			{
				"name": "test",
				"type": "uint256"
			},
			{
				"name": "testPrep",
				"type": "uint256"
			},
			{
				"name": "groupProject",
				"type": "uint256"
			},
			{
				"name": "rollCall",
				"type": "uint256"
			},
			{
				"name": "finalScore",
				"type": "uint256"
			},
			{
				"name": "teacher",
				"type": "uint256"
			},
			{
				"name": "usefulness",
				"type": "uint256"
			},
			{
				"name": "effectiveness",
				"type": "uint256"
			},
			{
				"name": "mental",
				"type": "uint256"
			}
		],
		"name": "addNameClassValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "classId",
				"type": "uint256"
			}
		],
		"name": "getDataFromClassId",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "classId",
				"type": "uint256"
			},
			{
				"name": "_commentNum",
				"type": "uint256"
			}
		],
		"name": "getVoteData",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "class",
				"type": "string"
			},
			{
				"name": "classId",
				"type": "uint256"
			}
		],
		"name": "addNameClass",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "classId",
				"type": "uint256"
			},
			{
				"name": "_comment",
				"type": "string"
			}
		],
		"name": "addNameClassComment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "classId",
				"type": "uint256"
			}
		],
		"name": "getDataFromClassIdPart2",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "master",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "addUserEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "who",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "classId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "addNameClassEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "classId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "addNameClassValueEvent",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "who",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "addNameClassCommentEvent",
		"type": "event"
	}
]`);

module.exports = { EvaluationBin, EvaluationAbi};
