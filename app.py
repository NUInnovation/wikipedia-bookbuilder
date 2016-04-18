from flask import Flask, jsonify, render_template, request
import requests
import urllib
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def search():
    search = request.args.get('searchQuery')
    query = urllib.quote(search)
    endPoint = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + query + '&redirects&contentformat=text/css&prop=revisions&rvprop=content&format=json'
    r = requests.get(endPoint)
    result = jsonify(r.json())
    return result

if __name__ == "__main__":
    app.run(debug = True)
