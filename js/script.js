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
let images, input, imageItem, i;
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
            // let result = document.getElementsByClassName('imageItem')[i];
                input.onblur = function () {
                    $('.image').on('click', function(event) {
                        event.preventDefault();
                        this.value = '';
                        for (i = 0; i < images.length; i++) {
                            imageItem[i].style.display = 'block';
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

let $imageIndex, images, imageItem,$imageObject, lightbox;
images = document.getElementsByClassName('image');
imageItem = document.querySelectorAll('.imageItem');

$('.gallery').addClass('intro2');   // todo: add to onclick()
$('.imageItem').addClass('intro');  // todo: add to onclick()
// todo: add logic to change Local Storage to false to remove/disable intro classes (move and tweak from intro.js)



$('.imageItem').on('click', '.image', function(event)  {
    document.getElementById('search').value = '';
    event.preventDefault();
    $imageIndex = $(this).attr('src');
    $imageObject = $(this);


    // ?? tring to workout current next() and previous logic
    for(i=0; i < $('.imageItem').length; i++){
        console.log($('.imageItem')[i]);
        // if current logic matches something then next() $imageIndex = ++ logic, ele previous() $imageIndex == -- logic 
        if(''){

        }
    }
    // console.log($('.imageItem').index($imageObject[i]));


    overlayElements();
    open();
    exit();
    next();
    previous();
}); // end imageItem click

function open() {
    $('body').append(lightbox.background);
    lightbox.overlay
        .append(lightbox.exit)
        .append(lightbox.title)
        .append(lightbox.image)
        .append(lightbox.next)
        .append(lightbox.previous)
        .append(lightbox.caption);
    $('body').append(lightbox.overlay);
    $('.gallery').hide();
    $('.overlayBackground').css({'background-image': 'url('+ imagePath($imageIndex) +')'});
    lightbox.image.attr('src', imagePath($imageIndex));
    lightbox.title.text($imageObject[0].previousElementSibling.innerHTML);
    lightbox.caption.text($imageObject[0].nextElementSibling.innerHTML);
    // console.log($imageObject); // todo: remove
}; // end open()

function overlayElements() {
    lightbox = {
        overlay:    $('<article class="overlay-container"></article>'),
        background: $('<article id="background" class="overlayBackground"></article>'),
        previous:   $('<button id="previousButton" class="fas fa-arrow-alt-circle-left"></button>'),
        next:       $('<button id="nextButton" class="fas fa-arrow-alt-circle-right"></button>'),
        exit:       $('<button id="closeButton" class="fas fa-times"></button>'),
        image:      $('<img id="image" class="overlay">'),
        title:      $('<h1 id="heading"></h1>'),
        caption:    $('<figcaption id="caption"></figcaption>')
    };
}; // end overlayElements()

function exit() {
    $('.overlay-container').on('click', '#closeButton', function()  {
        lightbox.background.remove();
        lightbox.overlay.empty().remove();
        $('.gallery').show();
    });// end #closeButton click
}; // end exit()

function next() {
    $('.overlay-container').on('click', '#nextButton', function()  {
        alert('next');
    });// end #nextButton click
}; // end next()

function previous() {
    $('.overlay-container').on('click', '#previousButton', function()  {
        alert('previous');
    });// end #previousButton click
}; //end previous()

function imagePath(path) {
    // string replace image path
    let imagePath = 'img/thumbnails/';
    let newImagePath = 'img/';
    path =  $imageIndex;
    return path.replace(imagePath, newImagePath);
} //end imagePath()

