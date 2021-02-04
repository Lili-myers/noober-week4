async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let OutputElement = document.querySelector('.rides')
  for (let i=0; i < json.length; i++){

    if (json[i].length > 1) {
    levelOfService = 'Noober Pool'
    OutputElement.insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
    }
    else if (json[i] [0].purpleRequested == true) {
    levelOfService = 'Noober Purple'
    OutputElement.insertAdjacentHTML ('beforeend' , `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
    }
    else if (json[i] [0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
    OutputElement.insertAdjacentHTML ('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
    }
    else {
    levelOfService = 'Noober X'
    OutputElement.insertAdjacentHTML ('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
    }

    for (let p = 0; p < json[i].length;p++) {
      passengerName = json[i][p].passengerDetails.first + ' ' + json[i][p].passengerDetails.last
      passengerPhone = json[i][p].passengerDetails.phoneNumber
      passengerNumberOfPassengers = json[i][p].numberOfPassengers
      passengerPickupAddressLine1 = json[i][p].pickupLocation.address
      passengerPickupAddressLine2 = json[i][p].pickupLocation.city + ', ' + json[i][p].pickupLocation.state + ' ' + json[i][p].pickupLocation.zip
      passengerDropoffAddressLine1 = json[i][p].dropoffLocation.address
      passengerDropoffAddressLine2 = json[i][p].dropoffLocation.city + ', ' + json[i][p].dropoffLocation.state + ' ' + json[i][p].dropoffLocation.zip
    if (json[i][p].length > 1) {
      OutputElement.insertAdjacentHTML('beforeend', `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passengerNumberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>
    `)
   }
   else if (json[i][0].purpleRequested == true) {
    OutputElement.insertAdjacentHTML ('beforeend', `
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${passengerNumberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
        <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
        <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>
  `)
    }
    else if (json[i][0].numberOfPassengers > 3) {
      OutputElement.insertAdjacentHTML ('beforeend', `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passengerNumberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddressLine1}</p>
          <p>${passengerPickupAddressLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddressLine1}</p>
          <p>${passengerDropoffAddressLine2}</p>
        </div>
      </div>
    </div>
    `)
  }
  else {
    OutputElement.insertAdjacentHTML ('beforeend', `
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passengerName}</h2>
        <p class="font-bold text-gray-600">${passengerPhone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${passengerNumberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${passengerPickupAddressLine1}</p>
        <p>${passengerPickupAddressLine2}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${passengerDropoffAddressLine1}</p>
        <p>${passengerDropoffAddressLine2}</p>
      </div>
    </div>
  </div>
  `)
  }

  }

  }
  }
window.addEventListener('DOMContentLoaded', pageLoaded)

