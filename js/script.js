// this is set get and set local storage to prevent the intro from playing everytime the lightbox gets closed
// can remove the local storage cookie in dev console ;)

function intro(){
    let ls = window.localStorage;
    if(ls.getItem('intro') === 'undefined' || ls.getItem('intro') === null)
    {
        ls.setItem('intro', true);
    } // I think i need to add a for loop here to loop through all objects and append class name
    if(ls.getItem('intro') === 'true'){
        document.getElementsByClassName('imageItem').className += 'intro';
        document.getElementsByClassName('gallery').className += 'intro2';
    } else if(ls.getItem('intro') === 'false'){
        document.getElementsByClassName('imageItem').remove('intro');
        document.getElementsByClassName('gallery').remove('intro2');
    } else {
        // future usage
    }
}
intro();
/**
 * Created by Warren Leyes on 2017-07-25.
 */

function searchAndDetroy() {
var images, input, imageItem, i;
    images = document.getElementsByClassName('image');
    input = document.getElementById('search');
    imageItem = document.querySelectorAll('.imageItem');

    input.onkeyup = function () {
        for(i=0; i < images.length; i++){
            if (images[i].getAttribute('title').toUpperCase().indexOf(input.value.toUpperCase()) <= -1) {
                //hide images that don't contain keyword from input
                document.getElementsByClassName('imageItem')[i].style.display = 'none';
            } else {
                document.getElementsByClassName('imageItem')[i].style.display = 'block';
                window.localStorage.setItem('intro', 'true');
            }
            // Clear input after the image has been clicked
            var result = document.getElementsByClassName('imageItem')[i];
                input.onblur = function () {
                    $('.image').on('click', function(event) {
                        this.value = '';
                        for (i = 0; i < images.length; i++) {
                            document.querySelectorAll('.imageItem')[i].style.display = 'block';
                        } // end for()
                    })// end click
                }; // end onblur()
        }// end for
    };
}// EOF
searchAndDetroy();


/**
 * Created by Warren Leyes on 2017-07-25.
 */

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
 * Created by Warren Leyes on 2017-07-25.
 */

$(document).ready(function() {
    //Global letiables
    let image =         document.getElementsByClassName('image');
    let imageItem =     document.getElementsByClassName('.imageItem');
    let headerText =    document.getElementsByClassName('imageTitle');
    let captionText =   document.getElementsByClassName('imageText');
    let $imageIndex =   8;
    let lightbox;
//  largeImagePath(image[$imageIndex].src) + '" alt="' + image[$imageIndex].alt +
    lightbox = {
        background: '<article id="background" class="overlayBackground"></article>',
        overlay:    '<div class="overlay"></div>',
        previous:   '<i id="previousButton" class="fas fa-angle-double-left"></i>',
        next:       '<i id="nextButton" class="fas fa-angle-double-right"></i>',
        exit:       '<i id="closeButton" class="fas fa-times"></i>',
        largeImage: '<img id="largeImage" class="overlay" src="' + largeImagePath(image[$imageIndex].src) + '" alt="' + image[$imageIndex].alt + '">',
        title:      '<h1 id="heading">' + headerText[$imageIndex].innerHTML + '</h1>',
        caption:    '<figcaption id="caption">' + captionText[$imageIndex].innerHTML + '</figcaption>'
    };

    $('.gallery').addClass('intro2');
    $('.imageItem').addClass('intro');

    $('.imageItem').click(() => {
        $('.gallery').hide();

    });
    //todo: move overlay code inside click event
    $('body').append(lightbox.background)
        .append(lightbox.exit)
        .append(lightbox.title)
        .append(lightbox.largeImage)
        .append(lightbox.next)
        .append(lightbox.previous)
        .append(lightbox.caption);
    $('.overlayBackground').css({
        'background-image': 'url('+ image[$imageIndex].src +')',
        'background-attachment': 'fixed',
        'background-size': 'cover'
    });


    // string replace image path
    function largeImagePath(path) {
        let imagePath = 'img/thumbnails/';
        let newImagePath = 'img/';
        path =  image[$imageIndex].src;
        return path.replace(imagePath, newImagePath);
    }

}); // EOF