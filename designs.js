

$(document).ready(function(){
    
    // Select color input
    $("#sizePicker").submit(
       function makeGrid(grid) {
           $('table tr').remove();
     // Select size input

        var rows = $('#input_height').val();
        var cols = $('#input_width').val();
          for (var i = 1; i <= rows; i++ ){
              
          //make the table  
            $('table').append('<tr></tr>');
            
     for (var j = 1; j <= cols ; j++ ){
            $('tr:last').append('<td></td>');
            
            $('td').attr("class", 'cells');
            
            }
        }
        //prevent default
      grid.preventDefault();
        $('.cells').click(function(event){
            var paint = $('#colorPicker').val();
            $(event.target).css('background-color' , paint )
        });
  }) ;
    
});








