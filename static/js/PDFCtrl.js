
$( "#searchButton" ).click(function() {
   var value = $( "#input" ).val();
  console.log(value);
  $.get( "/search", { searchQuery: value } )
    .done(function( data ) {
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
          //     test = sec[k].header;
          //     console.log("header:" + sec[k].header);
          //     console.log("content:" + sec[k].content);
              if(sec[k].header != "") {
                   var ee = $('<div class="list-group">'+
                     '<a href="#design" class="list-group-item" >'+
                       '<h4>' + sec[k].header + '</h4></a>' +
                       '<input id="section-' + k + '" type="checkbox" name="checkbox" value="' + sec[k].header +  " " + sec[k].content + '">' +
                      //  '<div class="list-group-item">' + sec[k].content+ '</div>' +
                   '</div>');


                   // var eee = $('<div class="panel-collapse collapse">' +
                   //    '<div class="panel-body">' +
                   //         '<div class="list-group">'+
                   //           '<div class="list-group-item" ><span style="float:left"><input type="checkbox" aria-label="..." ></span>'+sec[k].content+'</div>'+
                   //           '</div>'+
                   //       '</div>'+
                   //     '</div>');
                   // $(eee).attr("id","collapse"+k);
                   // $(ee).attr("href",$(eee));
              };
              $('#clear').append(ee);
           };
           $("[id^=section-]").click(function() {
             var num = this.id.slice(8);
             var $elem = $('.section-'+num);
             var id = $(this).attr('id');
             var value = $('#' + id + '').val();
             $('#book').append('<div>' + value + '</div>');
             console.log($('#' + id + '').val());

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
              //  'pagesplit': true,
               'elementHandlers': specialElementHandlers
             });
             //doc.save('Test.pdf');
             // doc.setFont("calibri");
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
              //  'pagesplit': true,
               'elementHandlers': specialElementHandlers
             });
             //doc.save('Test.pdf');
             // doc.setFont("calibri");
             // doc.setFont("calibri");
             doc.save('test.pdf');
           });

          //  $( "input[type='checkbox']" ).prop( "checked", function( i, val ) {
          //    if (val == true){
          //      console.log("clicked!")
          //    };
          //    console.log(!val);
          //  });


         });
        //  $('#clear').appendTo('#print');
        });

        //originally goes here

    });
});
