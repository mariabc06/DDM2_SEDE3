// Captura o botão e o contador de cliques
const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
// Inicializa o contador
let clickCount = 0;
// Adiciona um ouvinte de eventos de clique ao botão
clickButton.addEventListener('click', function() {
   // Incrementa o contador de cliques
   clickCount++;
   // Atualiza o texto exibido com o novo valor do contador
   clickCountDisplay.textContent = clickCount;
});