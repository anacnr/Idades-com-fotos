function Usar(){
    let show_button = document.querySelectorAll("button")[1]
    show_button.style.display = 'none'

    let hide_button= document.querySelectorAll("button")[0]
    hide_button.style.display = 'block'
    hide_button.style.top = '-7pt'

    let foto = document.querySelector("img")
    foto.parentNode.removeChild(foto)

    let frase = document.querySelector("h2")
    frase.innerHTML = 'Preencha tudo para ver a foto!'
    frase.classList.remove('faixa')
    frase.classList.remove('texto')
    frase.style.margin = '0%'

    let dive = document.getElementById("foto")
    dive.style.position = 'relative'
    dive.style.bottom = '5%'

    let label_day = document.querySelectorAll("label")[0];
    label_day.style.display = "block";

    let label_month = document.querySelectorAll("label")[1];
    label_month.style.display = "block";
    
    let label_year = document.querySelectorAll("label")[2];
    label_year.style.display = "block";
    

    let checados = document.getElementById("sexo");
    checados.style.display = 'block'
    checados.style.position = 'relative'
    checados.style.bottom = '9%'


   let day = document.createElement('input')
   day.id = 'day'
   day.type = 'number'
   day.name = 'data1'
   day.required = 'true'
   day.style.position = 'relative'
   day.style.bottom = '93%'
   day.style.left = '16%'

   let godfather_day = document.getElementById("dados")
   godfather_day.appendChild(day)

   let month = document.createElement('input')
   month.id = 'month'
   month.type = 'number'
   month.name = 'data2'
   month.required = 'true'
   month.style.position = 'relative'
   month.style.bottom = '72%'
   month.style.left = '6%'
   
   let godfather_month = document.getElementById("dados")
   godfather_month.appendChild(month)

   let year = document.createElement('input')
   year.id = 'year'
   year.type = 'number'
   year.name = 'data3'
   year.required = 'true'
   year.style.position = 'relative'
   year.style.bottom = '49%'
   year.style.left = '-5%'
   
   let godfather_year = document.getElementById("dados")
   godfather_year.appendChild(year)

}