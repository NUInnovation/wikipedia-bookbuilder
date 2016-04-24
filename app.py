from flask import Flask, jsonify, render_template, request
import requests
import urllib
import wikipedia
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def search():
    search = request.args.get('searchQuery')
    query = urllib.quote(search)
    secondQuery = wikipedia.search('"' + search + '"', results=5, suggestion= 0)
    endPoint = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + query + '&redirects&prop=revisions&rvprop=content&format=json&formatversion=2&continue='
    r = requests.get(endPoint)
    result = jsonify(r.json())
    # for x in secondQuery:
    return secondQuery[2]

if __name__ == "__main__":
    app.run(debug = True)
