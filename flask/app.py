from functions import *

app = Flask(__name__) 
CORS(app)

UPLOADS_FOLDER = "uploads"
os.makedirs(UPLOADS_FOLDER, exist_ok=True)

@app.route('/', methods=['GET']) 
def helloworld(): 
    if request.method == 'GET': 
        data = {"response": f"{APP_NAME} Backend Running"}
        console.log(data, log_locals=True) 
        return jsonify(data), 200
    

@app.route("/caption-image", methods=["POST"])
def captionImage():
    if "file" not in request.files:
        return jsonify({'message': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400
    
    file_path = os.path.join(UPLOADS_FOLDER, file.filename)
    file.save(file_path)
    print(file_path)
    try:

        client = Client("https://jainambarbhaya1509-blip-image-captioning-base.hf.space")
        
        result = client.predict(file_path, api_name="/predict")
        
        print("Generated Caption:", result)

        return jsonify({'message': result}), 200
    
    except Exception as e:
        print(str(e))
        return jsonify({'message': 'Failed to process image', 'error': str(e)}), 500
        
    
if __name__ == '__main__': 
	app.run(debug=True)
    