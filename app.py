from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import fitflow_moves

app =  Flask(__name__)

# mongo = PyMongo(app, url="mongodb://localhost:27017/fitflow")

@app.route('/')
def index():
    # moves = mongo.db.fitflow

    # three_moves = fitflow_moves.fitmoves()

    # moves.update({}, three_moves, upsert=True)

    # moves = mongo.db._fitflow.find_one()


    return render_template("index.html")


@app.route('/moves')
def fitmoves():

    # moves = mongo.db.fitflow

    # three_moves = fitflow_moves.fitmoves()

    # # moves.update({}, three_moves, upsert=True)

    return redirect("/about.html")


if __name__=="__main__":
    app.run(debug=True)