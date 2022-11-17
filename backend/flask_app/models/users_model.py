from flask_app.config.mysqlconnection import DATABASE, connectToMySQL
from flask_app import bcrypt
from flask_app.models import movies_model

class User:
    def __init__(self, data) -> None:
        self.id=data['id']
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.email=data['email']
        self.password=data['password']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.liked_movies = []

    @classmethod
    def find_by_email(cls, data):
        query = "SELECT * FROM users LEFT JOIN movies ON movies.user_id=users.id WHERE users.email=%(email)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
           user = cls(results[0])
           if bcrypt.check_password_hash(user.password, data['password']):
            for data in results:
                    movie_data = {
                        **data,
                        'id' : data['movies.id'],
                        'name' : data['movies.name'],
                        'img' : data['movies.img'],
                        'api_id' : data['movies.api_id'],
                        'created_at' : data['movies.created_at'],
                        'updated_at' : data['movies.updated_at']
                    }
                    user.liked_movies.append(movies_model.Movies(movie_data))
            else:
                return False
        else:
            return False
        return user

    @classmethod
    def find_by_id(cls, data):
        query = "SELECT * FROM users LEFT JOIN movies ON movies.user_id=users.id WHERE users.id=%(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            user = cls(results[0])
            for data in results:
                movie_data = {
                    **data,
                    'id' : data['movies.id'],
                    'name' : data['movies.name'],
                    'img' : data['movies.img'],
                    'api_id' : data['movies.api_id'],
                    'created_at' : data['movies.created_at'],
                    'updated_at' : data['movies.updated_at']
                }
                user.liked_movies.append(movies_model.Movies(movie_data))
        else:
            return False
        return user
    
    @classmethod
    def create(cls, data):
        user_data = {
            **data,
            'password' : bcrypt.generate_password_hash(data['password'])
        }
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query, user_data)

    def format_response(self):
        response = vars(self)
        response.pop('password')
        response.pop('created_at')
        response.pop('updated_at')
        
        return response
