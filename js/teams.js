
//data fetch for the news cards
fetch("../teams/tech.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendDataTech(data);
    })
function appendDataTech(data) {
    document.getElementById("techCards").innerHTML = `
            ${data.map(function (tech) {
        return `
    <div class="techCard">
    <div class="techTopImage">
        <div class="techTopInnerImage" style="
                background-image:url('${tech.imageLink}')
        ">

        </div>
    </div>
    <div class="techBottomContent">
        <div class="techBottomName">
            ${tech.name}
        </div>
        <div class="techBottomDetails">
            ${tech.Content}
        </div>
        <div class="techBottomConnect">
            Connect
        </div>
    </div>
</div>
                `
    }).join('')} 
            `
}
