const update_radar_chart = (chart, hotel_data) => {
    chart.options.plugins.title.text = `Scores of ${hotel_data["name"]}`
    chart.data.labels = hotel_data["scores"].map((scores) => scores["name"]);
    chart.data.datasets[0].data = hotel_data["scores"].map((scores) => scores["score"]);
    chart.update();
};

const update_address = (hotel_data) => {
    address_block = document.getElementById("address")
    address_block.innerHTML = hotel_data["address"]
    link_block = document.getElementById("external")
    link_block.action = hotel_data["url"]
}

const data = {
    labels: [],
    datasets: [{
        label: 'Scores',
        data: [],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 50
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        },
        plugins: {
            title: {
                display: true,
                text: `Scores of the selected hotel`,
                font: { size: 20 },
              },
        }
    },
    
};

var ctx_radar = document.getElementById("radar_chart");
var radar_chart = new Chart(ctx_radar, config);