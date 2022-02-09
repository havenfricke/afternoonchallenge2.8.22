const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', lost: false },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', lost: false },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', lost: false },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', lost: false },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'n/a', lost: false },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', lost: false },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', lost: false }]

// ... spread operator creates a copy of the array
let current = [...packages]

function draw() {
  let template = ""
  for (let i = 0; i < current.length; i++) {
    const package = current[i];
    template +=
      `      
      <tr>
        <td>${package.to}</td>
        <td>${package.priority}</td>
        <td>${package.fragile}</td>
        <td>${package.heavy}</td>
        <td>${package.trackingNumber}</td>
      </tr>
    `

  }

  document.getElementById('package-list').innerHTML = template

}

draw()



function filterHeavy(heavy) {
  current = current.filter(banana => banana[heavy])
  draw()
}

function filterPriority(priority) {
  current = current.filter(banana => banana[priority])
  draw()
}

function filterFragile(fragile) {
  current = current.filter(banana => banana[fragile])
  draw()
}

function filterReset() {
  current = [...packages]
  draw()

}

filterReset()

function filterLost(lost) {
  current = current.filter(banana => banana[lost])
  draw()
}

function filterFragile(fragile) {
  current = current.filter(banana => banana[fragile])
  draw()
}

function newLoss() {
  current.forEach(banana => banana.lost = false)
  const randIndex = Math.floor(Math.random() * current.length)
  current[randIndex].lost = true
  draw()
}

function guess(name) {
  let lostPackage = document.getElementById("guessInput").value
  current.find(banana => banana.lost)
  if (lostPackage.name == name) {
    alert('You guessed right.')
  } else {
    alert('You guessed wrong.')
  }
}










































// let cats = [{ name: 'cat1', guilty: false }, { name: 'cat2', guilty: false }, { name: 'cat3', guilty: false }] //this is the array. [index defined by these brackets]

// let template = ""


// function draw(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     const cat = arr[i];
//     let template += `HTML CODE HERE WITH ${cat.name}`

//   }

//   document.getElementById('element id').innerText = template
  //id above goes on the parent row with your elements, in this case cats. template will then inject the code into your HTML below specified row
// }

// draw()



// arr.forEach(cat => cat.guilty = false)