from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Ransomware Detection Backend Running."

@app.route('/api/results', methods=['GET'])
def get_results():
    try:
        with open('entropy_results.json', 'r') as f:
            results = json.load(f)
        return jsonify(results)
    except Exception:
        return jsonify([])

if __name__ == "__main__":
    app.run(debug=True, port=5000)
