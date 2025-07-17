import os
import json

def handler(request):
    try:
        current_dir = os.path.dirname(__file__)
        music_folder = os.path.join(current_dir, '..', 'public', 'music')
        songs = [
            f for f in os.listdir(music_folder)
            if f.lower().endswith(('.mp3', '.wav', '.ogg', '.m4a'))
        ]
        return {
            "statusCode": 200,
            "headers": { "Content-Type": "application/json" },
            "body": json.dumps(songs)
        }
    except Exception as e:
        return {
            "statusCode": 500,
            "headers": { "Content-Type": "application/json" },
            "body": json.dumps({ "error": str(e) })
        }
