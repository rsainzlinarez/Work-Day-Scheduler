
renderTimeRows();
// addSaveNotesEventListener();

// function addSaveNotesEvenListener(){
//     $('.saveBtn').click(function(){
//         alert($(this).attr('data-time-slot'));

//     })

// }
function renderTimeRows(){
    
// const currentHour = moment().hour();

const hoursArr$ = ['9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm','5:00 pm', '6:00 pm']
$.each(hoursArr$, function(index, value){
    
const div$ = $('<div>').addClass('time-block row');
const textArea$ = $('<textarea>').addClass('textarea');
const button$ = $('<button>').addClass('saveBtn').text('Save notes');
const hour$ = $('<div>').addClass('hour').text(value);

console.log(hour$);
div$.append(hour$, textArea$, button$);
$('.container').append(div$);

// console.log(currentHour);

// if (currentHour > i){
//     textArea$.addClass('present');
// }
// const button$ = $('<button>').adddClass('saveBtn').text('Save Notes').attr('data-time-slot', i);


})
}



