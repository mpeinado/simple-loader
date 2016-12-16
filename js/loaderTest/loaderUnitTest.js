QUnit.test("CheckForRelativePositionTest", function(assert) {
    // Test for when element is relative
    var $fixture = $("#qunit-fixture");

    $fixture.append("<div class='relative-position'></div>");
    var $relativeElm = $($fixture.find(".relative-position"));
    $relativeElm.css("position", "relative");

    var isRelativePosition = SimpleLoaderApp.CheckForRelativePosition($relativeElm);

    assert.equal(isRelativePosition, true, "Element is relative.");

    // Test for when element is not relative
    $fixture.append("<div class='not-relative-position'></div>");
    var $notRelativeElm = $($fixture.find(".not-relative-position"));

    var isNotRelativePosition = SimpleLoaderApp.CheckForRelativePosition($notRelativeElm);

    assert.equal(isNotRelativePosition, false, "Element is NOT relative.");
});

QUnit.test("AppendLoadingIconDivTest", function(assert) {
    var $fixture = $("#qunit-fixture");

    SimpleLoaderApp.AppendLoadingIconDiv($fixture);

    assert.equal($( "div.show-loading-icon", $fixture ).length, 1, "div.show-loading-icon added successfully!" );
});

QUnit.test("AddRelativePositionTest", function(assert) {
    var $fixture = $("#qunit-fixture");

    $fixture.append("<div class='test-relative-position'></div>");

    var $targetElm = $( "div.test-relative-position", $fixture );

    SimpleLoaderApp.AddRelativePosition($targetElm);

    assert.equal($( "div.test-relative-position", $fixture ).css("position"), "relative", "Relative position was set" );
});

QUnit.test("GetIconImageTest", function(assert) {
    //["default", "ripple", "gears", "hourglass"]

    var emptyVal = SimpleLoaderApp.GetIconImage();
    assert.equal(emptyVal, "default", "Default Loader Icon from missing param");

    var invalidVal = SimpleLoaderApp.GetIconImage("foo");
    assert.equal(invalidVal, "default", "Default Loader Icon from invalidVal param");

    var defaultVal = SimpleLoaderApp.GetIconImage("default");
    assert.equal(defaultVal, "default", "Default Loader Icon");

    var rippleVal = SimpleLoaderApp.GetIconImage("ripple");
    assert.equal(rippleVal, "ripple", "Ripple Loader Icon");

    var gearsVal = SimpleLoaderApp.GetIconImage("gears");
    assert.equal(gearsVal, "gears", "Gears Loader Icon");

    var hourglassVal = SimpleLoaderApp.GetIconImage("hourglass");
    assert.equal(hourglassVal, "hourglass", "Hourglass Loader Icon");
});

QUnit.test("GetIconSizeTest", function(assert) {
    //"small", "medium", "large"]

    var emptyVal = SimpleLoaderApp.GetIconSize();
    assert.equal(emptyVal, "medium", "Default medium size from missing param.");

    var invalidVal = SimpleLoaderApp.GetIconSize("foo");
    assert.equal(invalidVal, "medium", "Default medium size from invalid param.");

    var smallVal = SimpleLoaderApp.GetIconSize("small");
    assert.equal(smallVal, "small", "Small size from missing param.");

    var mediumVal = SimpleLoaderApp.GetIconSize("medium");
    assert.equal(mediumVal, "medium", "Medium size from missing param.");

    var largeVal = SimpleLoaderApp.GetIconSize("large");
    assert.equal(largeVal, "large", "Large size from missing param.");

});

QUnit.test("GetIconUrlTest", function(assert) {
    //["default", "ripple", "gears", "hourglass"]
    //"small", "medium", "large"]

    //small
    var defaultSmallVal = SimpleLoaderApp.GetIconUrl("default", "small");
    assert.equal(defaultSmallVal, "images/default-small.gif", defaultSmallVal);

    var defaultmediumlVal = SimpleLoaderApp.GetIconUrl("default", "medium");
    assert.equal(defaultmediumlVal, "images/default-medium.gif", defaultmediumlVal);

    var defaultLargeVal = SimpleLoaderApp.GetIconUrl("default", "large");
    assert.equal(defaultLargeVal, "images/default-large.gif", defaultLargeVal);

    // ------ ripple
    var rippleSmallVal = SimpleLoaderApp.GetIconUrl("ripple", "small");
    assert.equal(rippleSmallVal, "images/ripple-small.gif", rippleSmallVal);

    var rippleMediumlVal = SimpleLoaderApp.GetIconUrl("ripple", "medium");
    assert.equal(rippleMediumlVal, "images/ripple-medium.gif", rippleMediumlVal);

    var rippleLargeVal = SimpleLoaderApp.GetIconUrl("ripple", "large");
    assert.equal(rippleLargeVal, "images/ripple-large.gif", rippleLargeVal);

    // ------ gears
    var gearsSmallVal = SimpleLoaderApp.GetIconUrl("gears", "small");
    assert.equal(gearsSmallVal, "images/gears-small.gif", gearsSmallVal);

    var gearsMediumlVal = SimpleLoaderApp.GetIconUrl("gears", "medium");
    assert.equal(gearsMediumlVal, "images/gears-medium.gif", gearsMediumlVal);

    var gearsLargeVal = SimpleLoaderApp.GetIconUrl("gears", "large");
    assert.equal(gearsLargeVal, "images/gears-large.gif", gearsLargeVal);

    // ------ hourglass
    var hourglassSmallVal = SimpleLoaderApp.GetIconUrl("hourglass", "small");
    assert.equal(hourglassSmallVal, "images/hourglass-small.gif", hourglassSmallVal);

    var hourglassMediumlVal = SimpleLoaderApp.GetIconUrl("hourglass", "medium");
    assert.equal(hourglassMediumlVal, "images/hourglass-medium.gif", hourglassMediumlVal);

    var hourglassLargeVal = SimpleLoaderApp.GetIconUrl("hourglass", "large");
    assert.equal(hourglassLargeVal, "images/hourglass-large.gif", hourglassLargeVal);
});

QUnit.test("ShowSimpleLoaderTest", function(assert) {
    //$target.find("div.show-loading-icon").css('background-image', 'url('+ iconUrl +')');

    // Test for when element is relative
    var $target = $("#qunit-fixture");

    SimpleLoaderApp.AppendLoadingIconDiv($target);

    SimpleLoaderApp.AddRelativePosition($target);

    var iconImage = SimpleLoaderApp.GetIconImage("default");

    var iconSize = SimpleLoaderApp.GetIconSize("small");

    var iconUrl = SimpleLoaderApp.GetIconUrl(iconImage, iconSize);

    SimpleLoaderApp.ShowSimpleLoader($target, iconUrl);

    var hasLoaderIcon = $target.find("div.show-loading-icon");
    assert.equal(hasLoaderIcon.length, 1, "We have a loading icon.");

    var hasBackgroundImage = $target.find("div.show-loading-icon").css('background-image') != "" ?
        true : false;;
    assert.equal(hasBackgroundImage, true, "We have a loading background-image");

});
