$(() => {
  $(".img-thumbnail").click(function(e) {
  	
    $("#image-gallery-image").prop("src",$(e.target).prop("src"))
    $("#img-next").prop("href","./ThankYou-3.html?img="+encodeURIComponent($(e.target).prop("src")))
  });
});