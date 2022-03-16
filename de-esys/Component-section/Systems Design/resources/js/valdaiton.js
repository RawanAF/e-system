/* component form  valdaiton */

   
$("#btn").click(function(){
   
$('#msform1').validate({
rules : {
    txt: "required",
    select: "required",
    check1: "required",
    check2: "required",
    radio1: "required",
    cal: "required",
    email: {
        required: true,
        email: true
    },
    Phone: {
        required: true,
        minlength: 9,
        digits: true ,
        maxlength:9
        
    },
    textarea: {
        required: true,
        maxlength: 20,
    },

},
messages: {
    txt: "حقل الإسم مطلوب",
    select: "الرجاء إختيار احد الخيارات",
    check1: "هذا الحقل مطلوب",
    check2: "هذا الحقل مطلوب",
    radio1: "الرجاء إختيار احد الخيارين ",
    cal: "حقل التاريخ مطلوب",
    email: {
        required: "الرجاء إدخال بريدك الالكتروني",
        email: "الرجاء إدخال بريد الالكتروني صالح"
    },
    Phone: {
        required: "حقل الجوال مطلوب",
        minlength: "رقم الجوال يتكون من 9 ارقام بدون الصفر",
        maxlength: "رقم الجوال يتكون من 9 ارقام بدون الصفر",
        digits: "هذا الحقل لايقبل الا ارقام فقط",
    },
    textarea: {
        required: "حقل الملاحظات مطلوب",
        maxlength: "اكثر عدد حروف يمكن إدخاله فى الملاحظات هو 20 حرف ",
    },

 
},

});
if (!$('#msform1').valid()) {
    return false;
}

$(".submit").click(function(){
return false;
});
});

    /* component form  valdaiton end  */


    $(function () {
        $('#datepicker').datepicker();

    });
    