anychart.onDocumentReady(function () {
    var data = [];
    const set_data = {}
    hotel_data.forEach((hotel) => {
        if (hotel["features"]) hotel["features"].forEach((feature) => set_data[feature] = set_data[feature] ? set_data[feature] + 1 : 1)
    })
    for (feature of Object.keys(set_data)) {
        data.push({ "x": feature, "value": set_data[feature] })
    }
    data.sort((feature1, feature2) => {
        return feature2["value"] - feature1["value"]
    })
    data = data.slice(0, 50)
    // create a tag (word) cloud chart
    const chart = anychart.tagCloud(data);

    // set a chart title
    chart.title('50 most common features/services provided')
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(false);
    // set the color range length
    chart.colorRange().length('80%');

    // display the word cloud chart
    chart.container("chart");
    chart.draw();
});