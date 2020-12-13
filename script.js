
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
    
// const div$ = $('<div>').addClass('time-block row');
// const textArea$ = $('<textarea>').addClass('textarea');
// const button$ = $('<button>').addClass('saveBtn').text('Save notes');
// const hour$ = $('<div>').addClass('hour').text(value);

// console.log(hour$);
// div$.append(hour$, textArea$, button$);
// $('.container').append(div$);
 



// // console.log(currentHour);

// // if (currentHour > i){
// //     textArea$.addClass('present');
// // }


// })
// }


createRow();
createRow();
createRow();
createRow();
createRow();
createRow();
createRow();
createRow();
createRow();
createRow();

addEventListener();

function addEventListener(){
$('.saveBtn').click( function() {
// console.log('hi');
const inputNotes$ = $(this).siblings('textarea');
const key = 'Note:' +0;
const value = inputNotes$.val();

localStorage.setItem(key, value);

})
}

function createRow(){
const div$ = $('<div>').addClass('time-block row');
const textArea$ = $('<textarea>').addClass('textarea present');
const button$ = $('<button>').addClass('saveBtn').text('Save Notes');
div$.append(textArea$, button$);
$('.container').append(div$);

const key = 'Note:' +0;
const localStorageRetrive$ = localStorage.getItem(key);
textArea$.val(localStorageRetrive$);

}