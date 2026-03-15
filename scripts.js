const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction){
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

     //Responsável pela animação de ir para o próximo
    if (direction>0) {
        active += 1;

        if (active == total){
            active = 0;
        }
    //Responsável pela animação de ir para o anterior
    }else if (direction < 0) {
        active -= 1;
        
        if(active <0 ){
            active = total -1
            //Truque para chegar no último item da lista
        }
    }
    //Adicionar a classe Active para poder aparecer o proximo ou anterior
    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.textContent = String(active +1).padStart(2,'0') ;
}
clearInterval(timer);
 timer = setInterval(() => {
    update(1)
}, 5000);

prevButton.addEventListener('click', () =>{
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})