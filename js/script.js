/* http://marco.localhost/jquery/Loader/ */

/**
* @constructor for Loader_class
*/
var Loader_class = function () {
	this.field = "something";
};

/**
* Initializes the JavaScript_class
*/
Loader_class.prototype.Init = function () {
	this.CallSimpleLoader();

	$(".display-loader").click(function(){
		$(".some-content").showLoader({
			icon: "gears",// default, gears, hourglass, ripple
			size: "medium"// small, medium, large
		});
	});

	$(".hide-loader").click(function(){
		$(".some-content").hideLoader();
	});

};

Loader_class.prototype.CallSimpleLoader = function () {

};

var LoaderApp =  new Loader_class();
LoaderApp.Init();
