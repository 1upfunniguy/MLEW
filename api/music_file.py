from flask import Flask, request, send_from_directory
import os

app = Flask(__name__)
MUSIC_FOLDER = 'music'

@app.route('/api/music_file')
def serve_music_file():
    filename = request.args.get('file')
    if not filename:
        return "Missing file", 400
    return send_from_directory(MUSIC_FOLDER, filename)
