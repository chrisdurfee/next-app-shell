(function(global)
{
    "use strict";

    var InlineOverlay = Overlay.extend(
    {
        getOverlayType: function()
        {
            return 'overlay inline ' + this.type;
        }
    });

    global.InlineOverlay = InlineOverlay;

})(this);