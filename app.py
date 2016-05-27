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
    results = wikipedia.search('"' + search + '"', results=5, suggestion= 0)
    resArray = []
    d = {}
    for x in range(0,4):
        d = {}
        title = '"' + results[x] + '"'
        article = wikipedia.page(title)
        content = article.content
        summary = wikipedia.summary(title, sentences = 3)
        link = article.links[0]
        html = article.html()
        # image = article.images[1]
        text = content.split("==")
        correctedTitle = title.replace('\"','')
        d["title"] = correctedTitle
        d["summary"] = summary

        sections = []
        s = {}
        for n in range(0,len(text)):
            if (n % 2 != 0):
                correctedHeaders = text[n].replace("=", "")
                s["header"] = correctedHeaders

            else:
                # paragraphs = text[n].split("\n")
                # for y in paragraphs:
                #     if (y != ""):
                #         s["content"] = paragraphs
                correctedContent = text[n].replace("=", "")
                s["content"] = correctedContent
                sections.append(s)
                s = {}

        # d["image"] = image
        d["sections"] = sections

        resArray.append(d)

    return jsonify(articles = resArray)

if __name__ == "__main__":
    app.run(debug = True)
