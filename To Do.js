let form = document.querySelector('#form');
let wizz = document.getElementById('alom');
let list = document.querySelector('#list')
let Submit = document.querySelector('#submit')

Submit.addEventListener('click', ()=> {
        let task = wizz.value;
        if (task=="") {
            alert('please add some task')
            return;
        }
        // const creat = document.createElement('input')
        // creat.type =('checkbox') 
        // creat.classList.add('wiseman')
        
        let div = document.createElement('div')
        const span = document.createElement('div')
        
        div.classList.add('alom')
        // div.classList.add('linet');
        div.textContent = task; 
        span.classList.add('wizzy')
        span.textContent='Delete';
        div.append(span)
        list.appendChild(div)
        wizz.value="";


        div.addEventListener('click',function () {
            div.classList.toggle('linet');

             localStorage.setItem('wizdom',JSON.stringify(task))
         div.innerHTML = localStorage.getItem('wisdom')
        }) 
 
        span.addEventListener('click',function () {
            alert('are you sure you want to remove this task ?')
                list.removeChild(div) 
        
                
            
        })
      
    }
    
)

   
