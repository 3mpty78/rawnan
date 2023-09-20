let sphere = document.querySelector(".circle");
//Detect touch device
function isTouchDevice() {
      try {
            //We try to create TouchEvent. It would fail for desktops and throw error
            document.createEvent("TouchEvent");
            return true;
      } catch (e) {
            return false;
      }
}

const move = (e) => {
      //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
      try {
            //PageX and PageY return the position of client's cursor from top left of screen
            var x = !isTouchDevice() ? e.clientX : e.touches[0].pageX;
            var y = !isTouchDevice() ? e.clientY : e.touches[0].pageY;
      } catch (e) {}
      //set left and top of div based on mouse position
      sphere.style.left = x - 5 + "px";
      sphere.style.top = y - 5 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
      move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
      move(e);
});
