from flask import Flask, request, send_from_directory
import os

app = Flask(__name__)
MUSIC_FOLDER = 'music'

@app.route('/api/music_file')
def get_music_file():
    filename = request.args.get('file')
    if not filename:
        return "Missing filename", 400
    file_path = os.path.join(MUSIC_FOLDER, filename)
    if not os.path.exists(file_path):
        return "File not found", 404
    return send_from_directory(MUSIC_FOLDER, filename)
