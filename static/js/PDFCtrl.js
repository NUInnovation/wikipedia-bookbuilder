
$( "#searchButton" ).click(function() {
   var value = $( "#input" ).val();
  console.log(value);
  $.get( "/search", { searchQuery: value } )
    .done(function( data ) {
      console.log(data);
      $("#articles").empty();
      $("#clear").empty();
      // var test;
      $.each(data.articles, function(i,item){
        var e = $('<div class="list-group">'+
          '<a href="#design" class="list-group-item" >'+
            '<h4>' + item.title + '</h4></a>' +
            '<div class="list-group-item">' + item.summary + '</div>' +
        '</div>');
        $('#articles').append(e);
        // $("#clear").empty();
        $(e).bind("click",function () {
           $("#clear").empty();
          //  for (var k = 1; k < sec.length-1; k++)
           var sec = item.sections;
          //  console.log("content:" + sec);
           for (var k = 1; k < sec.length-1; k++){
              if(sec[k].header != "") {
                   var ee = $('<ul class=list-group>'+
                       '<li class="list-group-item"><input id="section-' + k + '" type="checkbox" name="checkbox" value="' + sec[k].header +  " " + sec[k].content + '">' +'<h4>'+ sec[k].header +'</h4>'+ '</li>' +
                      //  '<h4 class="list-group-item">' + sec[k].header + '</h4>' +
                      //  '<div class="list-group-item">' + sec[k].content+ '</div>' +
                   '</ul>');

              };
              $('#clear').append(ee);
           };
           $("[id^=section-]").click(function() {
             var num = this.id.slice(8);
             var $elem = $('.section-'+num);
             var id = $(this).attr('id');
             var value = $('#' + id + '');
             $('#table').append(
               '<ol>' + sec[num].header + '</ol>'
              );
             $('#book').append(
               '<div id=' + id + '>' +
               '<h3>' + sec[num].header + '</h3>' +
               '</br>' +
             '<div>' + sec[num].content + '</div>' +
             '</div>');
           });

           $('#open').click(function(){
             var doc = new jsPDF();
             // We'll make our own renderer to skip this editor
             var specialElementHandlers = {
               '#editor': function(element, renderer){
                 return true;
               }
             };

             doc.fromHTML($('#book').get(0), 15, 15, {
               'width': 170,
               // 'margin': 1,
               'pagesplit': true,
               'elementHandlers': specialElementHandlers
             });

             doc.output('dataurlnewwindow');
           });

           $('#download').click(function(){
             var doc = new jsPDF();
             // We'll make our own renderer to skip this editor
             var specialElementHandlers = {
               '#editor': function(element, renderer){
                 return true;
               }
             };

             doc.fromHTML($('#book').get(0), 15, 15, {
               'width': 170,
               // 'margin': 1,
               'pagesplit': true,
               'elementHandlers': specialElementHandlers
             });
             doc.save('test.pdf');
           });

         });

        });

    });
});
