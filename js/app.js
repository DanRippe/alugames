function alterarStatus(gameIndex) {
    let idGame = '';
    
    switch (gameIndex) {
        case 1:
            idGame = 'game-1';
            break;
        case 2:
            idGame = 'game-2';
            break;
        case 3:
            idGame = 'game-3';
            break;
    }

    let itemImage = document.getElementById(idGame).querySelector('div');
    let itemButton = document.getElementById(idGame).querySelector('a');
    console.log(itemButton);

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
