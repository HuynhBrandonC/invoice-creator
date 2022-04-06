const invoiceBtn1 = document.getElementById('invoice-btn1');
const invoiceBtn2 = document.getElementById('invoice-btn2');
const invoiceBtn3 = document.getElementById('invoice-btn3');
const sendBtn = document.getElementById('send-btn');
const ulEl = document.getElementById('ul-el');
const total = document.getElementById('money__text--total');
let myTasks = [];
let myMoney = [];

function addTask(task, money) {
    let listTasks = "";
    for (let i=0; i<task.length; i++) {
        listTasks +=
        `<li class='task__items'>
            <div class='task__item--wrapper'>
                <h4 class='money__text task__text'>${task[i]}</h4>
                <button onClick='remove(this)' class='remove-btn'>Remove</button>
            </div>
            <div>
                <h4 class='money__text task__text money__sign--text'>${money[i]}</h4>
            </div>
         </li>
        `
    }
    ulEl.innerHTML = listTasks;

    addTotal();

}

function remove(id) {
    taskName = id.parentElement.firstElementChild.textContent; 
    let current_index = myTasks.indexOf(taskName);
    myTasks.splice(current_index, 1);
    myMoney.splice(current_index, 1);
    id.parentElement.parentElement.remove()
    addTask(myTasks, myMoney)
}


function addTotal() {
    let totalMoney = 0;
    for (let i=0; i<myMoney.length; i++) {
        let current = myMoney[i];
        current = current.split('$')
        totalMoney += parseInt(current[1]);
    }

    total.textContent = '$' + totalMoney;
}

sendBtn.addEventListener("click", function(){
    myTasks = [];
    myMoney = [];
    addTask(myTasks);
    total.textContent = '$0'
})


invoiceBtn1.addEventListener("click", function(){
    const btnTextSplit = invoiceBtn1.textContent.split(":");
    myTasks.push(btnTextSplit[0]);
    myMoney.push(btnTextSplit[1]);
    addTask(myTasks, myMoney)
})

invoiceBtn2.addEventListener("click", function(){
    const btnTextSplit = invoiceBtn2.textContent.split(":");
    myTasks.push(btnTextSplit[0]);
    myMoney.push(btnTextSplit[1]);
    addTask(myTasks, myMoney)
})

invoiceBtn3.addEventListener("click", function(){
    const btnTextSplit = invoiceBtn3.textContent.split(":");
    myTasks.push(btnTextSplit[0]);
    myMoney.push(btnTextSplit[1]);
    addTask(myTasks, myMoney)
})