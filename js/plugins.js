// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 *  Animsition Plugin
 */
$(document).ready(function() {
    var screenSize = window.matchMedia("(min-width: 768px)");
    if(screenSize.matches){
        $('.container').addClass('animsition');
        $('.animsition').animsition({
            inClass: 'flip-in-y',
            outClass: 'flip-out-y'
        });
        $('.imageItem').animsition({
            inClass: 'rotate-in-lg',
            outClass: 'rotate-out-lg',
            inDuration: 1500,
            outDuration: 500
        })
    }
}); //EOF
