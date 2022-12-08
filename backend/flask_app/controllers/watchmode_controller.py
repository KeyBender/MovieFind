from flask import jsonify, request
import urllib.request
import json
from flask_app import app

YOUR_API_KEY = "yRaMJT9UguDGDaaHn2ygddFzTsHD6H1UkoQHVF1s"

@app.route("/api/watchmode/init")
def watchmode_call():
    with urllib.request.urlopen(f'https://api.watchmode.com/v1/list-titles/?apiKey={YOUR_API_KEY}') as url:
        data = json.loads(url.read().decode())
        print(data)
        return jsonify(data), 200