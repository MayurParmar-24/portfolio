// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Function to transform elements into spans for animation
    function revealToSpan() {
        document.querySelectorAll(".reveal").forEach(function (elem) {
            var Parent = document.createElement("span");
            var Child = document.createElement("span");

            Parent.classList.add("parent");
            Child.classList.add("child");

            Child.textContent = elem.textContent; // Safe assignment of text content
            Parent.appendChild(Child);

            elem.innerHTML = ""; // Clear the original content
            elem.appendChild(Parent); // Add the new structure
        });
    }

    // Call the function to prepare elements for animation
    revealToSpan();

    // GSAP animation timeline
    var tl = gsap.timeline();

    // Animate child elements
    tl
        .from(".child span", {
            x: 100,
            opacity: 0, // Ensure visibility
            stagger: 0.2,
            duration: 1.6,
            ease: "power3.inOut",
        })
        // Animate parent-child relationship
        .to(".parent .child", {
            y: "-100%",
            duration: 1,
            ease: "circ.inOut",
        })
        // Hide the loader
        .to("#loader", {
            height: 0,
            duration: 1,
            ease: "circ.inOut",
        })
        // Show the green section
        .to("#green", {
            height: "100%",
            duration: 1,
            ease: "circ.inOut",
        });
});
