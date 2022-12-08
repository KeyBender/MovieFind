
from flask_app import app
from flask_app.models.users_model import User
from flask import jsonify, request

@app.route('/api/user/find/email')
def find():
    user = User.find_by_email(request.get_json())
    if user:
        return jsonify(user.format_response()), 200
    else:
        return jsonify({'message' : 'email not found'}), 400

@app.route('/api/user/find/id')
def find_id():
    user = User.find_by_id(request.get_json())
    if user:
        return jsonify(user.format_response()), 200
    else:
        return jsonify({'message' : 'email not found'}), 400

@app.route('/api/user/create', methods=['POST'])
def create():
    print(request.get_json())
    db_response = User.create(request.get_json())
    if db_response:
        return jsonify({'message' : 'ok'}), 201
    else:
        return jsonify({'message' : 'error with db, user not created'}), 500
