//data fetch api using json for the upcoming events
console.log("hello");
fetch("../gal.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData3(data);
    })
function appendData3(data) {
    document.getElementById("galCardsArea").innerHTML = `
            ${data.map(function (gal) {
        return `
        <div class="galCard" 
        style="background-image:url('${gal.image}');
        background-position:center;
       
        background-size:cover;
        ">
        <div class="galCardFilter">
            <div class="galCardContent">
                <div class="galContentHeading">
                    ${gal.title}
                </div>
                <div class="galContentBottomPart">
                    <div class="galsubHeading">
                        ${gal.content}
                    </div>
                    <div class="galDate">
                        ${gal.Date}
                    </div>
                </div>
            </div>
        </div>
    </div>


                `
    }).join('')} 
        
            `
}