# -*- coding: UTF-8 -*-

import os
import sys
from os import listdir

files = listdir(".")
js_files = filter(lambda x: x.endswith('.js'), files)
js_string = ""

for js in js_files:
	js_string += (js + " ")

os.system("jsdoc " + js_string)
os.system("cr " + js_string + " > metriki.txt")
os.system("jshint " + js_string + " > stat_analysis.txt")