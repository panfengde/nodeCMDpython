const cp = require('child_process');
const iconv = require('iconv-lite');
let arg1 = '美元';
let arg2 = '日元';
let path = 'F:\\数据处理项目\\web\\test\\node_python\\外部.txt';
cp.exec('python F:\\数据处理项目\\web\\test\\node_python\\test.py ' + path + ' ' + arg1 + ' ', {encoding: 'buffer'}, (err, stdout, stderr) => {
    if (stdout.length > 1) {

        console.log('you offer args:', iconv.decode(stdout, 'GBK'));
        console.log('stderr:', iconv.decode(stderr, 'GBK'));

        // let stdouts = stdout;
        console.log('-----', JSON.parse(iconv.decode(stdout, 'GBK'))['hello'])
    } else {
        console.log('you don\'t offer args');
    }
    if (err) {
        console.info('stderr : ' + iconv.decode(stderr, 'GBK'));
    }
});
// iconv.decode(stderr, 'GBK')