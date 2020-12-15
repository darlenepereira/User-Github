const nameInput = document.getElementById('nameInput')
const submit = document.getElementById('submit')
const divId = document.getElementById('div-user')
const locationUrl = document.getElementById('location')

//JS Moderno
 
submit.addEventListener('click', e => {
   e.preventDefault()
   link() 
})

const link = () => {
   fetch(`https://api.github.com/users/${nameInput.value}`)
   
      .then(response => {
         if (!response.ok) {
            throw new Error(`O Status do erro foi ${response.status} e quer dizer ${response.statusText}`)
         } else {
            response.json().then(object => {
               TagHtml(object)    
               console.log(object)
            })
         }
      })
      .catch(error => {
         divId.innerHTML = `<h1 class='h1-js'>${error}</h1>`       
      })
      nameInput.value ="";
}

// FUNÇÃO PARA CRIAR AS TAGS HTML------------------------------

const TagHtml = (object) => {

   divId.innerHTML =`
   <div id="user">
   <ul class="elements-js">
   <img class='img' src="${object.avatar_url}">
      <li class='list-js'>
         <h2 class="h2-js">${object.name}<h2/>
         <p class='login'>@${object.login}</p> 
         <p id='location' class="location-js">${object.location}<p/>
         <a class='html_url-js' href="${object.html_url}" target="_blank" >${object.html_url}<a/>
      <li/>
   <ul/>
   </div>`
}

/*

// Versão XMLHttpRequest-----------------------------

const nameInput = document.getElementById('nameInput')
const submit = document.getElementById('submit')
const divId = document.getElementById('user')




submit.addEventListener('click', e => {
   e.preventDefault()

   const inputValue = nameInput.value
   const request = new XMLHttpRequest()
   const method = "GET"
   const url = `https://api.github.com/users/${inputValue}`
   

   request.open(method, url, true);

   request.addEventListener("readystatechange",() => {
      if (request.readyState == 4 && request.status == 200) {
         const data = JSON.parse(request.response)
         urlAvatar(data)
        

         const description  = document.createElement('h2')
         description.innerHTML = `Nome: ${data.name}`
         divId.appendChild(description)

         //STYLE

         description.style.color = '#fd16cb'

       }else{
         divId.innerHTML= `O erro é do tipo ${request.status} `

         //STYLE

         divId.style.fontFamily = 'Helvetica'
         divId.style.fontSize = '2rem'
         divId.style.color = '#FF0000'

       }
       
   })
   request.send();
   nameInput.value ="";
})

//Agora que o JSON é o objeto, podemos passar suas chaves

function urlAvatar(object){
   divId.innerHTML = `<img src="${object.avatar_url}">`
   
}


*/




