//This code only works when adding or remove from views
//if a modal window or another window is open
//this code will need to be modified, which is possible
//Place this at your root level window or view
var Config = require('inc/Config');
var app = new Config();

	app.newchild = null;
	
var childArr = [];
var ChildView = require('ui/ChildView');

var appWin = Ti.UI.createWindow({
	fullscreen:true,
	width:app.appWidth,
	backgroundColor:'fff'
});

	//for testing only
	var btn = Ti.UI.createButton({
		title:'Show'
	});
		btn.addEventListener('click',function(){
			var child = new ChildView(app,'My First View');
			app.newchild = child;
			Ti.App.fireEvent('childhandler',{action:'add'});
		});
	
	
	//VIEW HANDLER
	Ti.App.addEventListener('childhandler',function(e){
		
		//action values can be: 'add' or 'remove'
		var actionType = e.action;
		
		
		
		if(actionType == 'add')
		{
			//conditional for adding a window
			appWin.add(app.newchild);
			if(childArr.length>0)
			{
				var lastChildIndex = childArr.length - 1;
				childArr[lastChildIndex].showHide('hide','left');
			}
			app.newchild.showHide('show','left');
			childArr.push(app.newchild);
			//Ti.API.info('childArr.length after add: ' + childArr.length);
			
			
		}else if(actionType == 'remove')
		{
			if(childArr.length>=1)
			{
				//animate out the last child if 
				var lastChildIndex = childArr.length - 1;
				childArr[lastChildIndex].showHide('hide','right');
				setTimeout(function(){
					appWin.remove(app.newchild);
				},300);
				
				//array just lost 1 index
				//length--
				childArr.splice(lastChildIndex,1);
				//Ti.API.info('childArr.length after removal: ' + childArr.length);
				if(childArr.length > 0)
				{
					var incomingChildIndex = childArr.length - 1;
					childArr[incomingChildIndex].showHide('show','right');
				}
				
				
			}
		}
	});
	
	appWin.add(btn);

appWin.open();
