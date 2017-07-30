/**
 * Created by Warren on 2017-07-25.
 */

function searchAndDetroy() {

    var images = document.getElementsByClassName('image');
    var input = document.getElementById('search');
    var imageItem = document.querySelectorAll('.imageItem');

    input.onkeyup = function () {
        for(i=0; i < images.length; i++){
            console.log(input.value.toUpperCase());
            if (images[i].getAttribute('title').toUpperCase().indexOf(input.value.toUpperCase()) <= -1) {
                //hide images that don't contain keyword from input
                document.getElementsByClassName('imageItem')[i].style.display = 'none';
            } else {
                document.getElementsByClassName('imageItem')[i].style.display = 'block';
                window.localStorage.setItem('intro', 'true');
            }
            var result = document.getElementsByClassName('imageItem')[i];
            console.log(result);
            if(document.onblur = function () {
                    console.log('blur');
                })
                // .onblur clear the input and reset the gallery
                input.onblur = function () {
                    this.value = '';
                    for(i=0; i < images.length; i++){
                        document.querySelectorAll('.imageItem')[i].style.display = 'block';
                    }
                };
        }
    };
}// EOF
searchAndDetroy();


/**
 * Created by Warren Leyes on 2017-07-16.
 */
// todo: figure out how to detect if on mobile breakpoint and set title and text visible
$(document).ready(function() {

        $(this).find('.imageTitle').hide();
        $(this).find('.imageText').hide();
        $('.imageItem').hover( function() {
            $(this).find('.imageTitle').slideDown(400);
            $(this).find('.imageText').slideDown(400);
        }, function() {
            $(this).find('.imageTitle').slideUp(400);
            $(this).find('.imageText').slideUp(400);
        });
}); // EOF


/**
 * Created by Warren on 2017-07-11.
 */

$(document).ready(function() {
    //Global variables
    var image =         document.getElementsByClassName('image');
    var imageItem =     document.getElementsByClassName('.imageItem');
    var headerText =    document.getElementsByClassName('imageTitle');
    var captionText =   document.getElementsByClassName('imageText');
    var $imageIndex =   0;
    var lightbox;

    lightbox = {
        background: '<img id="background" class="overlayBackground" src="' + largeImagePath(image[$imageIndex].src) + '" alt="' + image[$imageIndex].alt + '">',
        overlay:    '<div class="overlay"></div>',
        previous:   '<i id="previousButton" class="fa fa-chevron-circle-left"></i>',
        next:       '<i id="nextButton" class="fa fa-chevron-circle-right"></i>',
        exit:       '<i id="closeButton" class="fa fa-times"></i>',
        largeImage: '<img id="largeImage" src="' + largeImagePath(image[$imageIndex].src) + '" alt="' + image[$imageIndex].alt + '">',
        title:      '<h1 id="heading">' + headerText[$imageIndex].innerHTML + '</h1>',
        caption:    '<figcaption id="caption">' + captionText[$imageIndex].innerHTML + '</figcaption>'
    };

    // string replace image path
    function largeImagePath(path) {
        var imagePath = 'img/thumbnails/';
        var newImagePath = 'img/';
        path =  image[$imageIndex].src;
        return path.replace(imagePath, newImagePath);
    }

}); // EOF