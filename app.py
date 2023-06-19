from flask import Flask
from views import main_views, shin_views, yoon_views, kim_views, seo_views


def create_app():
    app = Flask(__name__)
    app.register_blueprint(main_views.bp)
    app.register_blueprint(shin_views.bp)
    app.register_blueprint(yoon_views.bp)
    app.register_blueprint(kim_views.bp)
    app.register_blueprint(seo_views.bp)

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=8888, debug=True, threaded=True, use_reloader=True)
