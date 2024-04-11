function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result = document.getElementById('result');
    var clickSound = document.getElementById('click-sound');
  
    // Play click sound
    clickSound.play();
  
    if (playerChoice === computerChoice) {
      result.textContent = 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (playerChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
      result.textContent = 'You win! Computer chose ' + computerChoice + '.';
      result.style.color = '#4CAF50'; // Green color for win
    } else {
      result.textContent = 'You lose! Computer chose ' + computerChoice + '.';
      result.style.color = '#F44336'; // Red color for loss
    }
  }
  
  
  const quotes = [
    { text: "People get things they don’t deserve all the time. Like me with you", author: "Leonard (to Sheldon)" },
    { text: "We’re all pathetic and creepy, and can’t get girls. That’s why we fight robots.", author: "Barry Kripke" },
    { text: "I am a horny engineer; I never joke about math or sex.", author: "Howard Wolowitz" },
    { text: "Then it’s settled. Amy’s birthday present will be my genitals.", author: "Sheldon Cooper" },
    { text: "Have you met my mother? I live in Jewish hell.", author: "Howard Wolowitz" },
    { text: "Engineers are just as smart as physicists.", author: "Howard Wolowitz" },
    { text: "Koothrappali's going to wet himself, I'm gonna throw up, Sheldon's gonna run away, and you're going to die", author: "Howard Wolowitz" },
    // Add more quotes as needed


    //Engineers are just as smart as physicists.
  ];
  
  // Function to generate a random quote and display it on the page
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteText = document.getElementById('quote-text');
    const author = document.getElementById('author');
    
    // Fade out current quote
    document.querySelector('.quote').classList.remove('show');
    
    setTimeout(() => {
      // Set new quote content
      quoteText.textContent = `"${randomQuote.text}"`;
      author.textContent = `~ ${randomQuote.author}`;
      
      // Fade in new quote
      document.querySelector('.quote').classList.add('show');
    }, 500); // Wait for fade out animation to complete
  }
  
  // Call the function to display a random quote when the page loads
  window.addEventListener('DOMContentLoaded', () => {
    generateRandomQuote();
    // Set interval to change the quote every 3 seconds
    setInterval(generateRandomQuote, 9000);
  });
// background
  const backgroundImages = [
    'images/img1.png',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',

    // Add more image URLs as needed
  ];
  
  // Function to change the background image with a smooth transition
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    document.body.classList.remove('fade-in');
    setTimeout(() => {
      document.body.style.backgroundImage = `url('${randomImage}')`;
      document.body.classList.add('fade-in');
    }, 500); // Wait for fade-out transition to complete
  }
  
  // Call the function to change the background image when the page loads
  window.addEventListener('DOMContentLoaded', () => {
    changeBackgroundImage();
    // Set interval to change the background image every 8 seconds
    setInterval(changeBackgroundImage, 8000);
  });

  // Function to check screen size and apply background image and blur effect
function setBackground() {
    const backgroundOverlay = document.querySelector('.background-overlay');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        backgroundOverlay.style.backgroundImage = 'url("images/phoneimg.jpg")';
        backgroundOverlay.style.filter = 'blur(5px)';
    } else {
        backgroundOverlay.style.backgroundImage = 'none';
        backgroundOverlay.style.filter = 'none';
    }
}

// Call the function when the page loads and on window resize
window.addEventListener('DOMContentLoaded', setBackground);
window.addEventListener('resize', setBackground);
