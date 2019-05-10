
$(document).ready(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });
});

$(document).ready(function(){
$('.btn').click(function(){
$('.btn').removeClass('btn-active');
$(this).toggleClass('btn-active');
});
});
