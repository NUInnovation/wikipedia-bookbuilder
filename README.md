# wikipedia-bookbuilder: WikiBookey
## Team Members
 - Shiqi Hu
 - Cindy Koh
 - Michael Martinez
 - Junjie Li
 
## Demo
Use this link to review our app: https://wikibookey.herokuapp.com/

## Description
The project aims to use Wikipedia as the key resource to build books that will focus on topics that a reader wants to read, as if the reader were to purchase a complete, coherent book from the bookstore.

In this project, we would like to build an interface that will allow users to interact with the content in Wikipedia. In our project, there will be two main functions – to be able to automatically produce the book for users, and allow users to customize their own books.

To automatically produce the book, a user would search the specific topic through the Wikibookey website, which will be linked to a related page on Wikipedia. Based on the content in Wikibookey, we will categorize the content by their title into the introduction, main text and conclusion. In the main text, we will use the Wiks APIs to link different parts to different chapters. To customize, after linking to Wikipedia, the user can click the content they want in Wikipedia and also tag those parts with different categories or different chapters. A user will also be able to add chapters or specific content to the book, and sort the content as they want.

After the user confirms the structure of the book, a PDF can be exported and downloaded so that the user can read the physical book. We want to keep the process simple yet provide more functions to allow users to customize a book of his or her choice.

In order to build the web application, we will use Ruby on Rails. Also, we will do some research to see if there are any other APIs we could use to assist us in implementing some functions similar to the Wikipedia search function.

## How it works
User could search a scentific topic on our website. Wikibookey would offer the matched wikipedia results to the user. In the result, Wikibookey showes the key words of each part in the wiki page as well as the relationship of each content.

By reading the keywords, user could choose the content they want and add them to their customized book. Wikibookey also provides some related wiki pages as "also see" for the users to offer addition resources. Besides, a book structure preview would be shown on the right sides. Finally, user could save the book as PDF and the exported book would be styled like a real book. And the book can also be printed.

## Technical
- Python-based Web Frameworks: Flask and Django
- Libraries for Web Scraping: BeautifulSoup, scrapy
- Libraries for PDF building: `xhtmltopdf` (Flask), `reportlab` (Django)
- APIs: MediaWiki and Wikidata Query Service
- May need to consider IP/copyright issues

## next step
1. Build the sketches
2. Start the paper prototype
3. Figure out the technical issues
4. First focus on the scientific book (such as plant/flowers)

## Installation and Setup
First you will have to clone the repository locally. Make sure you have `virtualenvwrapper` installed on your computer.
If you don't you can install it with
`pip install virtualenvwrapper`

Make a virtual environment for the project
`mkvirtualenv wiki`

Install all of the dependencies for the project
`pip install -r requirements.txt`

Use this command to fire up the server and run the application
`python app.py`
