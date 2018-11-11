// Check off completed to do items.
$("#list").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Delete a to do item
$("#list").on("click", "span", function(event) {
  $(this)
    .parent()
    .remove();
  //     .fadeOut(500, function() {
  //       $(this).remove();
  //     });
  //   event.stopPropagation();
});

$('input[type="text"]').keypress(function(event) {
  if (event.which === 13) {
    // User to do variable
    let toDoText = $(this).val();
    $(this).val("");
    // Add to do to list
    $("#list").append(
      '<li><span><i class="fas fa-trash-alt"></i></span> ' + toDoText + "</li>"
    );
  }
});

// Toggle input with plus icon
$(".fa-plus").on("click", function() {
  $('#input[type="text"]').toggle();
});
