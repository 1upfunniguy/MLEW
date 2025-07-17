from flask import Flask, jsonify
import os

app = Flask(__name__)
MUSIC_FOLDER = 'music'

@app.route('/api/music')
def list_music():
    try:
        files = [f for f in os.listdir(MUSIC_FOLDER)
                 if f.lower().endswith(('.mp3', '.wav', '.ogg', '.m4a'))]
        return jsonify(files)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
