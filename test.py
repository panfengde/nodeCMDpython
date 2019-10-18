#!/usr/bin/python
# -*- coding: UTF-8 -*-

import sys
import os
import json

# print("-----模块内打印------")
# print('参数', sys.argv)
# print('脚本路径', os.path.abspath(os.path.dirname(__file__)))
path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'test.txt')

if len(sys.argv) > 1:
    path = sys.argv[1]
with open(path, 'w') as txt:
    # print('文本保存路径', path)
    txt.write(sys.argv[0])

print(json.dumps({'hello': 'go'}))
