// Avoid `console` errors in browsers that lack a console.
(function() {
    let method;
    let noop = function () {};
    let methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    let length = methods.length;
    let console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$('.footer').append('<a href="#" data-featherlight="<p>Just to prove i can also use plugins as well!</p>">Open DOM in lightbox</a>');
$('#footer').click(function () {
$('p.feathlight-inner').text('test');
});