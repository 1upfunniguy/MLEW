from flask import Flask, send_from_directory, render_template_string, url_for
import os
import random
import json

app = Flask(__name__)
MUSIC_FOLDER = 'music'

@app.route('/')
def index():
    # Get all music files
    songs = [f for f in os.listdir(MUSIC_FOLDER) if f.lower().endswith(('.mp3', '.wav', '.ogg', '.m4a'))]
    if not songs:
        return "<h1>No music files found in the music folder.</h1>"

    random.shuffle(songs)  # Shuffle the list
    song_urls = [url_for('serve_music', filename=song) for song in songs]

    return render_template_string("""
    <!DOCTYPE html>
    <html>
    <head>
        <title>music</title>
    </head>
    <body>
        <h1>heres some of the music i like and ya</h1>
        <audio id="audioPlayer" controls autoplay></audio>

        <script>
            const playlist = {{ songs | tojson }};
            let currentIndex = 0;

            const player = document.getElementById('audioPlayer');
            player.src = playlist[currentIndex];
            player.play();

            player.addEventListener('ended', () => {
                currentIndex++;
                if (currentIndex < playlist.length) {
                    player.src = playlist[currentIndex];
                    player.play();
                } else {
                    console.log("End of playlist");
                }
            });
        </script>
    </body>
    </html>
    """, songs=song_urls)

@app.route('/music/<path:filename>')
def serve_music(filename):
    return send_from_directory(MUSIC_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
