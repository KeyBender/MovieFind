# MovieFind

MovieFind is a project I created with the intention to make finding movies on streaming services much easier. In the age of streaming services, people have multiple streaming subscriptions. MovieFind allows users to search movies/tv-shows and have links to the appropiate streaming service.

## Technologies

Written in Python (Flask) and JavaScript (React)

## How To Run

1. clone the project
```
git clone https://github.com/KeyBender/MovieFind.git
```
2. install [Python 3.10.5](https://www.python.org/downloads/release/python-3105) or higher
3. install [pip](https://pypi.org/project/pip/)
4. install [node](https://nodejs.org/en/download/)
5. go to [watchmode](https://api.watchmode.com/) and create an account to get your own api key
6. create a .env file in the backend directory. (Moviefind/backend/.env)
7. copy and paste your api key in the .env file (YOUR_API_KEY="the api key associated with your account")
8. install pipenv
```
pip install pipenv
```
9. go to the backend folder
```
cd backend
```
10. create virtual enviroment and install needed packages
```
pipenv shell
pipenv install
```
11. run backend
```
python server.py
```
12. go to client folder
```
cd ../client
```
13. install needed packages
```
npm install
```
14. run React app
```
npm start
```

## Future Plans
Implement user profiles where users can save films with an up to-date list of providing streaming services