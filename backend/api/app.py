from flask import Flask, render_template, url_for, request
from joblib import load

app = Flask(__name__)


@app.route('/factCheck', methods=['POST'])
def factCheck():
    if request.method == 'POST':
        clf = load('clf.joblib')
        url = request.form['url']
        prediction = clf.predict_proba([url])


if __name__ == '__main__':
    app.run(debug=True)
