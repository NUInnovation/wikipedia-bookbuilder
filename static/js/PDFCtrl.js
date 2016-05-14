//Search functinality implemented here
$( "#searchButton" ).click(function() {
  var value = $( "#input" ).val();
  console.log(value);
  $.get( "/search", { searchQuery: value } )
  .done(function( data ) {
    $("#articles").empty();
    $.each(data.articles, function(i,item){
      $('#articles').append('<div class="list-group">'+
      '<a href="#design" class="list-group-item">'+
      '<h4>' + item.title + '</h4></a>' +
      '<div class="list-group-item">' + item.summary + '</div>' +
      '</div>');

    });
    var doc = new jsPDF();

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    doc.fromHTML($('#articles').get(0), 15, 15, {
      'width': 170,
      // 'margin': 1,
      // 'pagesplit': true,
      'elementHandlers': specialElementHandlers
    });
    //doc.save('Test.pdf');

    $('#cmd').click(function(){
      doc.setFont("calibri");
      doc.output('dataurlnewwindow');
    });
  });
});
