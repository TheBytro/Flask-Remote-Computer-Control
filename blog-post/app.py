"""
Khymari Sandy
"""

import os
import socket
import subprocess
import pyautogui
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def index():
    """Will render the homepage"""
    return render_template("index.html")


@app.route('/open_apps')
def open_apps():
    """Will render the app launcher page"""
    output = ""

    for file in os.listdir("./shortcuts"):
        if file.endswith(".lnk"):
            output += f'<button class="shortcut-button" type="button">{file[:-4]}</button>'
    if output != "":
        return render_template('app_launcher.html', output=output)
    else:
        return render_template('app_launcher.html')

@app.route('/about')
def about():
    """Will render the about page."""
    return render_template('about.html')


@app.route('/typing')
def typing():
    """Will render the typing page"""
    return render_template('keyboard.html')


@app.route('/<FUNCTION>')
def command(FUNCTION=None):
    """Will run any of the function defined in this file"""
    exec(FUNCTION)
    return ""

#region Keyboard
def type_letter(letter):
    """Will type a given letter on the computer"""
    pyautogui.write(letter, interval=0)


def press_input(inpt):
    """Will press input on the computer"""
    pyautogui.press(inpt)

def type_slash(x):
    """Will type a slash on the computer"""
    if x == "f":
        pyautogui.write("/")
    elif x == "b":
        pyautogui.write("\\")


def type_question_pound(x):
    """Will type a question mark or the pound key on the computer"""
    if x == "q":
        pyautogui.write("?")
    elif x == "p":
        pyautogui.press("#")
#endregion Keyboard

#region App
def launch_app(app):
    """Will launch a given app"""
    print(f"Launching {app}")
    os.system(f".\\shortcuts\\{app}.lnk")
#endregion App


def main():
    """What will be run"""
    print("obtaining ip address...")
    try:
        name = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        name.connect(("8.8.8.8", 80))
        host = name.getsockname()[0]
        print(host)
        app.run(host=host, port=5000, debug=True)
    except socket.error:
        print("Failed to get IP address")


if __name__ == '__main__':
    main()
