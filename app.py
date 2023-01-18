from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/fora")
def invite():
    return redirect("https://discord.com/api/oauth2/authorize?client_id=891773139200139354&permissions=414464628800&scope=bot%20applications.commands")

if __name__ == "__main__":
    app.debug = False
    app.run()