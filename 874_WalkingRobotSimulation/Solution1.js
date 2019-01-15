/*
 * https://leetcode.com/problems/walking-robot-simulation/
 *
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 *
 * Time: O()
 * Space: O()
 *
 * ATTEMPT 1
 */

changeDirection = (command, direction) => {
	if (command === -1) return (direction = (direction + 1) % 4)
    else if (command === -2) return (direction = (direction + 3) % 4)
}

noObstacles = (direction, position, command) => {
	switch (direction) {
    	case 1: // North
    		position[1] += command
    		break
    	case 2: // East
    		position[0] += command
    		break
    	case 3: // South
    		position[1] -= command
    		break
    	case 4: // West
    		position[0] -= command
    		break
    	default: 
    		break
	}
}

checkObstacles = (direction, position, command, obstacles) => {
	let blocked = false
	let closestObs = obstacles[0]
	switch (direction) {
    	case 1: // North
    		obstacles.map(obstacle => {
    			if (obstacle[0] === position[0] 
    			&& position[1] < obstacle[1] < (position[1] += command))
					blocked = true
    				closestObs = compareObstacles(obstacle, position, closestObs)
    		})
    		if (blocked) position[1] = closestObs[1] - 1
    		else position[1] += command
    		break
    	case 2: // East
    		obstacles.map(obstacle => {
    			if (obstacle[1] === position[1] 
    			&& position[1] < obstacle[1] < (position[0] += command))
    				blocked = true
    				closestObs = compareObstacles(obstacle, position, closestObs)
    		})
    		if (blocked) position[0] = closestObs[0] - 1
    		else position[0] += command
    		break
    	case 3: // South
    		obstacles.map(obstacle => {
    			if (obstacle[0] === position[0] 
    			&& position[1] > obstacle[1] > (position[1] -= command))
    				blocked = true
    				closestObs = compareObstacles(obstacle, position, closestObs)
    		})
    		if (blocked) position[1] = closestObs[1] + 1
    		else position[1] -= command
    		break
    	case 4: // West
    		obstacles.map(obstacle => {
    			if (obstacle[1] === position[1] 
    			&& position[1] > obstacle[1] > (position[0] -= command))
    				blocked = true
    				closestObs = compareObstacles(obstacle, position, closestObs)
    		})
    		if (blocked) position[0] = closestObs[0] + 1
    		else position[0] -= command
    		break
    	default: 
    		break
	}
	console.log('closestObs', closestObs)
	console.log('pos', position)
}

compareObstacles = (obstacle, position, closestObs) => {
	if (Math.abs(obstacle[0] + obstacle[1] - position[0] - position[1])
	< Math.abs(closestObs[0] + closestObs[1] - position[0] - position[1]))
		return obstacle
	else return closestObs
}

var robotSim = function(commands, obstacles) {
    let direction = 1 // 1: North, 2: East, 3: South, 4: West
    let position = [0, 0]
    commands.map(command => {
    	if (command > 0) {
	    	if (obstacles.length > 0) checkObstacles(direction, position, command, obstacles)
	    	else noObstacles(direction, position, command)
	    }
	    else direction = changeDirection(command, direction)
    }) 
    return Math.pow(position[0], 2) + Math.pow(position[1], 2)
};

// console.log('Expected: 25' + '\n' + 'Output: ' + robotSim([4,-1,3],[]))
// console.log('Expected: 65' + '\n' + 'Output: ' + robotSim([4,-1,4,-2,4],[[2,4]]))
console.log('Expected: 32' + '\n' + 'Output: ' + robotSim([4,-1,4,-2,4],[[2,4],[0,1]]))
