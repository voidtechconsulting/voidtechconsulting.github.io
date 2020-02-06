window.onscroll = function() {scrollFunction()};
var loadTimeline = true;
var loadCommunity = true;
var loadLearnMore = true;
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").classList.add("navbar-solid");
  } else {
    document.getElementById("navbar").classList.remove("navbar-solid");
  }
  loadTimeline = checkInView(loadTimeline, "timeline", ".timeline-box__side", "comeIn");
  loadCommunity = checkInView(loadCommunity, "mission", ".mission-box", "comeIn")
  loadLearnMore = checkInView(loadLearnMore, "learn-more", ".info-box-content", "comeIn")
}
function checkInView(notInView, section, box, anime) {
  if (notInView && document.getElementById(section).getBoundingClientRect().top + 100 < document.documentElement.clientHeight) {
    document.querySelectorAll(box).forEach((el) => {
      el.classList.add(anime);
    })
    return false;
  }
  return true;
}
document.querySelector(".void-logo").addEventListener("mouseover", spinny);
document.querySelector(".void-logo").addEventListener("mouseout", stopSpinny);
function spinny() {
  this.classList.add("infinite");
}
function stopSpinny() {
  this.classList.remove("infinite");
}
particlesJS("particles-js", {
    particles: {
      number: { value: 500, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#00000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: .9 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 50, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var update;
  update = function() {
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  document.querySelector('#site-name').classList.add("show");
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
