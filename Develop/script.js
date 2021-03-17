//Inputs
var rowS = document.getElementById('#rows')
//Row 9am Content
var button9 = document.getElementById('button9')
var input9 = document.getElementById('input9')

//Row 10am
var button10 = document.getElementById('button10')
var input10 = document.getElementById('input10')

//Row 11am
var button11 = document.getElementById('button11')
var input11 = document.getElementById('input11')

//Row 12pm
var button12 = document.getElementById('button12')
var input12 = document.getElementById('input12')

//Row 1pm
var button1 = document.getElementById('button1')
var input1 = document.getElementById('input1')

//Row 2pm
var button2 = document.getElementById('button2')
var input2 = document.getElementById('input2')

//Row 3pm
var button3 = document.getElementById('button3')
var input3 = document.getElementById('input3')

//Row 4pm
var button4 = document.getElementById('button4')
var input4 = document.getElementById('input4')

//Row 5pm
var button5 = document.getElementById('button5')
var input5 = document.getElementById('input5')


//Moment.js
var today = moment();
var timedisplay = today.format('dddd, MMMM Do YYYY, h:mm:ss a')
document.getElementById('currentDay').textContent = timedisplay

function clock() {
    setInterval(function () {
        var today = moment();
        var timedisplay = today.format('dddd, MMMM Do YYYY, h:mm:ss a')
        document.getElementById('currentDay').textContent = timedisplay
        
    }, 1000);
}

clock()

//Using moment.js values to highlight events as past, present, or future
var hourNum = today.format("H")

var highlight = function() {
    //Row 9am
    if (hourNum === 9) {
        input9.className = 'present'
    }
    else if (hourNum > 9) {
        input9.className = 'past'
    }
    else {
        input9.className = 'future'
    }

    //Row 10am
    if (hourNum === 10) {
        input10.className = 'present'
    }
    else if (hourNum > 10) {
        input10.className = 'past'
    }
    else {
        input10.className = 'future'
    }

    //Row 11am
    if (hourNum === 11) {
        input11.className = 'present'
    }
    else if (hourNum > 11) {
        input11.className = 'past'
    }
    else {
        input11.className = 'future'
    }

    //Row 12pm
    if (hourNum === 12) {
        input12.className = 'present'
    }
    else if (hourNum > 12) {
        input12.className = 'past'
    }
    else {
        input12.className = 'future'
    }

    //Row 1pm
    if (hourNum === 13) {
        input1.className = 'present'
    }
    else if (hourNum > 13) {
        input1.className = 'past'
    }
    else {
        input1.className = 'future'
    }

    //Row 2pm
    if (hourNum === 14) {
        input2.className = 'present'
    }
    else if (hourNum > 14) {
        input2.className = 'past'
    }
    else {
        input2.className = 'future'
    }

    //Row 3pm
    if (hourNum === 15) {
        input3.className = 'present'
    }
    else if (hourNum > 15) {
        input3.className = 'past'
    }
    else {
        input3.className = 'future'
    }

    //Row 4pm
    if (hourNum === 16) {
        input4.className = 'present'
    }
    else if (hourNum > 16) {
        input4.className = 'past'
    }
    else {
        input4.className = 'future'
    }

    //Row 5pm
    if (hourNum === 17) {
        input5.className = 'present'
    }
    else if (hourNum > 17) {
        input5.className = 'past'
    }
    else {
        input5.className = 'future'
    }

}
highlight()
setInterval(function(){
    hourNum = today.format('H');
    highlight();
 },60000);

//Recalling events after refresh using local storage (none if first time)
var updateEvents = function () {
    input9.value = localStorage.getItem('event9')
    input10.value = localStorage.getItem('event10')
    input11.value = localStorage.getItem('event11')
    input12.value = localStorage.getItem('event12')
    input1.value = localStorage.getItem('event1')
    input2.value = localStorage.getItem('event2')
    input3.value = localStorage.getItem('event3')
    input4.value = localStorage.getItem('event4')
    input5.value =  localStorage.getItem('event5')
}

//Button 9am function for local storage
button9.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input9.value;

    if (event === '' && localStorage.getItem('event9').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event9", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input9.value = localStorage.getItem('event9')
    }
})

//Button 10
button10.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input10.value;

    if (event === '' && localStorage.getItem('event10').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event10", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input10.value = localStorage.getItem('event10')
    }
})

//Button 11am
button11.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input11.value;

    if (event === '' && localStorage.getItem('event11').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event11", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input11.value = localStorage.getItem('event11')
    }
})

//Button 12pm
button12.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input12.value;

    if (event === '' && localStorage.getItem('event12').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event12", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input12.value = localStorage.getItem('event12')
    }
})

//Button 1pm
button1.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input1.value;

    if (event === '' && localStorage.getItem('event1').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event1", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input1.value = localStorage.getItem('event1')
    }
})

//Button 2pm
button2.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input2.value;

    if (event === '' && localStorage.getItem('event2').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event2", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input2.value = localStorage.getItem('event2')
    }
})

//Button 3pm
button3.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input3.value;

    if (event === '' && localStorage.getItem('event3').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event3", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input3.value = localStorage.getItem('event3')
    }
})

//Button 4pm
button4.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input4.value;

    if (event === '' && localStorage.getItem('event4').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event4", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input4.value = localStorage.getItem('event4')
    }
})

button5.addEventListener('click', function (event) {
    event.preventDefault();

    var event = input5.value;

    if (event === '' && localStorage.getItem('event5').value === '') {
        //alerts if blank
        alert('Cannot save a blank event.');
    }
    else {
        //Storing to local storage
        localStorage.setItem("event5", event);

        //Updating value before updateEvent function so unsaved changes are not overrided
        input5.value = localStorage.getItem('event5')
    }
})

//Grabs local storage values upon reloading page.
updateEvents()