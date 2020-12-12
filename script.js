

function renderTimerows(){
const currentHour = moment().hour();
for (let i = 9; i < 17; i++) {
    
const div$ = $('<div>').addClass('time-block row');
const textArea$ = $('<textarea>').addClass('textarea');
console.log(currentHour);
const button$ = $('<button>').adddClass('saveBtn');
div$.append(textArea$, button$);
$('.container').append(div$);

}
}


// $('.one').click(function(){
//     $(this).hide();
//     });