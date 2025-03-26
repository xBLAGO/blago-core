from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/status")
def status():
    return jsonify({
        "status": "🟢 BLAGO network is online",
        "total_needs_created": 42,
        "xBLAGO_in_circulation": 0.1092
    })

if __name__ == "__main__":
    app.run(debug=True)
