from flask import jsonify, request
import urllib.request
import json
from flask_app import app
from dotenv import dotenv_values

api_key = dotenv_values('.env')['YOUR_API_KEY']

@app.route("/api/watchmode/search/<searchValue>")
def watchmode_search(searchValue):
    searchValue = searchValue.replace(" ", "&")
    with urllib.request.urlopen(f'https://api.watchmode.com/v1/autocomplete-search/?apiKey={api_key}&search_value={searchValue}&search_type=1') as url:
        data = json.loads(url.read().decode())
        print(data['results'])
        return jsonify(data['results']), 200

@app.route("/api/watchmode/id/<int:id>")
def watchmode_id_search(id):
    with urllib.request.urlopen(f'https://api.watchmode.com/v1/title/{id}/details/?apiKey={api_key}&append_to_response=sources') as url:
        data = json.loads(url.read().decode())
        print(data)
        return jsonify(data), 200

@app.route("/api/watchmode/init")
def watchmode_init():
    with urllib.request.urlopen(f'https://api.watchmode.com/v1/sources/?apiKey={api_key}') as url:
        data = json.loads(url.read().decode())
        print(data)
        return jsonify(data), 200