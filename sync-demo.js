fs=require('fs');

//data=fs.readdirSync('./');
//console.log('data:',data);
//console.log('this comes after')

function phoneNumber(err,data){
    console.log('data:',data);
}
fs.readdir('./',phoneNumber);
console.log('this comes after');