document
  .getElementById("subscribe-button")
  .addEventListener("click", function () {
    var email = document.getElementById("email-address").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for email validation

    // Check if email is valid
    if (emailPattern.test(email)) {
      // Create the toast element for success
      var toast = document.createElement("div");
      toast.classList.add(
        "toast",
        "absolute",
        "bottom-5",
        "right-5",
        "z-50",
        "opacity-0",
        "transition-opacity",
        "duration-300",
        "ease-in-out"
      );
      toast.innerHTML = `
        <div class="alert alert-success relative">
            <span>Subscription Successful. Thank you for subscribing!</span>
            <button class="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200 font-semibold text-lg" onclick="this.parentElement.remove()">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    `;

      // Append toast to the container
      document.getElementById("toast-container").appendChild(toast);

      // Trigger toast fade-in effect
      setTimeout(function () {
        toast.classList.add("opacity-100");
      }, 10);

      // Automatically remove the toast after 7 seconds
      setTimeout(function () {
        toast.classList.remove("opacity-100");
        setTimeout(function () {
          toast.remove();
        }, 300); // Wait for the fade-out animation
      }, 7000);
    } else {
      // Create the toast element for error
      var errorToast = document.createElement("div");
      errorToast.classList.add(
        "toast",
        "absolute",
        "bottom-5",
        "right-5",
        "z-50",
        "opacity-0",
        "transition-opacity",
        "duration-300",
        "ease-in-out"
      );
      errorToast.innerHTML = `
        <div class="alert alert-error relative">
            <span>Invalid Email Address. Please enter a valid email address.</span>
            <button class="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200 font-semibold text-lg" onclick="this.parentElement.remove()">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    `;

      // Append error toast to the container
      document.getElementById("toast-container").appendChild(errorToast);

      // Trigger toast fade-in effect
      setTimeout(function () {
        errorToast.classList.add("opacity-100");
      }, 10);

      // Automatically remove the error toast after 7 seconds
      setTimeout(function () {
        errorToast.classList.remove("opacity-100");
        setTimeout(function () {
          errorToast.remove();
        }, 300); // Wait for the fade-out animation
      }, 7000);
    }
  });

//

document.addEventListener("DOMContentLoaded", function () {
  // Function to animate numbers
  function animateNumbers() {
    const elements = document.querySelectorAll(".animate-number");
    elements.forEach((element) => {
      const target = parseInt(element.getAttribute("data-target"), 10);
      let current = 0;
      const increment = Math.ceil(target / 100); // Adjust speed here
      const duration = 2000; // Duration of the animation
      const stepTime = Math.abs(Math.floor(duration / target));

      const updateNumber = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(updateNumber);
        }
        element.innerText = current.toLocaleString();
      }, stepTime);
    });
  }

  // Start animation when the number section is visible
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger animation when 50% of the section is in view
    }
  );

  // Target the number elements
  document.querySelectorAll(".animate-number").forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to animate down-to-up animation
  function animateFeatures() {
    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "transition-all",
                "duration-700"
              );
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is in view
        }
      );

      observer.observe(item);
    });
  }

  animateFeatures();
});
