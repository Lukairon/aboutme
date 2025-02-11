// Credits (use cases are indicated above functions)
// David Lange @ https://blog.finiam.com/blog/spotlight-effect-with-js-and-css
// freecodecamp.org
// VineetKumar02's Parallax-Website @ https://github.com/VineetKumar02/Parallax-Website
// --------------------------------------------------------------
// Allow DOM content to load before everything
document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------
    // Get elements with event listeners
    const plane = document.getElementById('scroll-icon');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');
    const button5 = document.getElementById('button5');
    const navBarHighlightText = document.getElementById("navbar-highlight-text");
    const scrollHighlightText = document.getElementById("scroll-highlight-text");
    const torchHighlightText = document.getElementById("torch-highlight-text");
    const tiltHighlightText = document.getElementById("tilt-highlight-text");
    const navbar = document.querySelector(".navbar");
    const whiteArrow = document.getElementById("white-arrow");
    // --------------------------------------------------------------
    // Global vars
    const pageHeight = document.body.scrollHeight;
    // --------------------------------------------------------------
    // Resetting page
    scrollToCenter("content1");
    // --------------------------------------------------------------
    // Spotlight - credits to David Lange @ https://blog.finiam.com/blog/spotlight-effect-with-js-and-css
    const spotlightEl = document.querySelector("#spotlight");

    function handleMouseMove(event) {
        const {
            clientX,
            clientY
        } = event;
        spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #ffdabf00 10px, #070300ec 500px)`;
    }
    document.addEventListener("mousemove", handleMouseMove)
    // --------------------------------------------------------------
    // Highlight navbar on hover over "navigation bar" highlight
    navBarHighlightText.addEventListener("mouseenter", () => {
        navbar.style.backgroundColor = `rgba(255, 255, 255, 0.3)`;
    });
    navBarHighlightText.addEventListener("mouseleave", () => {
        navbar.style.backgroundColor = ""; // Reset to original
    });
    // --------------------------------------------------------------
    // Arrow animation on hover over "scroll" highlight
    scrollHighlightText.addEventListener("mouseenter", () => {
        whiteArrow.style.visibility = "visible";
        whiteArrow.style.transition = `transform 1s ease-in-out`;
        whiteArrow.style.transform = `translateY(300vh) rotate(90deg)`;
    });
    scrollHighlightText.addEventListener("mouseleave", () => {
        whiteArrow.style.transition = `none`;
        whiteArrow.style.transform = `rotate(90deg)`;
    });
    // --------------------------------------------------------------
    // Brighten torch on hover over "illuminate" highlight
    torchHighlightText.addEventListener("mouseenter", () => {
        spotlightEl.style.opacity = `0.7`;
    });
    torchHighlightText.addEventListener("mouseleave", () => {
        spotlightEl.style.opacity = `1`;
    });
    // --------------------------------------------------------------
    // Tilt ship on hover over "tilt" highlight - asynchronous functions supported by freecodecamp.org
    let isScrolling = false;
    tiltHighlightText.addEventListener("mouseenter", async () => {
        if (isScrolling) return;
        isScrolling = true;
        await smoothScroll(100);
    });
    tiltHighlightText.addEventListener("mouseleave", async () => {
        await smoothScroll(-100);
        isScrolling = false; // Only allow new mouseenter after scroll resets
    });

    function smoothScroll(offset) {
        return new Promise((resolve) => {
            window.scrollBy({
                top: offset,
                behavior: "smooth"
            });
            setTimeout(resolve, 300); // Adjust timeout based on scroll speed
        });
    }
    // --------------------------------------------------------------
    // On scroll functions
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        let maxScroll = pageHeight - window.innerHeight;
        let maxTranslate = window.innerWidth - 147;
        let position = (scrollPosition / maxScroll) * maxTranslate;
        const num_items = 8;
        // --------------------------------------------------------------
        // Background parallax - inspired by VineetKumar02's Parallax-Website @ https://github.com/VineetKumar02/Parallax-Website
        const scrollPositionSquared = Math.pow(scrollPosition / maxScroll, 1);
        const horScrollMod = scrollPositionSquared * maxTranslate;
        const vertScrollMod = scrollPositionSquared * maxScroll;
        let items = [];
        for (let i = 1; i <= num_items; i++) {
            items.push(document.getElementById('item' + i));
        }
        const item1 = items[0];
        const item2 = items[1];
        const item3 = items[2];
        const item4 = items[3];
        const item5 = items[4];
        const item6 = items[5];
        const item7 = items[6];
        const item8 = items[7];
        console.log(scrollPositionSquared);
        item1.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${scrollPositionSquared * 20}vw) rotate(${scrollPosition * 0.05 + 50}deg)`;
        item2.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${-scrollPositionSquared * 20}vw) rotate(${scrollPosition * -0.05 + 20}deg)`;
        item3.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${scrollPositionSquared * 20}vw) rotate(${scrollPosition * 0.1 + 80}deg)`;
        item4.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${-scrollPositionSquared * 20}vw) rotate(${scrollPosition * -0.1 + 100}deg)`;
        item5.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${scrollPositionSquared * 20}vw) rotate(${scrollPosition * -0.07 + 90}deg)`;
        item6.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${-scrollPositionSquared * 20}vw) rotate(${scrollPosition * 0.07 + 10}deg)`;
        item7.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${scrollPositionSquared * 20}vw) rotate(${scrollPosition * 0.07 + 90}deg)`;
        item8.style.transform = `translateY(${vertScrollMod * 0.24}px) translateX(${scrollPositionSquared * 20}vw) rotate(${scrollPosition * 0.03 + 60}deg)`;
        // --------------------------------------------------------------
        // Location bar (deleted)
        //plane.style.transform = `translateX(${position}px) rotate(180deg)`;
    });
    // --------------------------------------------------------------
    // Scroll on hover functions
    button1.addEventListener('mouseover', () => {
        scrollToCenter("content1");
    });
    button2.addEventListener('mouseover', () => {
        scrollToCenter("content2");
    });
    button3.addEventListener('mouseover', () => {
        scrollToCenter("content3");
    });
    button4.addEventListener('mouseover', () => {
        scrollToCenter("content4");
    });
    button5.addEventListener('mouseover', () => {
        scrollToCenter("content5");
    });
    // --------------------------------------------------------------
    // Scroll on hover helper function
    function scrollToCenter(element) {
        document.getElementById(element).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    }
});
