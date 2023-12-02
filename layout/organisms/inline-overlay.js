(function(global)
{
    "use strict";

    const InlineOverlay = Overlay.extend(
    {
        getOverlayType()
        {
            return 'overlay inline ' + this.type;
        }
    });

    global.InlineOverlay = InlineOverlay;

})(this);