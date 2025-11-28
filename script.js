document.getElementById('searchBar').addEventListener('keyup', function() {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    let name = card.getAttribute('data-name').toLowerCase();
    card.style.display = name.includes(filter) ? '' : 'none';
  });
});
