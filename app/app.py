from flask import Flask, render_template, request, jsonify
from contract.blockchain import Contract_method

app = Flask(__name__)

Contract_method = Contract_method()


@app.route('/')
def index():
    data = Contract_method.get_all()
    return render_template('index.html', data=data)


@app.route('/get_by_id/<id>', methods=['GET'])
def get_by_id(id):
    data = Contract_method.get(id)
    return jsonify({'data': data})


@app.route('/getall/', methods=['GET'])
def get():
    data = Contract_method.get_all()
    return jsonify({"result": "success", 'data': data})


@app.route('/insert/', methods=['POST'])
def insert():
    obj = request.get_json()
    tx = Contract_method.insert(obj['name'], obj['surname'], int(obj['GPAX']))
    return jsonify({"result": "success", 'tx': tx.hex()})


@app.route('/delete/', methods=['DELETE'])
def delete():
    obj = request.get_json()
    tx = Contract_method.delete(obj['id'])
    return jsonify({"result": "success", 'tx': tx.hex()})


@app.route('/update/', methods=['PUT'])
def update():
    obj = request.get_json()
    tx = Contract_method.update(int(obj['id']), obj['name'], obj['surname'], int(obj['GPAX']))
    return jsonify({"result": "success", 'tx': tx.hex()})


if __name__ == '__main__':
    app.run(debug=True)
