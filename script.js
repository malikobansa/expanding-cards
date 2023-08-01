 const cards = document.querySelectorAll('.panel');
  const prevBtn = document.getElementById('leftBtn');
  const nextBtn = document.getElementById('rightBtn');
  let currentIndex = 0;

  // Function to remove the 'active' class from all cards
  function deactivateAllCards() {
    cards.forEach(card => card.classList.remove('active'));
  }

  // Function to activate the current card
  function activateCard() {
    cards[currentIndex].classList.add('active');
  }

  // Event listener for the previous button
  prevBtn.addEventListener('click', () => {
    deactivateAllCards();
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    activateCard();
  });

  // Event listener for the next button
  nextBtn.addEventListener('click', () => {
    deactivateAllCards();
    currentIndex = (currentIndex + 1) % cards.length;
    activateCard();
  });
  cards.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    cards.forEach(panel => {
        panel.classList.remove('active')
    })
}