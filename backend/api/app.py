from flask import Flask, render_template, url_for, request
from joblib import load
from transformers import pipeline

app = Flask(__name__)

sentimentAnalysis = pipeline("sentiment-analysis")

@app.route('/factCheck', methods=['POST'])
def factCheck():
    if request.method == 'POST':
        clf = load('clf.joblib')
        url = request.form['url']
        prediction = clf.predict_proba([url])
        res = sentimentAnalysis(url)[0]
        return {
          "prediction": prediction,
          "label": res['label'], 
          "score": res['score']
         }


if __name__ == '__main__':
    app.run(debug=True)
