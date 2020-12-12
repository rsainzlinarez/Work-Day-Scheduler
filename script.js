
renderTimeRows();
// addSaveNotesEventListener();

// function addSaveNotesEvenListener(){
//     $('.saveBtn').click(function(){
//         alert($(this).attr('data-time-slot'));

//     })

// }
function renderTimeRows(){
    
// const currentHour = moment().hour();
for (let i = 9; i < 17; i++) {
    
const div$ = $('<div>').addClass('time-block row');
const textArea$ = $('<textarea>').addClass('textarea');
const button$ = $('<button>').addClass('saveBtn');

div$.append(textArea$, button$);
$('.container').append(div$);


}
}



