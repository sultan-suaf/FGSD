// Designed and Developed by Muhammad Sultan Ul arifeen 
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
// mouse follower function 
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
function backToTop() {
    var top = document.querySelector(".back-to-top");
    top.addEventListener("click", function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
// gallary images function 
function gallaryImages() {

 var image = [
  {
    url:  'Pic/gallery 1.png'   ,
    created:   'Created On: May 25, 2023'  ,
    name: 'Youm - e - Takreem Shuhada Day'   ,
  },
  {
    url:  'Pic/gallery 2.png'   ,
    created:   'Created On: May 19, 2023'  ,
    name: 'Tree Plantation Day'   ,
  },
  {
    url:  'Pic/gallery 4.png'   ,
    created:   'Created On: May 19, 2023'  ,
    name: 'Pakistan Resolution Day'   ,
  },

 ];
 var page3Bottom = document.querySelector(".page3-bottom");
 var imageHTML = '';
 image.forEach(function(item) {
  imageHTML += `
  <div class="page3-bottom-box">
                        <div class="img">
                            <img src="${item.url}" alt="">
                        </div>
                        <div class="text">
                            <h6>${item.created}</h6>
                            <h4>${item.name}</h4>
                            <button>View Gallery</button>
                        </div>
                    </div>
  `;
 });
 page3Bottom.innerHTML = imageHTML;



};

// news-box function 
function newsBox() {
  var news = [
    {
      title: 'BS Physics (Co-Education) - Apply for Pre-Admission Registration',
      content: 'We are pleased to announce the opening of pre-admission registration for the Bachelor of Science (BS) Physics program. This co-education program provides a comprehensive curriculum',
      date: '2022-01-15'
    },
    {
      title: ' BS IT- Pre-Admission Registration Open ',
      content: 'Welcome to the BS IT program at FG Science Degree College, affiliated with the prestigious University of Punjab. We are delighted to offer you an exceptional educational experience that',
      date: '2022-01-15'
    },
    
    {
      title: ' HSSC-I Pre-Admission Registration',
      content: 'Announcing HSSC-I pre-admissions Registration at FG Science Degree College Wah Cantt! Join us for a transformative educational journey, where academic excellence meets holistic',
      date: '2022-01-15'
    }
  ];

  var newsBox = document.querySelector('.news-page');
  var newsHTML = '';

  news.forEach(function(item) {
    newsHTML += `
      <div class="news-box">
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <button>Read More</button>
      </div>
    `;
  });

  newsBox.innerHTML = newsHTML;
}
backToTop();
gallaryImages();  
newsBox();
devlopedBy();
mouseFollower();