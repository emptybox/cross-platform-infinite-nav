function ChildHeaderView(_app,_titleTxt){
	var app = _app;
	
	var view = Ti.UI.createView({
		width:app.appWidth,
		height:app.appHeight/12 + 20,
		backgroundColor:app.blueColor,
		top:0
	});
	
		//main view title
		var lbl = Ti.UI.createLabel({
			height:view.height-20,
			width:app.appWidth - 80,
			font:(app.osname == 'iphone')?{fontSize:'18sp',fontFamily:app.appfont}:{fontSize:'22sp',fontFamily:app.appfont},
			color:'#fff',
			text:_titleTxt,
			
			opacity:1,
			//top:20,
			textAlign:'center',
			//bottom:0
		});
		
			
		
		//can be an image or text
		var backBtn = Ti.UI.createButton({
			//title:'Back',
			
			//backgroundImage:'none',
			left:10,
			height:app.appHeight/12-20,
			width:app.appHeight/12-20,
			//top:20,
			opacity:0,
			//color:'#222'
		});
		
			if(app.osname == 'iphone')
			{	
				lbl.bottom = 5;
				backBtn.bottom = 15;
				//lbl.left = app.appWidth*1.5;
				backBtn.image = app.imgdir + 'backBtn@2x.png';
				backBtn.backgroundImage = 'none';
			}else
			{
				backBtn.backgroundImage = app.imgdir + 'backBtn@2x.png';
			}
		
		var border = Ti.UI.createView({
			height:1,
			backgroundColor:'#ccc',
			width:app.appWidth,
			bottom:0
		});
		
	view.getBackBtn = function(){
		return backBtn;
	};
	
	view.getLbl = function(){
		return lbl;
	};
	
	
		view.add(lbl);
		view.add(backBtn);
		view.add(border);
	return view;
}
module.exports = ChildHeaderView;