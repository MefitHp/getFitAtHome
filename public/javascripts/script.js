$('#1').click(function () {
  $('#step1Tab').click()
});

$('#2_next').click(function () {
  $('#step2Tab').click()
});
$('#2_previous').click(function () {
  $('#step2Tab').click()
});

$('#3_next').click(function () {
  $('#step3Tab').click()
});

$('#3_previous').click(function () {
  $('#step3Tab').click()
});

$('#4_next').click(function () {
  $('#step4Tab').click()
});

$('#4_previous').click(function () {
  $('#step4Tab').click()
});

$('.fa.fa-expand').on("click", function () {
  $('.recipe-card').toggleClass("expand");
})

$('#datetimepicker').datetimepicker({
  icons: {
    time: "fa fa-clock-o",
    date: "fa fa-calendar",
    up: "fa fa-chevron-up",
    down: "fa fa-chevron-down",
    previous: 'fa fa-chevron-left',
    next: 'fa fa-chevron-right',
    today: 'fa fa-screenshot',
    clear: 'fa fa-trash',
    close: 'fa fa-remove'
  }

});