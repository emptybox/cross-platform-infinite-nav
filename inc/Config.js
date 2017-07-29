function Config(){
	app = {};
	
	app.appWidth = Ti.Platform.displayCaps.getPlatformWidth();
	app.appHeight = Ti.Platform.displayCaps.getPlatformHeight();

	app.headerHeight = app.appHeight/12;
	app.version = '0.0.1';
	Ti.API.info('appWidth:' + app.appWidth);
	Ti.API.info('appHeight:' + app.appHeight);
	app.appfont = 'Helvetica Neue';
	app.osname = Ti.Platform.getOsname();
	
	app.appcolor = '#222';
	
	app.windowclass = {
		duration:300,	
		leftpos:-app.appWidth/2,
		backBtn_in:8,
		backBtn_out_left:-app.appWidth/4,
		backBtn_out_right:app.appWidth*0.9
	};
	
	app.fn = {};
	
	
	app.fn.isset = function(_val){
	    if(_val != undefined && _val != null && _val != '')
	    {
	        return true;
	    }else
	    {
	        return false;
	    }
	};
	
	return app;
}
module.exports = Config;