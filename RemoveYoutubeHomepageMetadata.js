const my_elements = document.querySelectorAll(
  "div.yt-lockup-view-model__metadata"
);

my_elements.forEach(function (element) {
  element.remove();
});
