// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour_it").on("click", function (event) {
      var id = $(this).data("id");
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function () {
          console.log("burger devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let burger = $("#burger").val().trim()
      let newBurger = {
        burger_name: burger
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });