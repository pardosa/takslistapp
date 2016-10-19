var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();

var db = mongojs('mongodb://sipipin:asdfasdf@ds027295.mlab.com:27295/mytasklists', ['task'])

router.get('/tasks', function(req, res, next){
		db.task.find(function(err, tasks){
			if(err){
				res.send(err);
			}
			res.json(tasks);
		});
	});
	
router.get('/task/:id', function(req, res, next){
		db.task.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	});
	
	
router.post('/task', function(req, res, next){
	var task = req.body;
	if(!task.title || !(task.isDone + '')){
		res.status(400);
		res.json({'error': 'Bad Data'});
		}
	else{
		db.task.save(task, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
			}); 
		}
	});
	
router.delete('/task/:id', function(req, res, next){
		db.task.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	});
	
router.put('/task/:id', function(req, res, next){
	var task = req.body;
	
	var updTask = {};
	
	if(task.isDone){
		updTask.isDone = task.isDone;
		}
	if(task.title){
		updTask.title = task.title;
		}
	
	if(!updTask){
		res.status(400);
		res.json({'error': 'Bad Data'});
	}else{
		db.task.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	}
});
	
module.exports = router;
