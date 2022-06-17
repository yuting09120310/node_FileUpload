var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const formidable = require("formidable");
const path = require('path')

router.post('/upload',function (req, res, next) {
    dealUpload(req,res);
})

function dealUpload(req,res){
  var form = new formidable.IncomingForm();
  
  const absolutePath = 'D:/files/';

  form.uploadDir = absolutePath;

  if(!fs.existsSync(absolutePath)){
    fs.mkdirSync(absolutePath);
  }

  form.parse(req,function(err,fields,files){
    if(err) throw err;

    let oldFilename = files.up_file.originalFilename;

    // 重新命名上傳的檔案
    fs.rename(files.up_file.filepath, form.uploadDir + oldFilename,err=>{
      if(err) {
        console.log("重新命名失敗");
        console.log(err);
      }else{
        console.log("重新命名成功!");
      }
    })
   
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
    res.write('<meta charset="UTF-8" />');
    res.end("<h1>上傳結束</h1>");
  })
}

console.log("測試看看");
module.exports = router;

