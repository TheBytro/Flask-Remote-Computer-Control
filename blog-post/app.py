"""
Khymari Sandy
"""
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

def console_print_hi():
    """Will print Hi to the console"""
    print("Hi")

def open_steam():
    """Will open steam"""
    subprocess.call([r'C:\Program Files (x86)\Steam\steam.exe'])

def open_borderlands():
    """Will open Borderlands 3"""
    subprocess.call([r'B:\Games\Steam\steamapps\common\Borderlands '
                     r'3\OakGame\Binaries\Win64\Borderlands3.exe'])

def open_cs():
    """Will open CS2"""
    subprocess.call([r'S:\Games\Steam\steamapps\common\Counter-'
                     r'Strike Global Offensive\game\bin\win64\cs2.exe'])

def open_gta():
    """Will open gta 5"""
    subprocess.call([r'S:\Games\Steam\steamapps\common\Grand Theft Auto V\GTAVLauncher.exe'])


def type_letter(letter):
    """Will type a given letter on the computer"""
    pyautogui.write(letter, interval=0.1)


def type_enter():
    """Will type enter on the computer"""
    pyautogui.press('enter')


def type_backspace():
    """Will type backspace on the computer"""
    pyautogui.press('backspace')


if __name__ == '__main__':
    print("obtaining ip address...")
    try:
        name = socket.gethostname()
        host = socket.gethostbyname(name)
        print(host)
        app.run(host='192.168.0.129', port=5000, debug=True)
    except socket.error:
        print("Failed to get IP address")
