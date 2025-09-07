from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS # CORS for handling Cross-Origin Resource Sharing
import pickle 

# Create a Flask application instance
app = Flask(__name__)
CORS(app)

# Enable CORS for all routes, allowing requests from any origin
# CORS(app,resources={r"/*":{"origins":"*"}})


loan_prediction = pickle.load(open('loan_prediction.pkl', 'rb'))

# Define a route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        query_df = pd.DataFrame([data])
        print(query_df)
        prediction = int(loan_prediction.predict(query_df)[0])
        print(prediction)
        return jsonify({'Loan_Approved': prediction})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True, port=5000)