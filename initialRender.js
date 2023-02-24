function getWorkouts() {
    fetch('http://localhost:3000/Workouts')
   
    .then(function(res) {
        return res.json()
    })
    
    .then(workouts => workouts.forEach(workout => makeListItem(workout))
    )
}   

function makeListItem(workout){
    
    let listItem = document.createElement('ul')
    listItem.id = workout.id
    listItem.className = 'choices'
    listItem.innerHTML = `
        <h4>${workout.name}</h4>
        <p>-${workout.sets} sets of ${workout.reps}</p>
        <p>Rest Time: ${workout.resttime}</p>
    `
    document.querySelector('.Workout_choices').appendChild(listItem)
}

function submitEventListener() {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        addToList(e.target.typedWork.value)
    })
}

function addToList(work) {
    let ul = document.createElement('ul')
    ul.className = 'work'
    let btn = document.createElement('button')
    btn.addEventListener('click', removeWork)
    btn.textContent = 'x'
    btn.className = 'delete'
    ul.textContent = `- ${work}  `
    ul.appendChild(btn)
    document.querySelector('.workList').appendChild(ul)
}

function removeWork(e) {
    e.target.parentNode.remove()
}

function mousoveralert() {
    let h3 = document.createElement('h3')
    h3.textContent='Exercise Ideas:'
    h3.addEventListener('mouseover', function alertMessage() {
        alert('Workouts are just for reference, do what works for you!')
    })
    document.querySelector('.Workout_choices').appendChild(h3)
}

function initialize(){
    submitEventListener()
    mousoveralert()
    getWorkouts() 
}
initialize()

