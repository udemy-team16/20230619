from flask import Blueprint
from flask import render_template

bp = Blueprint("yoon", __name__, url_prefix="/yoon")


@bp.route("/1", methods=["GET"])
def project1():
    return render_template("yoon/1.html")


@bp.route("/2", methods=["GET"])
def project2():
    return render_template("yoon/2.html")


@bp.route("/3", methods=["GET"])
def project3():
    return render_template("yoon/3.html")


@bp.route("/4", methods=["GET"])
def project4():
    return render_template("yoon/4.html")
