let clickedCard = null;
let preventClick = false;
let score = 0;
let scoreboard = document.getElementById("score");

function onCardClicked(e) {
    const target = e.currentTarget;

    if (  target === clickedCard || target.className.includes('done')) {
        return
    }
    target.className = target.className.replace('color-hidden', '').trim();
    target.className += ' done';

    if (!clickedCard) {
        //if we haven't clicked a card, keep track od the card, display it's color
        clickedCard = target;
    }
    else if (clickedCard) {
        //if we have already clicked a card, check if the new card matches the old card color
        preventClick = true;
        if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
            preventClick = true;

            setTimeout(() =>{
                clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
                target.className = target.className.replace('done', '').trim() + ' color-hidden';
                clickedCard = null;
                preventClick = false;
                score++;
                }, 500);
            scoreboard = score;
        }
        else{
            clickedCard = null;
        }
    }
}


