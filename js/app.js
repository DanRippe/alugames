function alterarStatus(idGame) {
    
    let itemImage = document.getElementById(`game-${idGame}`).querySelector('div');
    let itemButton = document.getElementById(`game-${idGame}`).querySelector('a');
    let itemName = document.getElementById(`game-${idGame}`).querySelector('p').textContent;
    
    if (itemImage.classList.contains('dashboard__item__img--rented')) {
        
        if (confirm(`Deseja mesmo devolver o jogo "${itemName}"?`)) {
            itemImage.classList.remove('dashboard__item__img--rented');
            itemButton.classList.remove('dashboard__item__button--return');
            itemButton.text = 'Alugar';
        }  
          
    } else {
        itemImage.classList.add('dashboard__item__img--rented');
        itemButton.classList.add('dashboard__item__button--return');
        itemButton.text = 'Devolver';        
    }    

}
