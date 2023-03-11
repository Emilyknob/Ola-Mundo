import sys
import os
import pyautogui


def Criar_terminal():
    pyautogui.hotkey('ctrl', 'shift', "'")
    os.system('npm start')


Criar_terminal()