
  // Product switcher
  let galleryArt = [
    {
      src: "images-gallery/3.png",
      title: "Colorful Forest",
      price: "$14.99",
      style: "Abstract"
    },
    {
      src: "images-gallery/4.png",
      title: "Shades",
      price: "$11.99",
      style: "Abstract"
    },
    {
      src: "images-gallery/5.png",
      title: "The Fields",
      price: "$12.99",
      style: "Impressionism"
    },
    {
      src: "images-gallery/6.png",
      title: "Burst",
      price: "$14.99",
      style: "Impressionism"

    },
    {
      src: "images-gallery/7.png",
      title: "Split Circle",
      price: "$10.99",
      style: "Minimalism"
    },
    {
      src: "images-gallery/8.png",
      title: "Mountains",
      price: "$17.99",
      style: "Minimalism"
    },
    {
      src: "images-gallery/11.png",
      title: "Floral Mist",
      price: "$14.99",
      style: "Botanical"
    },
    {
      src: "images-gallery/12.png",
      title: "Floral Undertone",
      price: "$15.99",
      style: "Botanical"
    },
    {
      src: "images-gallery/10.png",
      title: "El Jefe",
      price: "$12.99",
      style: "Cubism"
    }
  ];

let galleryContainer = document.getElementById("gallery-container");
let artTitle = document.getElementById("art-title");
let artPrice = document.getElementById("art-price");
let artStyle = document.getElementById("art-style");

galleryArt.forEach((art, index) => {
  
  let image = document.createElement("img");
  image.src = art.src;
  image.alt = art.title;

  image.addEventListener("click", function () {
    artTitle.textContent = art.title;
    artPrice.textContent = art.price;
    artStyle.textContent = art.style;
  });

  galleryContainer.appendChild(image);
});

// Guessing game

let randomNumber = Math.floor(Math.random() * 10 + 1);
let userGuess = document.getElementById("user-guess");

const submitButton = document.getElementById("submit-button");
const numberOfGuesses = document.getElementById("number-of-guesses");

submitButton.addEventListener("click", guessMade);

function guessMade(){
  let userNumber = +userGuess.value;

if(userNumber === randomNumber){
  result.textContent = "Yay, You Win FREE prints!"
} else if ( userNumber > randomNumber){
  result.textContent = "Sorry. It's too high. Try Again.";
} else{
  result.textContent = "Sorry. It's too low. Try Again."
}

}






    


//Contact Form

 document.addEventListener("DOMContentLoaded", function () {
    
  let contactForm = document.getElementById("form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

  let fullName = document.getElementById("name").value;
  let phoneNumber = document.getElementById("phone").value;
  let emailAddress = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;
  let preferredContact = "";

  let errorMessage = document.getElementById("errorMessage");
  let output = document.getElementById("output");

  
  errorMessage.innerHTML = "";
  output.innerHTML = "";

  try {
    if (fullName === "") throw "Name is required.";
    if (phoneNumber === "") throw "Phone number is required.";

    if(phoneNumber){
      preferredContact = "phone";
    }
    if(emailAddress){
      preferredContact = "email";
    }
    if (preferredContact === "email" && emailAddress === "") {
      throw "Your email address is required because you selected it as your preferred contact method.";
    }
   
    if (userMessage === "") {
      throw "Don't forget to enter your message!";
    }

    
    output.innerHTML = 
      "<p><strong>Thank you! Below is your submitted information:</strong></p>" +
      "<p><strong>Name:</strong> " + fullName + "</p>" +
      "<p><strong>Preferred Contact:</strong> " + preferredContact + "</p>" +
      "<p><strong>Email Address:</strong> " + (emailAddress ? emailAddress : "Not preferred") + "</p>" +
      "<p><strong>Phone Number:</strong> " + (phoneNumber ? phoneNumber : "Not preferred") + "</p>" +
      "<p><strong>Message:</strong> " + userMessage + "</p>";
    
    
  } catch (error) {
    errorMessage.innerHTML = error;
    console.error(error);
     }
    
      });
    });
