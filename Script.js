
var galleryID = "#image-gallery";
var galleryImageID = "#image-gallery-image";
var galleryTitleID = "#image-gallery-title";
var galleryCommentsID = "#image-gallery-comments";

var numPhotos = 12;

// represents the current photo data to be used. Default is the cat data
var photoData = [];

for(var i = 0; i < numPhotos; i++){
  photoData.push({
    'likes':0,
    'comments':[
      ['Jesse', 'Omg!!! Such a cute picture'],
      ['John', 'Ive seen better though.'],
      ['Jesse', 'Hmmm.']
    ]
  });
}

// Always points to the current photo in the Gallery...
var currentPhotoID = 0;

window.onload = function(){
  // code goes here...
  $(document).on('click', '.open-image-gallery', function(){
    currentPhotoID = $(this).data('id');
    updateGallery($(this));
  });
  
  $(document).on('click', '.like_button', function(){
    console.log("Like Button Clicked!");
    photoData[currentPhotoID]['likes']++;
    updateLikes();
  });
  $(document).on('click', '#comment-button', function(){
    addComment();
  })
}

// Updates the title and image of the Gallery Modal
function updateGallery(selector){
  $(galleryTitleID).text(selector.data('title'));
  $(galleryImageID).attr('src', selector.data('image'));
  updateLikes();
  updateComments();
}

// Updating the likes corresponding to the current photo
function updateLikes(){
  $('#likes').text(photoData[currentPhotoID]['likes']);
}

// Updating the comments corresponding to the current photo
function updateComments(){
  var html = "";
  var comments = photoData[currentPhotoID]['comments'];
  for(var i = 0; i < comments.length; i++){
    var line = "<p><strong>" + comments[i][0] + "</strong>: " + comments[i][1] + "</p>\n";
    html += line;
  }
  $(galleryCommentsID).html(html);
}

// Updating the Grid to display the current set of photos. Not used
function updateGrid(){
  for(var id = 0; id < numPhotos; id++){
    var selector = $("#"+id);
    selector.attr('src', photoData[i]['src']);
  }
}

function nextPhoto(){
  currentPhotoID++;
  currentPhotoID = currentPhotoID%numPhotos;
  updateGallery();
}

function previousPhoto(){
  currentPhotoID = currentPhotoID - 1 + numPhotos;
  currentPhotoID = currentPhotoID%numPhotos;
  updateGallery();
}

function addComment(){
  var name = $('#name').val();
  var comment = $('#comment').val();
  $('#name').val("");
  $('#comment').val("");
  photoData[currentPhotoID]['comments'].push([name, comment]);
  updateComments();
}
