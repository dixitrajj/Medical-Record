// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Blood Pressure Chart
    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    
    // Chart data
    const months = ['Oct. 2023', 'Nov. 2023', 'Dec. 2023', 'Jan. 2024', 'Feb. 2024', 'Mar. 2024'];
    const systolicData = [120, 115, 150, 110, 140, 160];
    const diastolicData = [90, 70, 105, 90, 75, 78];
    
    // Create chart
    const bloodPressureChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Systolic',
                    data: systolicData,
                    borderColor: '#ff66c4',
                    backgroundColor: 'rgba(255, 102, 196, 0.1)',
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: '#ff66c4',
                    pointRadius: 4
                },
                {
                    label: 'Diastolic',
                    data: diastolicData,
                    borderColor: '#8676ff',
                    backgroundColor: 'rgba(134, 118, 255, 0.1)',
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: '#8676ff',
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 180,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#333',
                    bodyColor: '#666',
                    borderColor: '#ddd',
                    borderWidth: 1,
                    displayColors: true,
                    mode: 'index',
                    intersect: false,
                    padding: 10,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y;
                        }
                    }
                }
            }
        }
    });
    
    // Patient selection functionality
    const patientItems = document.querySelectorAll('.patients-list li');
    
    patientItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all patients
            patientItems.forEach(patient => {
                patient.classList.remove('active');
            });
            
            // Add active class to clicked patient
            this.classList.add('active');
            
            // In a real application, you would fetch the patient data here
            // and update the UI accordingly
        });
    });
    
    // Time filter dropdown functionality
    const timeFilter = document.querySelector('.time-filter');
    
    timeFilter.addEventListener('click', function() {
        // In a real application, you would show a dropdown here
        // and update the chart data based on the selected time period
        console.log('Time filter clicked');
    });
    
    // Show all information button
    const showAllBtn = document.querySelector('.show-all-btn');
    
    showAllBtn.addEventListener('click', function() {
        // In a real application, you would show more patient information
        console.log('Show all information clicked');
    });
    
    // Download buttons for lab results
    const downloadBtns = document.querySelectorAll('.download-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real application, you would trigger a download here
            console.log('Download button clicked');
        });
    });
    
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        // In a real application, you would show a search input field
        // and filter patients based on the search query
        console.log('Search button clicked');
    });
    
    // Responsive adjustments
    function handleResponsiveLayout() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 768) {
            // Mobile adjustments
        } else if (windowWidth < 992) {
            // Tablet adjustments
        } else {
            // Desktop (default)
        }
    }
    
    // Initial call and event listener for resize
    handleResponsiveLayout();
    window.addEventListener('resize', handleResponsiveLayout);
});
