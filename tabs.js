document.addEventListener("DOMContentLoaded", function() {
  var tabs = document.querySelectorAll("tab");
  var formContents = document.querySelectorAll(".form-contents > div");

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });

      this.classList.add("active");

      formContents.forEach(function(formContent) {
        formContent.style.display = "none";
      });

      var target = this.getAttribute("data-target");

      document.getElementById(target).style.display = "block";
    });
  });
});