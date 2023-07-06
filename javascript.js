var colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6' ]; // Adicione mais classes de cor, se necessário

function changeBackgroundColor() {
  var card = document.querySelector('.card');
  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  
  // Remove todas as classes de cor existentes
  card.classList.remove(...colors);
  
  // Adiciona a classe de cor aleatória selecionada
  card.classList.add(randomColor);
}

  