// Initialize the Chart.js chart
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Lessons Completed',
            data: [2, 4, 3, 5, 6, 4, 7],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

// Update daily stats dynamically
document.addEventListener('DOMContentLoaded', () => {
    const completedLessons = 7; // Example data
    const timeSpent = 3;        // Example data in hours
    const streak = 10;          // Example data in days

    document.getElementById('completedLessons').textContent = completedLessons;
    document.getElementById('timeSpent').textContent = `${timeSpent} hours`;
    document.getElementById('streak').textContent = streak;
});