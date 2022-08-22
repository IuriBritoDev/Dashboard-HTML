var ctx = document.getElementById('temp').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
    datasets: [{
        label: 'Temperatura',
        borderColor:'rgb(35, 107, 35)',
        data: [10, 10, 15, 20, 30, 20, 10]
    }]
},

// Configuration options go here
options: {}
});