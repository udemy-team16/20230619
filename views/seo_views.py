from flask import Blueprint
from flask import render_template

bp = Blueprint("seo", __name__, url_prefix="/seo")


@bp.route("/1", methods=["GET"])
def project1():
    return render_template("seo/1.html")


@bp.route("/2", methods=["GET"])
def project2():
    return render_template("seo/2.html")


@bp.route("/3", methods=["GET"])
def project3():
    return render_template("seo/3.html")


@bp.route("/4", methods=["GET"])
def project4():
    return render_template("seo/4.html")
