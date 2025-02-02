// Function to animate the counter
function startCounting(target, duration) {
  let count = 0;
  let step = target / (duration / 50); // Calculate step based on duration

  let counter = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(counter);
    }
    document.getElementById("facultyCount").innerText = Math.floor(count) + "+";
  }, 50); // Update every 50ms
}

// Call the function with the target number and duration in ms
window.onload = function () {
  startCounting(200, 5000); // Count up to 200 in 5 seconds
};

document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".quote img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add("show");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(img);
});
