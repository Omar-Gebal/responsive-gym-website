function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

 obj = document.getElementById("value");
animateValue(obj, 0, 11, 4000);

 obj = document.getElementById("project");
animateValue(obj, 0, 49, 4000);

 obj = document.getElementById("client");
animateValue(obj, 0, 168, 4000);


 obj = document.getElementById("coffee");
 animateValue(obj, 0, 316, 4000);