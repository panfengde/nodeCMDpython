# nodeCMDpython
###nodejs中调用python脚本
1 获取参数s

2 设定运行目录

3 获取回传信息 
```
print(json.dumps({'hello': 'go'}))
python打印文本，这个文本将通过标准输出返回到nodejs中
nodejs获取这个文本后，序列化。从而获得信息：
```