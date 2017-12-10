# HPDF-task1
This project is the task performed for the Hausra under fellowship  program. In this project, I have used NodeJs-Express Framework in order to perform the specified tasks,which are described below:
### Sub-tasks
Here are the following tasks which I have performed:
* A simple hello-world at http://localhost:8080/ that displays a simple string like "Hello World - Akash".
* A route has been added,i.e., http://localhost:8080/authors , which:
  1. fetches a list of authors from a request to
https://jsonplaceholder.typicode.com/users
  2. fetches a list of posts from a request to
https://jsonplaceholder.typicode.com/posts
  3. Respond with only a list of authors and the count of their posts (a newline for
each author)
* A route has been added,i.e, http://localhost:8080/setcookie, to set a simple cookie ( if it has not already been set ) with the following values:
name=Akash and age=21.
* A route has been added,i.e., http://localhost:8080/getcookies ,to fetch the set cookie and display
the stored key-values in it.
* A deny requests to our http://localhost:8080/robots.txt page has been setup. 
* Now one can render an HTML page at http://localhost:8080/html and an image at
http://localhost:8080/image .
* A text box at http://localhost:8080/input which sends the data as POST to
any endpoint of your choice. This endpoint should log the received the received to
stdout .

### Note
Please note that http://localhost:8080/ is just an example, you can run the express web-server at the default ports on your local machine.
