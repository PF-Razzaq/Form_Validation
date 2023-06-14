// Retrieve the canvas element
var canvas = document.getElementById('graph');

// Prepare the chart data
var data = {
    labels: ['Students', 'Teachers', 'Staff'],
    datasets: [{
        label: 'Number of Individuals',
        data: [500, 50, 100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)', // Students
            'rgba(54, 162, 235, 0.7)', // Teachers
            'rgba(75, 192, 192, 0.7)'  // Staff
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Create the chart
var chart = new Chart(canvas, {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});