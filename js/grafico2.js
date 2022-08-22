var ctx = document.getElementById('umid').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
    datasets: [{
        label: 'Umidade',
        borderColor:'rgb(35, 107, 35)',
        data: [50, 30, 50, 20, 20, 30, 40]
    }]
},

// Configuration options go here
options: {}
});