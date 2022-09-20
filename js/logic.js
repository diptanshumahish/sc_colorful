
//change theme;
const toggler = document.getElementById('themeChange');
const theme = window.localStorage.getItem("theme");
if (theme == "dark") {
  document.body.classList.add("dark");
}
toggler.addEventListener('click', function () {
  document.body.classList.toggle("dark");
  if (theme == "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
})
const mobToggle = document.getElementById('mobileToggle');
mobToggle.addEventListener('click', function () {
  document.body.classList.toggle("dark");
  if (theme == "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
})
//data fetch api using json for the upcoming events
fetch("./upcoming.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
function appendData(data) {
  document.getElementById("upcomingCards").innerHTML = `
            ${data.map(function (events) {
    return `
                    <div class="upcomingCard">
                        <div class="upcomingCardleft">
                            <div class="date">
                                <span>${events.date}</span>${events.suffix}
                            </div>
                            <div class="month">${events.month}</div>
                        </div>
                        <div class="upcomingCardRight">
                            <h3 class="eventName">${events.eventName}</h3>
                            <h4 class="eventDetails">${events.eventDetails}</h4>
                            <div class="upLink"><a href="${events.link}">${events.linkText}</a></div>

                        </div>
                    </div>
    


                `
  }).join('')} 
        <div class="upcomingSeeMore"> <a href="">See More </a></div> 
            `
}
//data fetch for the news cards
fetch("./news.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataNews(data);
  })
function appendDataNews(data) {
  document.getElementById("newsCards").innerHTML = `
            ${data.map(function (news) {
    return `
    <div class="newsCard">
    <div class="newsTopImage">
        <div class="newsTopInnerImage" style="
        background-image:url('${news.imageLink}');
        "></div>
    </div>
    <div class="newsBottomContent">
       <div class="newsMainText">
        <div class="newsBottomHeading" ">
            ${news.newsHeading}
        </div>
        <div class="newsBottomDetails">
            ${news.newsContent}
        </div>
       </div>
        <div class="newsBottomRow">
            <div class="newsDate"> ${news.newsDate}</div>
            <div class="newsSeeMore"> <a href="${news.clickLink}">See More</a></div>
        </div>
    </div>
</div>
    


                `
  }).join('')} 
            `
}

// loader
setTimeout(function () {
  document.getElementById('loader').style.display = "none";
  document.body.style.overflow = "scroll";
}, 2500);
setTimeout(function () {
  document.getElementById('loader').style.transform = "translateY(-100vh)";
}, 2200);

// toogling the menu 
const menuPage = document.getElementById('mobileMenuPage');
document.getElementById('mobielMenuToggle').addEventListener(('click'), function () {
  menuPage.style.display = "block";
  document.body.style.overflow = "hidden";
});
function closeMenu() {
  menuPage.style.display = "none";
  document.body.style.overflow = "scroll";
}