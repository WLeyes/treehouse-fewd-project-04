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
    //Global variables
    var gallery, image, imageItem, background, headerText, captionText;
    gallery =       document.querySelector('.gallery');
    imageItem =     document.getElementsByClassName('imageItem');
    image =         document.getElementsByClassName('image');
    headerText =    document.getElementsByClassName('imageTitle');
    captionText =   document.getElementsByClassName('imageText');
    $src =          null;
    $image =   0;
    lightbox = {
        background: {id:    'background', class: 'overlayBackground', src:   $src},
        imageTitle:  headerText,
        imageCaption: captionText
    };
    for(i = 0; i < imageItem.length; i++){
         lightbox.background.src    = largeImagePath(image[i].src);
         lightbox.imageTitle = headerText[i].innerHTML;
         lightbox.imageCaption = captionText[i].innerHTML;
        console.log(lightbox.imageTitle);
        console.log(lightbox.background);
        console.log(lightbox.imageCaption);
    }

    // determine what was clicked at gallery & children level
    gallery.addEventListener('click', function(event) {

    });// end .click()




    // string replace image path
    function largeImagePath(path) {
        var imagePath = 'img/thumbnails/';
        var newImagePath = 'img/';
        return path.replace(imagePath, newImagePath);
    }

}); // EOF