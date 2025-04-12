function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

document.addEventListener("DOMContentLoaded", function () {
  var clutter = "";

  document
    .querySelector(".manytext>h1")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
    });
  document.querySelector(".manytext>h1").innerHTML = clutter;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".manytext>h1 span", {
    scrollTrigger: {
      trigger: ".manytext>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: ".main",
      scrub: 0.5,
    },
    stagger: 0.2,
    color: "#fff",
  });
});

function canvas() {
  const canvas = document.querySelector(".page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./frames00007.png
./frames00010.png
./frames00013.png
./frames00016.png
./frames00019.png
./frames00022.png
./frames00025.png
./frames00028.png
./frames00031.png
./frames00034.png
./frames00037.png
./frames00040.png
./frames00043.png
./frames00046.png
./frames00049.png
./frames00052.png
./frames00055.png
./frames00058.png
./frames00061.png
./frames00064.png
./frames00067.png
./frames00070.png
./frames00073.png
./frames00076.png
./frames00079.png
./frames00082.png
./frames00085.png
./frames00088.png
./frames00091.png
./frames00094.png
./frames00097.png
./frames00100.png
./frames00103.png
./frames00106.png
./frames00109.png
./frames00112.png
./frames00115.png
./frames00118.png
./frames00121.png
./frames00124.png
./frames00127.png
./frames00130.png
./frames00133.png
./frames00136.png
./frames00139.png
./frames00142.png
./frames00145.png
./frames00148.png
./frames00151.png
./frames00154.png
./frames00157.png
./frames00160.png
./frames00163.png
./frames00166.png
./frames00169.png
./frames00172.png
./frames00175.png
./frames00178.png
./frames00181.png
./frames00184.png
./frames00187.png
./frames00190.png
./frames00193.png
./frames00196.png
./frames00199.png
./frames00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page3",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas();

document.addEventListener("DOMContentLoaded", function () {
  var clutter = "";

  document
    .querySelector(".page4>h1")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
    });
  document.querySelector(".page4>h1").innerHTML = clutter;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".page4>h1 span", {
    scrollTrigger: {
      trigger: ".page4>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: ".main",
      scrub: 0.5,
    },
    stagger: 0.2,
    color: "#fff",
  });
});

