function ChildView(_app,_titleTxt){
	var app = _app;
	var ChildView = require('ui/ChildView');
	var ChildHeaderView = require('ui/ChildHeaderView');
	var header = new ChildHeaderView(app,_titleTxt);
	var lbl = header.getLbl();
	var backBtn = header.getBackBtn();
	
	var view = Ti.UI.createView({
		backgroundColor:'#efefef',
		top:0,
		left:app.appWidth,
		width:app.appWidth,
		height:app.appHeight
	});
	
		//overlay to give the transition some
		//depth and visual motion
		var hidingBg = Ti.UI.createView({
			top:app.appHeight/12,
			width:Ti.UI.FILL,
			height:Ti.UI.FILL,
			backgroundColor:'#000',
			opacity:0
		});
		
		//only for testing
		var btn = Ti.UI.createButton({
			title:'Add child'
		});
			btn.addEventListener('click',function(){
				
				//create new child
				var child = new ChildView(app,'My First View');
				
				//set new child to parent child holder for showing/hiding
				//when this view is shown/hidden
				app.newchild = child;
				
				//call app handler to add child to main view
				Ti.App.fireEvent('childhandler',{action:'add'});
			});
		
		
		
			backBtn.addEventListener('click',function(){
				//call app handler to remove child from main view
				Ti.App.fireEvent('childhandler',{action:'remove'});
			});
			
		
		//this container will hold your main content
		//to be passed into the addContent function
		//MAIN CONTENT GETS ADDED TO contentHolder
		var contentHolder = Ti.UI.createView({
			top:header.top + header.height,
			width:app.appWidth,
			height:Ti.UI.FILL
		});
		
		view.addContent = function(_content){
			contentHolder.add(_content);
		};
		
		//main transition function
		view.showHide = function(_type,_dir){
			if(_type == 'show')
			{
				if(_dir == 'left')
				{
					//view has been created and is moving from left
					//to right into the main view
					if(app.osname == 'iphone')
					{
						view.animate({
							duration:app.windowclass.duration,
							left:0
						});
						
					
						
						backBtn.animate({
							duration:app.windowclass.duration,
							left:app.windowclass.backBtn_in,
							opacity:1
						});
					}else
					{
						view.left = 0;
						lbl.opacity = 1;
						//lbl.left = 0;
						//backBtn.left = app.windowclass.backBtn_in;
						backBtn.opacity = 1;
					}
					
					
					
				}else if(_dir == 'right')
				{
					//view is coming back from the left
					//to right into the main view
					if(app.osname == 'iphone')
					{
						
						view.animate({
							duration:app.windowclass.duration,
							left:0
						});
						
						hidingBg.animate({
							duration:app.windowclass.duration,
							opacity:0
						},function(){
							view.remove(hidingBg);
						});
						
			
						
						backBtn.animate({
							duration:app.windowclass.duration,
							left:app.windowclass.backBtn_in,
							opacity:1
						});
					
					}else
					{
						
						view.left = 0;
						lbl.opacity = 1;
						//lbl.left = 0;
						//backBtn.left = app.windowclass.backBtn_in;
						backBtn.opacity = 1;
					}
				}
				
			}else if(_type == 'hide')
			{
				if(_dir == 'left')
				{
					//view has been created and is moving from right
					//to left out of the main view
					if(app.osname == 'iphone')
					{
						view.add(hidingBg);
						view.animate({
							duration:app.windowclass.duration,
							left:app.windowclass.leftpos
						});
						
						hidingBg.animate({
							duration:app.windowclass.duration,
							opacity:0.3
						});
						
						
						
						backBtn.animate({
							duration:app.windowclass.duration,
							left:app.windowclass.backBtn_out_left,
							opacity:0
						});
					
					}else
					{
						
						view.left = app.windowclass.leftpos;
						//lbl.opacity = 0;
						//lbl.left = -app.appWidth/2;
						//backBtn.left = app.windowclass.backBtn_out_left;
						//backBtn.opacity = 0;
					}
					
				}else if(_dir == 'right')
				{
					//view has been created and is moving from right
					//to left out of the main view
					if(app.osname == 'iphone')
					{
						view.animate({
							duration:app.windowclass.duration,
							left:app.appWidth
						});
						
						
						
						backBtn.animate({
							duration:app.windowclass.duration,
							left:app.windowclass.backBtn_out_right,
							opacity:0
						});
					
					}else
					{
						
						view.left = app.appWidth;
						//lbl.opacity = 0;
						//lbl.left = app.appWidth*1.5;
						//backBtn.left = app.windowclass.backBtn_out_right;
						//backBtn.opacity = 0;
					}
				}
				
			}
		};
		view.addEventListener('goback',function(){
			backBtn.fireEvent('click');
		});
		
		
		if(app.osname == 'iphone')
		{
			view.addEventListener('swipe',function(e){
				if(e.direction == 'right')
				{
					backBtn.fireEvent('click');
				}
			});
		}
		
			
		view.add(header);
			contentHolder.add(btn);
		view.add(contentHolder);
	
	return view;
	
}
module.exports = ChildView;
