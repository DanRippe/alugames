function alterarStatus(idGame) {
    
    let itemImage = document.getElementById(`game-${idGame}`).querySelector('div');
    let itemButton = document.getElementById(`game-${idGame}`).querySelector('a');
    
    if (itemImage.classList.contains('dashboard__item__img--rented')) {
        itemImage.classList.remove('dashboard__item__img--rented');        
    } else {
        itemImage.classList.add('dashboard__item__img--rented');        
    }

    if (itemButton.classList.contains('dashboard__item__button--return')) {
        itemButton.classList.remove('dashboard__item__button--return');
        itemButton.text = 'Alugar';
    } else {
        itemButton.classList.add('dashboard__item__button--return');
        itemButton.text = 'Devolver';
    }
    
}
