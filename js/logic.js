
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

//data fetch api using json
fetch("./upcoming.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  })
function appendData(data) {
  document.getElementById("upcomingCards").innerHTML = `
            ${data.map(function (events) {
    return `
       
                    <div class="upcomingCard">
                        <div class="upcomingCardleft">
                            <div class="date" data-aos="fade-up">
                                <span>${events.date}</span>${events.suffix}
                            </div>
                            <div class="month">${events.month}</div>
                        </div>
                        <div class="upcomingCardRight">
                            <h3 class="eventName" data-aos="fade-right">${events.eventName}</h3>
                            <h4 class="eventDetails" data-aos="fade-right">${events.eventDetails}</h4>
                            <div class="upLink" data-aos="fade-right"><a href="${events.link}">${events.linkText}</a></div>

                        </div>
                    </div>
    


                `
  }).join('')} 
        <div class="upcomingSeeMore"> <a href="">See More </a></div> 
            `
}