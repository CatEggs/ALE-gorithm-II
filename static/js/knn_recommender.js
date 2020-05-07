//----------------KNN RECOMMENDER JS SCRIPT-----------------//

// Function to display top 10 beer recommenders using KNN model
function buildKNNRecommender(beer_name){
    
    d3.json(`/neighbors/${beer_name}`).then(data => data.forEach(e => {
        console.log(data)
        let cardBody = d3.select("#top10neighbors")
            .append("div")
            .classed("card", true)
            .append("div")
            .classed("card-body", true)
        cardBody.append("h4")
            .classed("card-title", true)
            .text(e.name)
        cardBody.append("h6")
            .classed("card-subtitle mb-2 text-muted", true)
            .text(`Beer Style: ${e.style}`)
        cardBody.append("p")
            .classed("city", true)
            .text(`Beer Advocate Score: ${e.score_mean}`)
    }))
};


//-----------------FUNCTION INITIATOR-----------------//
function init() {
    d3.select('#top10neighbors').html(""),
    buildKNNRecommender('Abbey Ale; Brewery Ommegang');

}

//-------- Create Event Listener--------//
function optionChangedFour(newBeer) {
    beer_name = newBeer;
    console.log(beer_name)

    d3.select('#top10neighbors').html(""),
    buildKNNRecommender(beer_name);

}

// call init function 
init();