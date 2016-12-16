/**
* REFERENCE
* @param {number} clientId - the client id
* @param {String} clientName - the name of the client
* @return {String} someString - string info
* @see function/class - a reference to a function, class, external url, etc
* @fires target:event
* @listens target:event
* @tutorial - link to tutorial
* @link - link to another item
*/

    var SimpleLoader = function () {
	       this.allowedSizes = ["small", "medium", "large"];
           this.allowedIcons = ["default", "ripple", "gears", "hourglass"];
    };

    /**
    * Initializer for SimpleLoader
    */
    SimpleLoader.prototype.Init = function () {
        
    };

    /**
    * Append a div with class "show-loading-icon" to the target
    *   container div. This div will be used as an overlay.
    * @param target element to append div overlay to
    */
    SimpleLoader.prototype.AppendLoadingIconDiv = function($target){
        $target.append("<div class='show-loading-icon'></div>");
    };

    /**
    * Checks if div has postion relative.
    * @param target element to check postion relative
    */
    SimpleLoader.prototype.CheckForRelativePosition = function($target){
        var isRelative = false;
        if($target.css("position") == "relative"){
            isRelative = true;
        }

        return isRelative;
    };

    /**
    * Add relative position to target element.
    * @param target element to add postion relative
    */
    SimpleLoader.prototype.AddRelativePosition = function($target){
        var isRelative = SimpleLoaderApp.CheckForRelativePosition($target);

        // need to make sure parent has position relative
        if(!isRelative){
            $target.css("position", "relative");
        }
    };

    /**
    * Get the Icon Image for the SimpleLoader
    * @param icon passed in by the user
    */
    SimpleLoader.prototype.GetIconImage = function(settingsIcon){
        // if the user passed in a allowed icon, we use it, else we go with the
        // default icon
        var icon = settingsIcon && SimpleLoaderApp.allowedIcons.indexOf(settingsIcon) != -1
            ? icon = settingsIcon
            : "default";

        return icon;
    };

    /**
    * Get the Icon Size for the SimpleLoader
    * @param icon size passed in by the user
    */
    SimpleLoader.prototype.GetIconSize = function(settingsSize){
        // if the user passed in a allowed icon size, we use it, else we go with the
        // default icon sizeSize
        var iconSize = settingsSize &&  SimpleLoaderApp.allowedSizes.indexOf(settingsSize) != -1
            ? icon = settingsSize
            : "medium";

        return iconSize;
    };

    /**
    * Build the url for the icon
    * @param icon image
    * @param icon size image
    */
    SimpleLoader.prototype.GetIconUrl = function(iconImage, iconSize){
        var iconUrl = "images/" + iconImage + "-" + iconSize +  ".gif";

        return iconUrl;
    };

    /**
    * Display the simple loader.
    * @param $target - element to show loading icon on
    * @param iconUrl - url for the loading icon
    */
    SimpleLoader.prototype.ShowSimpleLoader = function($target, iconUrl){
        $target.find("div.show-loading-icon").css('background-image', 'url('+ iconUrl +')');
    };

    // Create SimpleLoaderApp
    var SimpleLoaderApp =  new SimpleLoader();
    SimpleLoaderApp.Init();

    $.fn.showLoader = function(options){
        // Set defaults
        var settings = $.extend({
            icon: "default",//default, gears, hourglass, ripple
            size: "medium",// small, medium, large
            fontStyle: null,
            onComplete: null
        }, options);

        return this.each(function(){
            SimpleLoaderApp.AppendLoadingIconDiv($(this));

            SimpleLoaderApp.AddRelativePosition($(this));

            var iconImage = SimpleLoaderApp.GetIconImage(settings.icon);

            var iconSize = SimpleLoaderApp.GetIconSize(settings.size);

            var iconUrl = SimpleLoaderApp.GetIconUrl(iconImage, iconSize);

            SimpleLoaderApp.ShowSimpleLoader($(this), iconUrl);

        });


    }

    $.fn.hideLoader = function(){
        return this.each(function(){
            var $loadingIcon = $(this).find("div.show-loading-icon");
            if($loadingIcon){
                $loadingIcon.remove();
            }
        });
    }
