//create an dom image elemnt with a variable link and insert it inside a div with modal class
function createImage(link) {
  var img = document.createElement("img");
  img.src = link;
  //create a div element with modal class
  var div = document.createElement("div");
  div.className = "modal";
  //append the image to the div
  div.appendChild(img);
  //append the div to the section with main-section id
  document.getElementById("main-section").appendChild(div);
}

// send a get request to the server and get the image link using fetch api
fetch("https://lexica.art/api/v1/search?q=apples")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //call the createImage function with the image link
    console.log(data);
    // createImage(data.results[0].image_url);
  });
