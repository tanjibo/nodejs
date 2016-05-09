//来源：nqdeng.github.io
var http=require('fs');

//复制文件
function copy(src,dst){
	//fs.readFileSync 读取文件
 fs.writeFileSync(dst,fs.readFileSync(src));
}