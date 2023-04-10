const listItem = document.querySelectorAll('.item');
const subList = document.querySelectorAll('.s-item')
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Hero Title
const hTitle = document.querySelector('.title');

// Hero prise
const hPrice = document.querySelector('.m-price');

// Hero Detail info
const hDetail = document.querySelector('.main-detail');

// hero bar
const hero = document.querySelector('.hero-contents');

// card container
const cardContainer = document.querySelector('.sale-caroursel');

// Card Inner
const inner = document.querySelector('.s-inner');

// cards
const cards = document.querySelectorAll('.sale-item');

// card
const card = document.querySelector('.sale-item');



// Details Info
const details = [
    "Fortnite Update The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.",
    "BIOSHOCK: THE COLLEC... Update A man must make of his life a ladder that he never ceases to climb --",
    "Valheim Update This place was too hot for Ulf, a man used to brushing snow from his beard. He carved this stone and moved on.",

];

const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card).marginRight); // Get the width of a single card including margin
const containerWidth = cardContainer.offsetWidth; // Get the width of the carousel container
let translateX = 0; // Start at the beginning

prevBtn.addEventListener('click', () => {
  translateX += cardWidth; // Subtract the width of a single card
  if (translateX > 0) {
    translateX = 0; // Prevent the container from going too far left
  }
  inner.style.transform = `translateX(${translateX}px)`; // Move the container left
});

nextBtn.addEventListener('click', () => {
  if (translateX > -(inner.offsetWidth - containerWidth)) {
    translateX -= cardWidth; // Add the width of a single card
    inner.style.transform = `translateX(${translateX}px)`; // Move the container right
  } else {
    translateX = -(inner.offsetWidth - containerWidth); // Prevent the container from going too far right
  }
});

cardContainer.addEventListener('scroll', (e) => {
    if(e.target.scrollLeft === 0){
        prevBtn.style.transform = 'rotate(180deg) scale(0.9)';
        prevBtn.style.opacity = '.6';
        prevBtn.style.transition = '.3s'
        nextBtn.style.transform = 'scale(1)';
        nextBtn.style.opacity = '1';
        nextBtn.style.transition = '.3s'
    } else {
        prevBtn.style.transform = 'rotate(180deg) scale(1)';
        prevBtn.style.opacity = '1';
        prevBtn.style.transition = '.3s'
        nextBtn.style.transform = 'scale(0.9)';
        nextBtn.style.opacity = '.6';
        nextBtn.style.transition = '.3s';
    }
})



// Nav Item List
listItem.forEach((item)=>{
    item.addEventListener('click', activeLink);
})


function activeLink(e){
    listItem.forEach((item)=>{
        item.classList.remove ('active');
        this.classList.add ('active');
    })
}
subList.forEach((item)=>{
    item.addEventListener('click', activeSLink);
})


function activeSLink(e){
    subList.forEach((item)=>{
        item.classList.remove ('s-active');
        this.classList.add ('s-active');
    })
}


document.querySelector('.colap').addEventListener('click', function(e) {
    document.querySelector('.smart-nav').classList.toggle ('d-show');
    e.preventDefault();
});

document.querySelector('.arrow-down').addEventListener('click', function(e) {
    document.querySelectorAll('.bar-items>.s-item').forEach((item)=> {
        if(!item.classList.contains('s-active')){
            item.classList.toggle('hide-up');
        }
    })
    if(e.target.classList.contains('arrow-down')){
        e.target.classList.toggle('rotaterr');
    }

    document.querySelector('.right-items').classList.toggle('align-items-center');

    e.preventDefault();
});

// Cards to Hero
cards.forEach(function(card) {
    card.addEventListener('click', function(e) {
        cardImg = card.children[0].children[0].src
        hero.style.backgroundImage= `url(${cardImg})`
        hero.style.backgroundPosition = 'center'
        
        hTitle.innerHTML = card.children[1].children[0].innerText;

        // Put the price
        const priceNode = card.children[1].children[2].childNodes;
        priceNode.forEach((node) => {
            if (node.nodeType === 1){
                if (node.classList.contains('prise')){
                    hPrice.innerHTML = node.innerText
                }else if(node.classList.contains('bg-success')){
                    hPrice.innerHTML = node.innerText
                }
            }
        })

        // diaplay quotes
        details.forEach((quote) => {
            if(quote.includes(card.children[1].children[0].innerText)){
                hDetail.innerHTML = quote;
            }
        })
        
        e.preventDefault();
    })
})