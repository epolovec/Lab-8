function showbar() {
    document.getElementById("search-bar").style.display = "block";
}

  // wait for the DOM to load
  window.onload = function() {
    // select all images
    const images = document.querySelectorAll('.images img');

    // loop through the images
    for (let i = 0; i < images.length - 1; i++) {
      // if the image is the last on its row (i.e., it has a right neighbor), remove the margin
      if (images[i].offsetTop === images[i + 1].offsetTop) {
        images[i].classList.add('no-margin');
      }
    }
  };
