
// renderTimeRows();
// addSaveNotesEventListener();

// function addEvenListener(){
//     $('.saveBtn').click(function(){
//         const key = $(this).attr('data-time-slot');
//         const value = $(this).siblings('textarea').val()
//     localStorage.setItem(key, value); 

//     })

// }

// //Creates roows, buttons and time sections
// function renderTimeRows(){
    
// // const currentHour = moment().hour();

// const hoursArr$ = ['9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm','5:00 pm', '6:00 pm']
// $.each(hoursArr$, function(index, value){
    

// }





addEventListener();

function addEventListener(){
$('.saveBtn').click( function() {
// console.log('hi');
const value = $(this).siblings('textarea');
console.log(value.val());
})
}


const hoursArr$ = ['9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm','5:00 pm', '6:00 pm']

$.each(hoursArr$, function(index, value){
function createRow(){
const div$ = $('<div>').addClass('time-block row');
const textArea$ = $('<textarea>').addClass('textarea present');
const button$ = $('<button>').addClass('saveBtn').text('Save Notes');
div$.append(hoursArr$[index], textArea$, button$);
$('.container').append(div$);
}
createRow();
});