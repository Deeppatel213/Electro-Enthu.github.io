// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a captionlogo
var img = document.getElementById("myImgLogo");
var modalImg = document.getElementById("img01");
var captionlogoText = document.getElementById("captionlogo");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionlogoText.innerHTML = this.alt;
}

// Get the <span> element that closelogos the modal
var span = document.getElementsByClassName("closelogo")[0];

// When the user clicks on <span> (x), closelogo the modal
span.onclick = function() { 
  modal.style.display = "none";
}