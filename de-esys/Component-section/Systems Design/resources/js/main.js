
/* date picker */
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    onClose: function (dateText, inst) {
      $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
    }
  });
});



  /* steps form rules: {
             phno: {
               required: true,
               minlength: 3,
               digits: true
             }
           } */
   //jQuery time
   var current_fs, next_fs, previous_fs; //fieldsets
   var opacity;
   var current = 1;
   var steps = $("fieldset").length;
   
   setProgressBar(current);
   
   $(".next").click(function(){
   
     $('#msform').validate();
   if (!$('#msform').valid()) {
       return false;
   }
   
   current_fs = $(this).parent();
   next_fs = $(this).parent().next();
   
   //Add Class Active
   $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
   
   //show the next fieldset
   next_fs.show();
   //hide the current fieldset with style
   current_fs.animate({opacity: 0}, {
   step: function(now) {
   // for making fielset appear animation
   opacity = 1 - now;
   
   current_fs.css({
   'display': 'none',
   'position': 'relative'
   });
   next_fs.css({'opacity': opacity});
   },
   duration: 500
   });
   setProgressBar(++current);
   });
   
   $(".previous").click(function(){
   
   current_fs = $(this).parent();
   previous_fs = $(this).parent().prev();
   
   //Remove class active
   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
   
   //show the previous fieldset
   previous_fs.show();
   
   //hide the current fieldset with style
   current_fs.animate({opacity: 0}, {
   step: function(now) {
   // for making fielset appear animation
   opacity = 1 - now;
   
   current_fs.css({
   'display': 'none',
   'position': 'relative'
   });
   previous_fs.css({'opacity': opacity});
   },
   duration: 500
   });
   setProgressBar(--current);
   });
   
   function setProgressBar(curStep){
   var percent = parseFloat(100 / steps) * curStep;
   percent = percent.toFixed();
   $(".progress-bar")
   .css("width",percent+"%")
   }
   
   $(".submit").click(function(){
   return false;
   });




         $('#example11').DataTable({
             dom: 'Bfltip',
             buttons: [
                 {
                     extend: 'print',
                 },
                 {
                     extend: 'excel',
                 },

             ],
             "language": {
                 "search": "??????:",
                 "zeroRecords": "???? ???????? ?????????? ??????????",
                 "emptyTable": "???? ???????? ???????????? ???? ?????? ????????????",
                 "lengthMenu": " ?????? _MENU_ ?????? ",
                 "info": "?????? ?????????????? ???? _START_ ??  _END_ ???? ?????????? ?????????????? _TOTAL_",
                 "infoFiltered": "(?????????? ?????????? ??????????????  _MAX_ )",
                 "infoEmpty": "???? ???????? ?????????? ???????????? ??????????",
                 "paginate": {
                     "first": "??????????",
                     "last": "????????????",
                     "next": "????????????",
                     "previous": "????????????"
                 }
                 ,
                 "buttons": {
                     "print": "??????????",
                     "excel": "????????",
                 },

             }
        });
    

