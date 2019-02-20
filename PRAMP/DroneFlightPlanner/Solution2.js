// input:  route = [ [0,   2, 10],
//                   [3,   5,  0],
//                   [9,  20,  6],
//                   [10, 12, 15],
//                   [10, 10,  8] ]
// output: 5 

// +10   +10
// -6    +4
// -9    * -5 * 
// +7    +2



function calcDroneMinEnergy(route) {
  let largestEnergyDeficit = 0
  let energyBalance = 0
  for (let i = 1; i < route.length; i++) {
    energyBalance = energyBalance + (route[i-1][2] - route[i][2])
    if (energyBalance < largestEnergyDeficit) largestEnergyDeficit = energyBalance

    console.log('r1', route[i-1][2], 'r2', route[i][2])
    console.log('eb', energyBalance, 'led', largestEnergyDeficit)
  }
    if (largestEnergyDeficit > 0) largestEnergyDeficit = 0
    else if (largestEnergyDeficit < 0) largestEnergyDeficit *= -1
    return largestEnergyDeficit 
}
    
 // console.log('Expected: 14', calcDroneMinEnergy([[0,2,6],[10,10,20]])) 
 console.log('Expected: 36', calcDroneMinEnergy([[0,2,2],[3,5,0],[9,20,38],[10,12,15],[10,10,8]]))  



