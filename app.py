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
    # query = urllib.quote(search)

    results = wikipedia.search('"' + search + '"', results=5, suggestion= 0)
    resArray = []
    d = {}

    for x in range(0,4):

        title = '"' + results[x] + '"'
        article = wikipedia.page(title)
        content = article.content
        summary = wikipedia.summary(title, sentences = 10)
        link = article.links[0]
        html = article.html()
        # image = article.images[1]
        text = content.split("==")
        headers = []
        # print text
        # for n in range(0,len(text) - 1):
        #     if (n % 2 == 0):
        #         # i = 0
        #         # headers[i] = text[n]
        #         # i = i + 1
        #         print text[n]
        #         d["content"] = text[n]
        #     #     d["headers"] = text[n]
        #     # else:
        #     #     d["content"] = text[n]
        #
        # # d["image"] = image

        d["summary"] = summary
        d["title"] = title
        resArray.append(d)
        return resArray[x]

        print "******************************************"

    # class wikipedia.WikipediaPage(title= )

    # endPoint = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + query + '&redirects&prop=revisions&rvprop=content&format=json&formatversion=2&continue='
    # r = requests.get(endPoint)
    # result = jsonify(r.json())
    # for x in secondQuery:
    # print content

    # print resArray
    # return jsonify(resArray)
    return "done!"

if __name__ == "__main__":
    app.run(debug = True)
