from flask import Flask, request, jsonify


app = Flask(__name__)


@app.route('/')
def index():
    return jsonify({
        'request': {
            'method': request.method,
            'cookies': request.cookies,
            'path': request.path,
            'headers': dict(request.headers),
        },
    })


app.run(host='0.0.0.0', port=80)
