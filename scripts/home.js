$(document).ready(function() {
  $('.drawer').drawer();
  console.log("ready");
});

function openMenu() {
  $('.drawer').drawer('toggle');
  console.log("open");
}
