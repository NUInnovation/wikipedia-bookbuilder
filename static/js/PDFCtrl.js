$( "#searchButton" ).click(function() {
  // this is the main search functionnality
  $('#loader').css("display","block")
  var value = $( "#input" ).val();
  console.log(value);
  $.get( "/search", { searchQuery: value } )
  .done(function( data ) {
    console.log(data);
    $("#articles").empty();
    $("#clear").empty();

    // Here is to append the articles and their summary
    $.each(data.articles, function(i,item){
      var e = $('<div class="list-group">'+
      '<a href="#design" class="list-group-item" >'+
      '<h4>' + item.title + '</h4></a>' +
      '<div class="list-group-item">' + item.summary + '</div>' +
      '</div>');
      $('#articles').append(e);

      // here is to append the sub sections
      $(e).bind("click",function () {
        var tracker = 0;
        $("#clear").empty();

        var sec = item.sections;

        for (var k = 1; k < sec.length-1; k++){
          if(sec[k].header != "") {
            var ee = $('<ul class=list-group>'+
            '<li class="list-group-item"><input id="section-' + k
            + '" type="checkbox" name="checkbox" value="'
            + sec[k].header +  " " + sec[k].content + '">' +'<h4>'
            + sec[k].header +'</h4>'+ '</li>' +

            '</ul>');

          };
          $('#clear').append(ee);
        };
        $("[id^=section-]").click(function() {
          var num = this.id.slice(8);
          var $elem = $('.section-'+num);
          var id = $(this).attr('id');
          var value = $('#' + id + '');
          tracker = tracker + 1;
          $('#table').append(
            '<li>' + sec[num].header + '</li>'
          );
          $('#bookContent').append(
            '<div id=' + id + ' class="list-group-item">' +
            '<h3>' + tracker + '. ' + sec[num].header + '</h3>' +
            '</br>' +
            '<div>' + sec[num].content + '</div>' +
            '</div>');
          });

          //  this is the click function for open a pdf page
          $('#open').click(function(){
            $("#title").empty();
            $('#title').append( value
            );
            var doc = new jsPDF();
            // We'll make our own renderer to skip this editor
            var specialElementHandlers = {
              '#editor': function(element, renderer){
                return true;
              }
            };

            doc.fromHTML($('#book').get(0), 15, 15, {
              'width': 170,

              'pagesplit': true,
              'elementHandlers': specialElementHandlers
            });

            doc.output('dataurlnewwindow');
          });

          //  this is the click function for download
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
