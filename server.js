var express = require('express');
var db = require('./db');
const mysql = require('mysql');

const app = express();
const parser = require('body-parser');
app.use(parser.json());


app.post('/saveLog',function(req,res){
	let params =[req.body.type, req.body.amount]
	let queryStr = 'INSERT INTO logs (type,amount) VAlUES (?,?)';
	let total ;	
	db.query(queryStr,params,function(err,results){
			if (err) throw err 
			result= results
	})
	
	let queryStr2= 'SELECT SUM(amount) FROM logs';
	db.query(queryStr2,function(err,results){
		if (err) throw err
	    let x = (JSON.stringify(results)).split(':')[1];
		x=x.slice(0,-2)
		res.send(x)
	})


})

app.get('/getLog/:type/:month', function(req,res){
	let months={JAN:'01',FEB:'02',MAR:'03',APR:'04',MAY:'05',JUN:'06',JUL:'07',AUG:'08',SEP:'09',OCT:'10',NOV:'11',DEC:'12'}
	console.log(req.params.type,req.params.month)
	let type = req.params.type;
	let month = months[req.params.month];
	let queryStr = mysql.format('SELECT amount from logs WHERE type = ? AND MONTH(created_at)=?',[type,month])

	
	db.query(queryStr,function(err,results){
		if(err) throw err
		console.log(results)
		res.send(results)
	})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${ PORT }`);
});
