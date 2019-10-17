const express = require("express");

const bodyParser = require("body-parser");

const app = express();

let items = [];

let workItem = [];


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/",function(req,res){
	let today = new Date();
	
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	let day = today.toLocaleDateString("en-US", options);

	res.render("lists" , {listTitle: day, newListItems: items});
});

app.post("/",function(req,res){

	if(req.body.list === "Work List"){
		let item = req.body.newItem;
		workItem.push(item);
		res.redirect("/work");
	} else{
		items.push(item);
		res.redirect("/");
	}

	 item = req.body.newItem;

	 items.push(item);

	res.redirect("/");
});

app.get("/work", function(req,res){
	res.render("lists", {listTitle: "Work List", newListItems: workItem });
});






app.listen(3000, function(){
	console.log("Server is running on port 3000");
});




