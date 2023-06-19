from flask import Blueprint
from flask import render_template

bp = Blueprint("shin", __name__, url_prefix="/shin")


@bp.route("/1", methods=["GET"])
def project1():
    return render_template("shin/1.html")


@bp.route("/2", methods=["GET"])
def project2():
    return render_template("shin/2.html")


@bp.route("/3", methods=["GET"])
def project3():
    return render_template("shin/3.html")


@bp.route("/4", methods=["GET"])
def project4():
    return render_template("shin/4.html")
