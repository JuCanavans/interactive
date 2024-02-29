const button_Mudar_Tela = document.querySelector('#button_send');
const main = document.querySelector('.main_section');
const main_finished = document.querySelector('#main_section_finished');
const button_select = document.querySelectorAll('#contat_id');
const res = document.querySelector('#result_number');

let cont = 0;

for (let i = 0; i < button_select.length; i++){
    button_select[i].addEventListener('click', function(event){
        number = Number(this.innerHTML);
        res.innerHTML = `${number}`;
        event.target.style.background = '#7c8798';
    });
}

button_Mudar_Tela.addEventListener('click', () =>{
    main.classList.add('hidden');
    main_finished.classList.remove('hidden');
})    
