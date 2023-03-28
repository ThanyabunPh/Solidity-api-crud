class config:
    contract_address = "0xCB7f22cf6492AbCD58715a7e1810d256321fC147"
    contract_abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "deleteStudent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_surname",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_GPAX",
                    "type": "uint256"
                }
            ],
            "name": "insertStudent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_surname",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_GPAX",
                    "type": "uint256"
                }
            ],
            "name": "updateStudent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllRecords",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "surname",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "GPAX",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "flag",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct StudentRecords.Student[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                }
            ],
            "name": "searchById",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "surname",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "GPAX",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "flag",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct StudentRecords.Student",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    web3_provider = "http://127.0.0.1:7545"

