async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let OutputElement = document.querySelector('.rides')
  for (let i=0; i < json.length; i++){

    if(json[i].length > 1) {
    levelOfSevice = 'Noober Pool'
    OutputElement.insertAdjacentHTML('beforeend',`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
  }


  }





}

window.addEventListener('DOMContentLoaded', pageLoaded)

