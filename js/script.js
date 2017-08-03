// this is set get and set local storage to prevent the intro from playing everytime the lightbox gets closed
// can remove the local storage cookie in dev console ;)

function intro(){
    var ls = window.localStorage;
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
    // Declare variables
    let gallery,imageItem, image,imagePath,newImagePath, $src;

    // determine what was clicked at gallery & children level
    imageItem = document.getElementsByClassName('image');
    for(let i =0; i < imageItem.length; i++){
        imageItem[i].addEventListener('click', (event) =>{
            lightbox = {
                galleryTag: '<article id="background" class="overlayBackground"></article>',
                background: largeImagePath(event.target.src),
                elements: {
                    closeButton:   '<i id="closeButton"    class="fal fa-times-circle"       aria-hidden="true"></i>',
                    nextButton:    '<i id="nextButton"     class="fal fa-angle-double-right" aria-hidden="true"></i>',
                    previousButton:'<i id="previousButton" class="fal fa-angle-double-left"  aria-hidden="true"></i>'
                },// end elements
                image: {
                    imageTag:  '<section id="largeImage" class="overlay"></section>',
                    src: largeImagePath(event.target.src),
                    alt: event.target.alt,
                    title: event.target.title,
                    headerText: event.target.previousElementSibling.innerHTML,
                    captionText: event.target.nextElementSibling.innerHTML,
                    index: i
                }// end image
            };// end lightbox
            console.log('Index: '               + lightbox.image.index);
            console.log('Lightbox Background: ' + lightbox.background);
            console.log('Lighbox Header: '      + lightbox.image.headerText);
            console.log('Lighbox Image: '       + lightbox.image.src);
            console.log('Lightbox Caption: '    + lightbox.image.captionText);
            i = i+1;
            console.log('Index: '               + lightbox.image.index);
            console.log('Lightbox Background: ' + lightbox.background);
            console.log('Lighbox Header: '      + lightbox.image.headerText);
            console.log('Lighbox Image: '       + lightbox.image.src);
            console.log('Lightbox Caption: '    + lightbox.image.captionText);
            //test: goal try to use event target ++ -- to get next and previous images, maybe setting an index



        });// end click()
    }// end for()

    // string replace image path
    function largeImagePath(path) {
        imagePath = 'img/thumbnails/';
        newImagePath = 'img/';
        return path.replace(imagePath, newImagePath);
    }// end largeImage()
}); // EOF