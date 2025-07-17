import os
import mimetypes
from base64 import b64encode

def handler(request):
    try:
        filename = request.query.get('file')
        if not filename:
            return {
                "statusCode": 400,
                "body": "Missing file parameter"
            }

        current_dir = os.path.dirname(__file__)
        file_path = os.path.join(current_dir, '..', 'music', filename)

        if not os.path.isfile(file_path):
            return {
                "statusCode": 404,
                "body": "File not found"
            }

        with open(file_path, 'rb') as f:
            content = f.read()

        mime_type, _ = mimetypes.guess_type(file_path)
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": mime_type or "application/octet-stream",
                "Content-Disposition": f'inline; filename="{filename}"'
            },
            "isBase64Encoded": True,
            "body": b64encode(content).decode('utf-8')
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": str(e)
        }
