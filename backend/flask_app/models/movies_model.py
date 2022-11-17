from flask_app.config.mysqlconnection import DATABASE, connectToMySQL

class Movies:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.img = data['img']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.api_id = data['api_id']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO moves (name, img, api_id, user_id, created_at, updated_at) VALUES (%(name)s, %(img)s, %(api_id)s, %(user_id)s, NOW(), NOW());"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = "DELETE FROM movies WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query, id)

    def format_response(self):
        response = vars(self)
        response.pop('created_at')
        response.pop('updated_at')
        return response