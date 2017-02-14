// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#handlebars-demo').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);
$(document).ready(function(){
  //add new list item
  $('#submit').click(function(){
    
    var item = $('#newItem').val();
    var context = { "listItem" : item };    
    // html = new list item
    var html = templateScript(context);

    // Insert the HTML code into the page
    $('#list').append(html);
    $('#newItem').val(null);
  });
  //added actions 
  //click to mark as done
  $('#list').on('click',function(){
    $('li').click(function(){
    $(this).addClass('completed'); 
   });
  });
  
  //change ui color 
  $('#uiBlue').on('click',function(){
   $('body').addClass('uiBlue');
   $('body').removeClass('uiDefault');
   $('body').removeClass('uiBlack');
  });
  
  $('#uiBlack').on('click',function(){
   $('body').addClass('uiBlack');
   $('body').removeClass('uiDefault');
   $('body').removeClass('uiBlue');
  });
  
  $('#uiDefault').on('click',function(){
   $('body').removeClass('uiBlue');
   $('body').removeClass('uiBlack');
  });
  
  //clear only selected li
  $('ul').on('click',function(){
   $('.close').click(function(){
      $(this).parent().remove();
    }) 
  });
  
  //clear every item
  $('#clear').on('click',function(){
     $('li').remove();
  });
  
  //show help instructions
  $('.help').on('click', function(){
    $('.helpShow').slideToggle('fast');
  });
  
  //sort which are done, send to bottom of list
  $('#sort').on('click', function(){
    if($('li').hasClass('completed')){
      $('.completed').detach().appendTo($('ul'));
         }
  });
  
});

