

//making list of workouts to render on DOM
function makeListItem(workout){
    //making workout list item to append to worklist
    let listItem = document.createElement('ul')
    listItem.id = workout.id
    listItem.className = 'choices'
    listItem.innerHTML = `
        <h4>${workout.name}</h4>
        <p>-${workout.sets} sets of ${workout.reps}</p>
        <p>Rest Time: ${workout.resttimebetweensets}</p>
    `
    document.querySelector('.Workout_choices').appendChild(listItem)
}

//fetch request for workout data 
function getWorkouts() {
    fetch('http://localhost:3000/Workouts')
    //converting json data 
    .then(function(res) {
        return res.json()
    })
    //using data to create workout cards
    .then(workouts => workouts.forEach(workout => makeListItem(workout))
    )
}   

//make form and submit events here 
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    addToList(e.target.typedWork.value)
})

function addToList(work) {
    let ul = document.createElement('ul')
    ul.className = 'work'
    let btn = document.createElement('button')
    btn.addEventListener('click', removeWork)
    btn.textContent = 'x'
    ul.textContent = `- ${work}  `
    ul.appendChild(btn)
    document.querySelector('.workList').appendChild(ul)
}

function removeWork(e) {
    e.target.parentNode.remove()
}

function initialize(){
    getWorkouts()
}
initialize()

