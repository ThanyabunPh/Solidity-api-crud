from web3 import Web3
from config import config


class Contract_method:
    def __init__(self):
        self.Web3 = Web3(Web3.HTTPProvider(config.web3_provider))
        self.owner = self.Web3.eth.accounts[0]
        self.contract = self.Web3.eth.contract(address=config.contract_address, abi=config.contract_abi)

    def get(self, st_id):
        return self.contract.functions.searchById(int(st_id)).call()

    def get_all(self):
        data = self.contract.functions.getAllRecords().call()
        object = []
        for i in range(len(data)):
            if data[i][4]:
                object.append({
                    'id': data[i][0],
                    'name': data[i][1],
                    'surname': data[i][2],
                    'GPAX': float(data[i][3] / 100),
                    'flag': data[i][4]
                })
            else:
                pass

        return object

    def insert(self, name, surname, GPAX):
        return self.contract.functions.insertStudent(name, surname, GPAX).transact({'from': self.owner})

    def delete(self, st_id):
        return self.contract.functions.deleteStudent(st_id).transact({'from': self.owner})

    def update(self, st_id, name, surname, GPAX):
        return self.contract.functions.updateStudent(st_id, name, surname, GPAX).transact({'from': self.owner})
