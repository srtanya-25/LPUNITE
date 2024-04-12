window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// image slider

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
}
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + 'px';
  // 
  let last_active_dot = document.querySelector('.slider .dots li.active');
  last_active_dot.classList.remove('active');
  dots[active].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener('click', () => {
    active = key;
    reloadSlider();
  })
})

window.onresize = function (event) {
  reloadSlider();
};

// card effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;

    card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
  }

  card.addEventListener('mouseenter', () => {
    bounds = card.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  card.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', rotateToMouse);
    card.style.transform = '';
    card.querySelector('.glow').style.backgroundImage = '';
  });
});


// content change
// Get references to all buttons and content section
const genreButtons = document.querySelectorAll('.genre-button');
const mainContent = document.getElementById('mainContent');

// Add click event listener to each button
genreButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    // Get the data attribute value which specifies the content to display
    const contentId = this.getAttribute('data-content-id');

    // Update the main content based on the button clicked
    if (contentId === 'content1') {
      // Change to Tech
      mainContent.innerHTML = `
      <div class="card" onclick="redirectToProductDetail('1')">
        Tech
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('2')">
        Tech
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('3')">
        Tech
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('4')">
        Tech
        <div class="glow"></div>
      </div>
    `;
    } else if (contentId === 'content2') {
      // Change to Agriculture
      mainContent.innerHTML = `
      <div class="card" onclick="redirectToProductDetail('5')">
        Agriculture
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('6')">
        Agriculture
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('7')">
        Agriculture
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('8')">
        Agriculture
        <div class="glow"></div>
      </div>
    `;
    } else if (contentId === 'content3') {
      // Change to Sports
      mainContent.innerHTML = `
      <div class="card" onclick="redirectToProductDetail('9')">
        Sports
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('10')">
      Sports
      <div class="glow"></div>
      </div>
      <div class="card" onclick="redirectToProductDetail('11')">
        Sports
        <div class="glow"></div>
      </div>

      <div class="card" onclick="redirectToProductDetail('12')">
      Sports
      <div class="glow"></div>
      </div>
    `;
    } else if (contentId === 'content4') {
      // Change to Hackathons
      mainContent.innerHTML = `
    <div class="card" onclick="redirectToProductDetail('13')">
      Art
      <div class="glow"></div>
    </div>

    <div class="card" onclick="redirectToProductDetail('14')">
      Art
      <div class="glow"></div>
    </div>
    <div class="card" onclick="redirectToProductDetail('15')">
      Art
      <div class="glow"></div>
    </div>

    <div class="card" onclick="redirectToProductDetail('16')">
      Art
      <div class="glow"></div>
    </div>`;
    } else if (contentId === 'content5') {
      // Change to Hackathons
      mainContent.innerHTML = `
    <div class="card" onclick="redirectToProductDetail('17')">
    Culture
    <div class="glow"></div>
  </div>
  
  <div class="card" onclick="redirectToProductDetail('18')">
    Culture
    <div class="glow"></div>
  </div>
  <div class="card" onclick="redirectToProductDetail('19')">
    Culture
    <div class="glow"></div>
  </div>
  
  <div class="card" onclick="redirectToProductDetail('20')">
    Culture
    <div class="glow"></div>
  </div>`;
    }
    // Add more conditions for additional buttons if needed
  });
});
function redirectToProductDetail(productId) {
  window.location.href = `/detail.html?id=${productId}`;
}
