// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".new-burger-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#user-input").val().trim(),
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat").on("click", (event) => {
    event.preventDefault();
    var id = $(this).data("burgerid")

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});