from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import  relationship


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
    __tablename__ = "restaurant_table"
    id = db.Column(db.Integer, primary_key=True)
    rest_name = db.Column(db.String(120), unique=True, nullable=False)
    rest_address = db.Column(db.String(80), unique=False, nullable=False)
    rest_image = db.Column(db.String(300), unique=False, nullable=False)
    review_table = relationship("Review")
    
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
        
class Review(db.Model):
    __tablename__ = "review_table"
    id = db.Column(db.Integer, primary_key=True)
    rest_name = db.Column(db.String(120), unique=True, nullable=False)
    review = db.Column(db.String(300), unique=False, nullable=False)
    rating = db.Column(db.String(300), unique=False, nullable=False)
    rest_id = Column(Integer, ForeignKey("restaurant_table.id"))
    
    def __repr__(self):
        return f'<Restaurant {self.rest_name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "rest_name": self.rest_name,
            "review": self.review,
            "rating": self.rating,
            "rest_id": self.rest_id,
            
            # do not serialize the password, its a security breach
        } 
        
