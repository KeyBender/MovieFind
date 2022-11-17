from flask_app import app
from flask import jsonify, request
from flask_app.models.movies_model import Movies

@app.route('/api/movies/like', methods=['POST'])
def like():
    movie = Movies.create(request.get_json())
    if movie:
        return jsonify({'message' : 'liked movie'}), 200
    else:
        return jsonify({'message' : 'db error, cannot like movie'}), 500

@app.route('/api/movies/unlike', methods=['DELETE'])
def unlike():
    movie = Movies.delete(request.get_json())
    if movie:
        return jsonify({'message' : 'unliked movie'}), 200
    else:
        return jsonify({'message' : 'db error, cannot like moive'}), 500

