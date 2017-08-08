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

let $imageIndex, images, imageItem,$imageObject, indexValue,nextIndexValue,previousIndexValue, lightbox;
images = document.getElementsByClassName('image');  // <image tags>
imageItem = document.querySelectorAll('.imageItem');// the wraping <figure tag>

$('.gallery').addClass('intro2');   // todo: add to onclick()
$(imageItem).addClass('intro');  // todo: add to onclick()
// todo: add logic to change Local Storage to false to remove/disable intro classes (move and tweak from intro.js)


$('.imageItem').on('click', '.image', function(event)  {
    document.getElementById('search').value = '';
    event.preventDefault();
    indexValue = $('.image').index(this);// set image index to clicked value
    overlayElements();
    open();
    exit();
    next(indexValue);
    previous(indexValue);
}); // end imageItem click

function open() {
    lightbox.background.css({'background-image': 'url('+ imagePath() +')'});
    lightbox.image.attr('src', imagePath());
    lightbox.title.text(imageItem[indexValue].children[0].innerHTML);
    lightbox.caption.text(imageItem[indexValue].children[2].innerHTML);

    nextIndexValue = indexValue++;
    previousIndexValue = indexValue--;

    if (indexValue === $(imageItem).length -1){ nextIndexValue = 0; };
    if(indexValue === 0){ previousIndexValue = $(imageItem).length -1; }


    $('.gallery').hide();
    $('.header').hide();
    lightbox.overlay
        .append(lightbox.exit)
        .append(lightbox.title)
        .append(lightbox.image)
        .append(lightbox.next)
        .append(lightbox.previous)
        .append(lightbox.caption);
    $('body').append(lightbox.overlay);
    $('body').append(lightbox.background);
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
        caption:    $('<figcaption id="caption"></figcaption>'),
        footer:     $('<p id="footer"></p>')
    };
}; // end overlayElements()

function exit() {
    $('.overlay-container').on('click', '#closeButton', function()  {
        lightbox.background.remove();
        lightbox.overlay.empty().remove();
        $('.gallery').show();
        $('.header').show();
    });// end #closeButton click
}; // end exit()

function next(index) {
    $('.overlay-container').on('click', '#nextButton', function()  {
        indexValue = indexValue+1;
        if(indexValue === imageItem.length ){indexValue = 0};
        lightbox.background.css({'background-image': 'url('+ imagePath() +')'}).change();
        lightbox.image.attr('src', imagePath()).change();
        lightbox.title.text(imageItem[indexValue].children[0].innerHTML).change();
        lightbox.caption.text(imageItem[indexValue].children[2].innerHTML).change();
    });// end #nextButton click
}; // end next()

function previous(index) {
    $('.overlay-container').on('click', '#previousButton', function()  {
        indexValue = indexValue-1;
        if(indexValue < 0){indexValue = imageItem.length -1};
        lightbox.background.css({'background-image': 'url('+ imagePath() +')'}).change();
        lightbox.image.attr('src', imagePath()).change();
        lightbox.title.text(imageItem[indexValue].children[0].innerHTML).change();
        lightbox.caption.text(imageItem[indexValue].children[2].innerHTML).change();
    });// end #previousButton click
}; //end previous()

function imagePath(path) {
    // string replace image path
    let imagePath = 'img/thumbnails/';
    let newImagePath = 'img/';
    path =  images[indexValue].src;
    return path.replace(imagePath, newImagePath);
} //end imagePath()