function canvas1() {
  const canvas = document.querySelector(".page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./bridges00004.png
./bridges00007.png
./bridges00010.png
./bridges00013.png
./bridges00016.png
./bridges00019.png
./bridges00022.png
./bridges00025.png
./bridges00028.png
./bridges00031.png
./bridges00034.png
./bridges00037.png
./bridges00040.png
./bridges00043.png
./bridges00046.png
./bridges00049.png
./bridges00052.png
./bridges00055.png
./bridges00058.png
./bridges00061.png
./bridges00064.png
./bridges00067.png
./bridges00070.png
./bridges00073.png
./bridges00076.png
./bridges00079.png
./bridges00082.png
./bridges00085.png
./bridges00088.png
./bridges00091.png
./bridges00094.png
./bridges00097.png
./bridges00100.png
./bridges00103.png
./bridges00106.png
./bridges00109.png
./bridges00112.png
./bridges00115.png
./bridges00118.png
./bridges00121.png
./bridges00124.png
./bridges00127.png
./bridges00130.png
./bridges00133.png
./bridges00136.png
./bridges00139.png
./bridges00142.png
./bridges00145.png
./bridges00148.png
./bridges00151.png
./bridges00154.png
./bridges00157.png

`;
    return data.split("\n")[index];
  }

  const frameCount = 56;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page5",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas1();

document.addEventListener("DOMContentLoaded", function () {
  var clutter = "";

  document
    .querySelector(".page6>h1")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
    });
  document.querySelector(".page6>h1").innerHTML = clutter;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".page6>h1 span", {
    scrollTrigger: {
      trigger: ".page6>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: ".main",
      scrub: 0.5,
    },
    stagger: 0.2,
    color: "#fff",
  });
});

// function canvas2() {
//   gsap.registerPlugin(ScrollTrigger);
//   const canvas = document.querySelector(".page7>canvas");
//   const context = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });
//   function files(index) {
//     var data = `

//   ./1.webp
//   ./2.webp
//   ./3.webp
//   ./4.webp
//   ./5.webp
//   ./6.webp
//   ./7.webp
//   ./8.webp
//   ./9.webp
//   ./10.webp
//   ./11.webp
//   ./12.webp
//   ./13.webp
//   ./14.webp
//   ./15.webp
//   ./16.webp
//   ./17.webp
//   ./18.webp
//   ./19.webp
//   ./20.webp
//   ./21.webp
//   ./22.webp
//   ./23.webp
//   ./24.webp
//   ./25.webp
//   ./26.webp
//   ./27.webp
//   ./28.webp
//   ./29.webp
//   ./30.webp
//   ./31.webp
//   ./32.webp
//   ./33.webp
//   ./34.webp
//   ./35.webp
//   ./36.webp
//   ./37.webp
//   ./38.webp
//   ./39.webp
//   ./40.webp
//   ./41.webp
//   ./42.webp
//   ./43.webp
//   ./44.webp
//   ./45.webp
//   ./46.webp
//   ./47.webp
//   ./48.webp
//   ./49.webp
//   ./50.webp
//   ./51.webp
//   ./52.webp
//   ./53.webp
//   ./54.webp
//   ./55.webp
//   ./56.webp
//   ./57.webp
//  ./58.webp
//  ./59.webp
//  ./60.webp
//  ./61.webp
//  ./62.webp
//  ./63.webp
//  ./64.webp
//  ./65.webp
//  ./66.webp
//  ./67.webp
//  ./68.webp
//  ./69.webp
//  ./70.webp
//  ./71.webp
//  ./72.webp
//  ./73.webp
//  ./74.webp
//  ./75.webp
//  ./76.webp
//  ./77.webp
//  ./78.webp
//  ./79.webp
//  ./80.webp
//  ./81.webp
//  ./82.webp
//  ./83.webp
//  ./84.webp
//  ./85.webp
//  ./86.webp
//  ./87.webp
//  ./88.webp
//  ./89.webp
//  ./90.webp
//  ./91.webp
//  ./92.webp
//  ./93.webp
//  ./94.webp
//  ./95.webp
//  ./96.webp
//  ./97.webp
//  ./98.webp
//  ./99.webp
//  ./100.webp
//  ./101.webp
//  ./102.webp
//  ./103.webp
//  ./104.webp
//  ./105.webp
//  ./106.webp
//  ./107.webp
//  ./108.webp
//  ./109.webp
//  ./110.webp
//  ./111.webp
//  ./112.webp
//  ./113.webp
//  ./114.webp
//  ./115.webp
//  ./116.webp
//  ./117.webp
//  ./118.webp
//  ./119.webp
//  ./120.webp
//  ./121.webp
//  ./122.webp
//  ./123.webp
//  ./124.webp
//  ./125.webp
//  ./126.webp
//  ./127.webp
//  ./128.webp
//  ./129.webp
//  ./130.webp
//  ./131.webp
//  ./132.webp
//  ./133.webp
//  ./134.webp
//   ./135.webp
//   ./136.webp

//   `;
//     return data.split("\n")[index];
//   }

//   const frameCount = 136;

//   const images = [];
//   const imageSeq = {
//     frame: 1,
//   };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     img.onload = function () {
//       render(); // Call render once the image is loaded
//     };
//     images.push(img);
//   }

//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: 0.5,
//       trigger: `.page7`,
//       start: `top top`,
//       end: `250% top`,
//       scroller: `.main`,
//     },
//     onUpdate: render,
//   });

//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }

//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   ScrollTrigger.create({
//     trigger: ".page7",
//     pin: true,
//     scroller: `.main`,
//     start: `top top`,
//     end: `250% top`,
//   });
// }

// canvas2();

function canvas2() {
  gsap.registerPlugin(ScrollTrigger);
  const canvas = document.querySelector(".page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      ./1.webp
      ./2.webp
      ./3.webp
      ./4.webp
      ./5.webp
      ./6.webp
      ./7.webp
      ./8.webp
      ./9.webp
      ./10.webp
      ./11.webp
      ./12.webp
      ./13.webp
      ./14.webp
      ./15.webp
      ./16.webp
      ./17.webp
      ./18.webp
      ./19.webp
      ./20.webp
      ./21.webp
      ./22.webp
      ./23.webp
      ./24.webp
      ./25.webp
      ./26.webp
      ./27.webp
      ./28.webp
      ./29.webp
      ./30.webp
      ./31.webp
      ./32.webp
      ./33.webp
      ./34.webp
      ./35.webp
      ./36.webp
      ./37.webp
      ./38.webp
      ./39.webp
      ./40.webp
      ./41.webp
      ./42.webp
      ./43.webp
      ./44.webp
      ./45.webp
      ./46.webp
      ./47.webp
      ./48.webp
      ./49.webp
      ./50.webp
      ./51.webp
      ./52.webp
      ./53.webp
      ./54.webp
      ./55.webp
      ./56.webp
      ./57.webp
     ./58.webp
     ./59.webp
     ./60.webp
     ./61.webp
     ./62.webp
     ./63.webp
     ./64.webp
     ./65.webp
     ./66.webp
     ./67.webp
     ./68.webp
     ./69.webp
     ./70.webp
     ./71.webp
     ./72.webp
     ./73.webp
     ./74.webp
     ./75.webp
     ./76.webp
     ./77.webp
     ./78.webp
     ./79.webp
     ./80.webp
     ./81.webp
     ./82.webp
     ./83.webp
     ./84.webp
     ./85.webp
     ./86.webp
     ./87.webp
     ./88.webp
     ./89.webp
     ./90.webp
     ./91.webp
     ./92.webp
     ./93.webp
     ./94.webp
     ./95.webp
     ./96.webp
     ./97.webp
     ./98.webp
     ./99.webp
     ./100.webp
     ./101.webp
     ./102.webp
     ./103.webp
     ./104.webp
     ./105.webp
     ./106.webp
     ./107.webp
     ./108.webp
     ./109.webp
     ./110.webp
     ./111.webp
     ./112.webp
     ./113.webp
     ./114.webp
     ./115.webp
     ./116.webp
     ./117.webp
     ./118.webp
     ./119.webp
     ./120.webp
     ./121.webp
     ./122.webp
     ./123.webp
     ./124.webp
     ./125.webp
     ./126.webp
     ./127.webp
     ./128.webp
     ./129.webp
     ./130.webp
     ./131.webp
     ./132.webp
     ./133.webp
     ./134.webp
      ./135.webp
      ./136.webp
      `;
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    img.onload = function () {
      render(); // Call render once the image is loaded
    };
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: ".page7",
      start: "top top",
      end: "250% top",
      scroller: ".main",
    },
    onUpdate: render,
  });

  function render() {
    if (images[imageSeq.frame].complete) {
      scaleImage(images[imageSeq.frame], context);
    }
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: ".page7",
    pin: true,
    scroller: ".main",
    start: "top top",
    end: "250% top",
  });
}

canvas2();

gsap.to(".page7-circle", {
  scrollTrigger: {
    trigger: ".page7-circle",
    start: ` top center`,
    end: ` bottom top`,
    scroller: `.main`,
    scrub: 0.5,
  },
  scale: 1.5,
  opacity: 1,
});

gsap.to(".inner-cir", {
  scrollTrigger: {
    trigger: ".page7-circle",
    start: ` top center`,
    end: ` bottom top`,
    scroller: `.main`,
    scrub: 0.5,
  },
  backgroundColor: `#0a3bce91`,
  opacity: 1,
});

document.querySelector(".left1").addEventListener("wheel", (event) => {
  event.preventDefault();
  const scrollAmount = 500; // Adjust the value to set scrolling speed
  document.querySelector(".left1").scrollBy({
    top: event.deltaY * scrollAmount,
    behavior: "smooth",
  });
});

function canvas3() {
  gsap.registerPlugin(ScrollTrigger);
  const canvas = document.querySelector(".right1 > canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    ./rotate1.jpg
    ./rotate2.jpg
    ./rotate3.jpg
    ./rotate4.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 4;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.2,
      trigger: ".right1",
      start: "top bottom",
      end: "150% top",
      scroller: ".main",
    },
    onUpdate: render,
  });

  Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          img.onload = resolve;
        })
    )
  ).then(() => {
    render();
  });

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx, scale = 2) {
    var canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var imageAspectRatio = img.width / img.height;
    var canvasAspectRatio = canvas.width / canvas.height;

    var renderableHeight, renderableWidth, xStart, yStart;

    // Calculate the fitting dimensions
    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = img.width * (renderableHeight / img.height);
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    } else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = img.height * (renderableWidth / img.width);
      xStart = 0;
      yStart = (canvas.height - renderableHeight) / 2;
    } else {
      // If aspect ratios are the same, no need to adjust dimensions
      renderableHeight = canvas.height;
      renderableWidth = canvas.width;
      xStart = 0;
      yStart = 0;
    }

    // Draw the image onto the canvas
    ctx.drawImage(img, xStart, yStart, renderableWidth, renderableHeight);
  }

  const left1 = document.querySelector(".left1");
  const main = document.querySelector(".main");

  left1.addEventListener("scroll", function () {
    const isScrolledToBottom =
      left1.scrollHeight - left1.clientHeight <= left1.scrollTop + 1;

    if (isScrolledToBottom) {
      // If scrolled to the bottom of left1, allow main to scroll
      main.classList.remove("scroll-lock");
    } else {
      // If scrolling inside left1, stop main from scrolling
      main.classList.add("scroll-lock");
    }
  });

  ScrollTrigger.create({
    trigger: ".right1",
    pin: false,
    scroller: ".main",
    start: "top center",
    end: () => {
      const page11Height = document.querySelector(".right1").scrollHeight;
      return "+=" + page11Height;
    },
    onUpdate: handleScroll,
    onLeaveBack: () => handleScroll(false),
    onEnterBack: () => handleScroll(true),
  });

  function handleScroll(shouldLockScroll) {
    const body = document.body;
    if (shouldLockScroll) {
      body.classList.add("scroll-lock");
    } else {
      body.classList.remove("scroll-lock");

      // Check if you have reached the bottom of the left1 div
      const isScrolledToBottom =
        left1.scrollTop === left1.scrollHeight - left1.clientHeight;

      // If you are at the bottom, scroll to the next section or div
      if (isScrolledToBottom) {
        scrollToNextSection();
      }
    }
  }

  function scrollToNextSection() {
    // Replace this with your actual logic to find and scroll to the next section
    const nextPage = left1.nextElementSibling;
    if (nextPage) {
      // Check if there is a next page in the "main" container
      nextPage.scrollIntoView({ behavior: "smooth" });
    } else {
      // If there is no next page in the "main" container, scroll to the next section in the same page
      const page11Height = document.querySelector(".right1").offsetHeight;
      window.scrollBy({ top: page11Height, left: 0, behavior: "smooth" });
    }
  }
}

canvas3();
