function devlopedBy() {
  var alertDiv = document.createElement('div');
  alertDiv.className = 'custom-alert'; 
  alertDiv.innerHTML = `
    <p>Designed and Developed By <br> <span>Muhammad Sultan-Ul-Arifeen </span></p>
    <button id="alert-ok-btn">OK</button>
  `;

  var style = document.createElement('style');
  style.innerHTML = `
    .custom-alert {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5vh 6vw;
      background-color: #000;
      backdrop-filter: blur(10px);
      color: #fff;
      border-radius: 5px;
      text-align: center;
      z-index: 9999;
    }

    .custom-alert p {
      margin: 0 0 20px 0;
      font-size: 18px;
    }

    .custom-alert p span{
      color:#27E0B3;
    }

    .custom-alert button {
      padding: 1vh 3vw;
      background-color: #fff;
      color: #000;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: all ease 0.3s;
    }

    .custom-alert button:hover {
      background-color: #27E0B3;
    }
  `;

  document.head.appendChild(style); 
  document.body.appendChild(alertDiv);

  var okButton = document.getElementById('alert-ok-btn');
  okButton.addEventListener('click', function() {
    document.body.removeChild(alertDiv); 
  });
}

function mouseFollower() {
  // Add the cursor div inside the #main element
  var cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.getElementById('main').appendChild(cursor);

  // Add the CSS properties for the cursor
  cursor.style.position = 'fixed';
  cursor.style.top = '0';
  cursor.style.left = '0';
  cursor.style.width = '1.5vh';
  cursor.style.height = '1.5vh';
  cursor.style.transform = 'translate(-50% , -50%)';
  cursor.style.backgroundColor = '#27E0B3';
  cursor.style.zIndex = '9999';
  cursor.style.pointerEvents = 'none';
  cursor.style.borderRadius = '50%';
  cursor.style.transition = 'all 0.1s ease'; // Add this line to enable smooth transitions

  // Add the mousemove event listener
  document.addEventListener('mousemove', function(e) {
    // Update the cursor's position
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  // Add the mouseleave event listener to hide the cursor
  document.getElementById('main').addEventListener('mouseleave', function() {
    cursor.style.display = 'none';
  });

  // Add the mouseenter event listener to show the cursor
  document.getElementById('main').addEventListener('mouseenter', function() {
    cursor.style.display = 'block';
  });

  // Add the mouseover event listener to magnify the cursor over images
  document.addEventListener('mouseover', function(e) {
    if (e.target.tagName === 'IMG') {
      cursor.style.width = '6vh';
      cursor.style.height = '6vh';
      cursor.style.backgroundColor = 'transparent';
      cursor.style.backdropFilter = 'grayscale(100%)';
      cursor.style.border = '1px solid #ffffff6a';
      cursor.style.backdropFilter = 'blur(2px) brightness(0.8)';
    }
  });

  // Add the mouseout event listener to reset the cursor's properties
  document.addEventListener('mouseout', function(e) {
    if (e.target.tagName === 'IMG') {
      cursor.style.width = '1.5vh';
      cursor.style.height = '1.5vh';
      cursor.style.backgroundColor = '#27E0B3';
      cursor.style.filter = 'none';
    }
  });
}

devlopedBy();
mouseFollower();