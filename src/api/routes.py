"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Restaurant
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/rest', methods=['POST'])
def post_rest():
    body = request.get_json()
    rest_name = body['rest_name']
    rest_address = body['rest_address']
    rest_image = body['rest_image']
    rest_exist = Restaurant.query.filter_by(rest_name=rest_name).first()
    if rest_exist is not None:
        raise APIException("rest already exist", 400)
    restaurant = Restaurant(rest_name=rest_name, rest_address=rest_address, rest_image=rest_image,  )
    db.session.add(restaurant)
    db.session.commit()

    

    return jsonify(restaurant.serialize()), 200


@api.route('/rest', methods=['GET'])
def get_rests():
    
    rest_query = Restaurant.query.all()
    all_rests = list(map(lambda x: x.serialize(), rest_query))
    
    return jsonify(all_rests), 200


@api.route('/rest/review', methods=['POST'])
def post_review():
    body = request.get_json()
    rest_name = body['rest_name']
    review = body['review']
    rating = body['rating']
    review_exist = Review.query.filter_by(rest_name=rest_name).first()
    if rest_exist is not None:
        raise APIException("rest already exist", 400)
    review = Review(rest_name=rest_name, review=review, rating=rating,  )
    db.session.add(review)
    db.session.commit()

    

    return jsonify(review.serialize()), 200


@api.route('/rest/review', methods=['GET'])
def get_review():
    
    review_query = Review.query.all()
    all_review = list(map(lambda x: x.serialize(), review_query))
    
    return jsonify(all_review), 200

@api.route('/rest/review/<int:id>', methods=['GET'])
def get_review_id(id):
    # id = get_jwt_identity()
    review_query = Review.query.filter_by(id)

    
    return jsonify(review_query.serialize()), 200

@api.route('/rest/review/<int:id>', methods=['POST'])
def post_review_id():
    body = request.json

    review_id = Review(rest_name=body['rest_name'], review=body['review'],rating=body['rating'])

    db.session.add(review_id)
    db.session.commit()

    review = Review.query.filter_by(rest_id = id)
    all_reviews= list(map(lambda x: x.serialize(), review))
    

    return jsonify(all_reviews), 200