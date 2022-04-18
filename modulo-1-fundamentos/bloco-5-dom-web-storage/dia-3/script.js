function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createMonth() {
  let days = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
     days.appendChild(dayItem);
    }
    else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
     days.appendChild(dayItem);
    }
    else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
     days.appendChild(dayItem);
    }
    else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
     days.appendChild(dayItem);
    }
  }
}

createMonth();

function holidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = buttonName;
  buttonContainer.appendChild(buttonHoliday);

}

holidayButton('Feriados')

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'green';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
        getHolidays[index].style.color =
        '#777';
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
        getHolidays[index].style.color = 'white';

      }
    }
  })
};

displayHolidays();

function fridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonfriday = document.createElement('button');
  buttonfriday.id = 'btn-friday';
  buttonfriday.innerText = buttonName;
  buttonContainer.appendChild(buttonfriday);

}

fridayButton('Sexta-feira');

function displayfridays(fridaysArray) {
  let getfridayButton = document.querySelector('#btn-friday');
  let getfridays = document.querySelectorAll('.friday');
  let setNewText = 'SEXTOU';

  getfridayButton.addEventListener('click', function() {
    for (let index = 0; index < getfridays.length; index += 1) {
      if (getfridays[index].innerText !== setNewText) {
        getfridays[index].innerText = setNewText;
      } 
      else {
        getfridays[index].innerText = fridaysArray[index]
      }
    }
  });
};

let dezFridays = [ 4, 11, 18, 25 ];
displayfridays(dezFridays);

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

function dayMouseOut()
 {
   let days = document.querySelector('#days');
   days.addEventListener('mouseout', function(event){
     event.target.style.fontSize = '20px';
     event.target.style.fontWeight = '200';
   })
 }
dayMouseOver();
dayMouseOut();

function tasks(taskName) {
  let getTask = document.querySelector('.my-tasks');
  let task = document.createElement('span');
  task.innerHTML = taskName;
  getTask.appendChild(task);
  
}
tasks('marcos');

function taskLabel(color) {
  let getColor = document.querySelector('.my-tasks');
  let colorSubtitle = document.createElement('div');
  colorSubtitle.className = 'task';
  colorSubtitle.style.backgroundColor = color;
  getColor.appendChild(colorSubtitle);
}

taskLabel('blue');
taskLabel('green');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

