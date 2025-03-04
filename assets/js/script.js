
let taskCard= document.querySelectorAll('.task-card');
let taskAssign= document.getElementById('task-assigned');
let taskBtn = document.querySelectorAll(".task-card button")
let weekday = document.getElementById('weekDay');
let fullDate = document.getElementById('fullDate');
let clearActivity = document.getElementById('clearActivity');
let activityWrap = document.getElementById('activityWrap');
let completeTask = document.getElementById('completed-task');
let colorChange = document.getElementById('color-change');
let discover = document.getElementById('discover');


discover.style.cursor = "pointer";
discover.addEventListener('click', () => {
    window.location.href = "blog.html"
})

let innitialTask = 0;
innitialTask = taskCard.length;
taskAssign.innerText = innitialTask;

let completeInnitialTask = 0;
completeTask.innerText = completeInnitialTask;

let todayDate = new Date();
const day = todayDate.toLocaleDateString('en-US', { weekday: 'short' });
weekday.innerText = day +",";
let originalDate = todayDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
fullDate.innerText = originalDate;


for (const btn of taskBtn) {
    btn.addEventListener('click', () => {
        alert("Board Updated Successfully");
        let taskTitle= btn.parentNode.parentNode.childNodes[2].nextSibling.innerText;
        taskAssign.innerText--;
        btn.setAttribute('disabled', 'true');
        activityWrap.innerHTML += `<p>You have Complete The Task ${taskTitle} at ${todayDate.toLocaleTimeString()}</p>`;
        completeInnitialTask++;
        completeTask.innerText = completeInnitialTask;
        if (taskAssign.innerText == 0) {
            alert("Congrats!!! You have Completed All The Task");
        }
    })
}
clearActivity.addEventListener('click', () => {
    activityWrap.innerHTML="";
})

colorChange.addEventListener('click', () => {
    let randomColor = "#" + Math.floor(Math.random() * 1000).toString(16);
    document.body.style.backgroundColor = randomColor;
})