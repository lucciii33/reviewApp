from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        
class Restaurant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rest_name = db.Column(db.String(120), unique=True, nullable=False)
    rest_address = db.Column(db.String(80), unique=False, nullable=False)
    rest_image = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<Restaurant {self.rest_name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "rest_name": self.rest_name,
            "rest_address": self.rest_address,
            "rest_image": self.rest_image,
            
            # do not serialize the password, its a security breach
        } 