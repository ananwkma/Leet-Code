/*
 * https://leetcode.com/problems/walking-robot-simulation/
 *
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 *
 * Time: O()
 * Space: O()
 */

changeDirection = (command, direction) => {
	if (command === -1) {
    	direction -= 1
    	if (direction < 1) direction = 4
    }
    else if (command === -2) {
    	direction += 1
    	if (direction > 4) direction = 1
    }
	return direction
}

checkObstacles = (obstacles, position, direction, command) => {

}

var robotSim = function(commands, obstacles) {
    let direction = 1 // 1: North, 2: East, 3: South, 4: West
    let position = [0, 0]
    commands.map(command => {
    	if (command > 0) {
	    	switch (direction) {
		    	case 1:
		    		position[1] += command
		    		break
		    	case 2:
		    		position[0] += command
		    		break
		    	case 3:
		    		position[1] -= command
		    		break
		    	case 4:
		    		position[0] -= command
		    		break
		    	default: 
		    		break
	    	}
	    }
	    else direction = changeDirection(command, direction)
    }) 
    console.log(position)
    return Math.pow(position[0], 2) + Math.pow(position[1], 2)
};

console.log('Expected: 25' + '\n' + 'Output: ' + robotSim([4,-1,3],[]))
//console.log('Expected: 65' + '\n' + 'Output: ' + robotSim([4,-1,4,-2,4],[2,4]))
