const is_in_range = (label, price) => {
    const prices = label.split("-").map((number) => parseInt(number))
    return prices[0] < price & price <= prices[1]
}

const get_data_by_language = (is_provide_language, data, labels) => {
    data = data.filter((hotel) => hotel["price"] !== null & hotel["rate"] !== null)
    if (is_provide_language) data = data.filter((hotel) => {
        if (!hotel["language"]) return false
        return !hotel["language"].every((lan) => lan === "English")
    })
    const label_count = {}
    labels.forEach((label) => label_count[label] = [0, 0])
    data.forEach((hotel) => {
        for (label of labels) {
            if (is_in_range(label, hotel["price"])) {
                label_count[label][1] += 1;
                label_count[label][0] += hotel["rate"]
            }
        }
    })
    return Object.values(label_count)
}



const labels = ["60-100", "161-260", "261-360", "361-460", "461-575"]
const data_with_language = get_data_by_language(1, hotel_data, labels)
const data_without_language = get_data_by_language(0, hotel_data, labels)

const mix_data = {
    labels: labels,
    datasets: [{
        type: 'bar',
        label: 'Number of hotels provide forein language service',
        data: data_with_language.map((item) => item[1]),
        backgroundColor: 'rgba(251, 180, 147, 0.6)',
        borderColor: 'rgb(251, 180, 147)',
        borderWidth: 1
    }, {
        type: 'bar',
        label: 'Number of hotels with English only',
        data: data_without_language.map((item) => item[1]),
        backgroundColor: 'rgba(170, 205, 227, 0.6)',
        borderColor: 'rgb(170, 205, 227)',
        borderWidth: 1
    },
    {
        type: 'line',
        label: 'Average rate of hotels provide forein language service',
        data: data_with_language.map((item) => item[0] / item[1]),
        backgroundColor: 'rgba(251, 180, 147, 0.6)',
        borderColor: 'rgb(251, 180, 147)',
        borderWidth: 1,
        yAxisID: "y1"
    }, {
        type: 'line',
        label: 'Average rate of hotels with English only',
        data: data_without_language.map((item) => item[0] / item[1]),
        backgroundColor: 'rgba(170, 205, 227, 0.6)',
        borderColor: 'rgb(170, 205, 227)',
        borderWidth: 1,
        yAxisID: "y1"
    }]
};


const mix_config = {
    data: mix_data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                display: true,
                position: 'left',
                suggestedMax: 80
              },
              y1: {
                beginAtZero: true,
                type: 'linear',
                display: true,
                position: 'right',
                suggestedMax: 5,
                grid: {
                  drawOnChartArea: false,
                },
              },
        }
    },
};

var ctx_mix = document.getElementById("mix_chart");
var mix_chart = new Chart(ctx_mix, mix_config);
