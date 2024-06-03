from functions import *

app = Flask(__name__) 
CORS(app)

@app.route('/', methods=['GET']) 
def helloworld(): 
    if request.method == 'GET': 
        data = {"response": APP_NAME+" Backend Running!"}
        console.log(data, log_locals=True) 
        return jsonify(data), 200
    
if __name__ == '__main__': 
	app.run(debug=True)