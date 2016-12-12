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
(function($){
    $.fn.showLoader = function(options){
        // Set defaults
        var settings = $.extend({
            icon: "default",//default, gears, hourglass, ripple
            size: "medium",// small, medium, large
            fontStyle: null,
            onComplete: null
        }, options);

        var allowedIcons = ["default", "ripple", "gears", "hourglass"];
        var allowedSizes = ["small", "medium", "large"];
        return this.each(function(){
            $(this).append("<div class='show-loading-icon'></div>");

            // need to make sure parent has position relative
            if($(this).css("position") != "relative"){
                $(this).css("position", "relative");
            }

            var iconImage = settings.icon &&  allowedIcons.indexOf(settings.icon) != -1
                ? icon = settings.icon
                : "default";


            var sizeSize = settings.size &&  allowedSizes.indexOf(settings.size) != -1
                ? icon = settings.size
                : "medium";

            var iconUrl = "images/" + iconImage + "-" + sizeSize +  ".gif";

            $(this).find("div.show-loading-icon").css('background-image', 'url('+ iconUrl +')');



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
}(jQuery));
