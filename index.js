 
  //calculation of mean

document.addEventListener("DOMContentLoaded", function () {
  
  const calculateButton = document.getElementById("calculate-button");
  calculateButton.addEventListener("click", calculate);

  function calculate() {
      const numbersInput = document.getElementById("data-input").value;
      const numbers = numbersInput.split(",").map(Number);
      
      const mean = calculateMean(numbers);
      const resultsDiv = document.getElementById("meanResult");
      resultsDiv.innerHTML = `${mean}`;

      createBarChart(numbers);
      createLineChart(numbers);
      createPieChart(numbers);
  }

  function calculateMean(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
  }
   // charts
   //BAR CHART
   function createBarChart(numbers) {
    const ctx = document.getElementById("barChart").getContext("2d");
    const chartInstance =new Chart(ctx, {
        type: "bar",
        data: {
            labels: numbers.map((_, index) => `Data ${index + 1}`),
            datasets: [
                {
                    label: "Data",
                    data: numbers,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: "", 
                },
            },
        },

    });
     // BAR CHART UPDATE
    document.getElementById("updateChartButton").addEventListener("click", updateChartData);

    function updateChartData() {
     
        const createBarChart = getChartInstance();
        const barChartColor= document.getElementById("barChartColor").value;
        const barChartTitle = document.getElementById("barChartTitle").value;
    
        if(barChartColor.length!==0){
            createBarChart.config.data.datasets[0].backgroundColor= barChartColor;
        };
        if(barChartTitle.length!==0){
            createBarChart.config.data.datasets[0].label= barChartTitle;
        };
        createBarChart.update();
    }
    function getChartInstance() {
        return chartInstance;
    }
  }


  // LINE CHART

  function createLineChart(numbers) {
    const ctx = document.getElementById("lineChart").getContext("2d");
    const chartInstance= new Chart(ctx, {
        type: "line",
        data: {
            labels: numbers.map((_, index) => `Data ${index + 1}`),
            datasets: [
                {
                    label: "Data",
                    data: numbers,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: "", 
                },
            },
        },

    });
    //LINE CHART UPDATE
    document.getElementById("updateLineChartButton").addEventListener("click", updateChartData);

    function updateChartData() {
     
        const createLineChart = getChartInstance();
        const lineChartColor= document.getElementById("lineChartColor").value;
        const lineChartTitle = document.getElementById("lineChartTitle").value;
    
        if(lineChartColor.length!==0){
            createLineChart.config.data.datasets[0].backgroundColor= lineChartColor;
        };
        if(lineChartTitle.length!==0){
            createLineChart.config.data.datasets[0].label= lineChartTitle;
        };
        createLineChart.update();
    }
    function getChartInstance() {
        return chartInstance;
    }
  }

  //PIE CHART
  function createPieChart(numbers) {
    const ctx = document.getElementById("pieChart").getContext("2d");
    const chartInstance= new Chart(ctx, {
        type: "pie",
        data: {
            labels: numbers.map((_, index) => `Data ${index + 1}`),
            datasets: [
                {
                    label: "Data",
                    data: numbers,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: "", 
                },
            },
        },
    });
    // PIE CHART UPDATE
    document.getElementById("updatepieChartButton").addEventListener("click", updateChartData);

    function updateChartData() {
     
        const createpieChart = getChartInstance();
        const pieChartColor= document.getElementById("pieChartColor").value;
        const pieChartTitle = document.getElementById("pieChartTitle").value;
    
        if(pieChartColor.length!==0){
            createpieChart.config.data.datasets[0].backgroundColor= pieChartColor;
        };
        if(pieChartTitle.length!==0){
            createpieChart.config.data.datasets[0].label= pieChartTitle;
        };
        createpieChart.update();
    }
    function getChartInstance() {
        return chartInstance;
    }
  }



});

 

  //calculation of median

  document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-median-button");
    calculateButton.addEventListener("click", calculate);

    function calculate() {
        const numbersInput = document.getElementById("data-input-median").value;
        const numbers = numbersInput.split(",").map(Number);

        const median = calculateMedian(numbers);

        document.getElementById("medianResult").textContent = `${median}`;
       
    }

    function calculateMedian(numbers) {
        numbers.sort((a, b) => a - b);
        const middle = Math.floor(numbers.length / 2);
        
        if (numbers.length % 2 === 0) {
            return (numbers[middle - 1] + numbers[middle]) / 2;
        } else {
            return numbers[middle];
        }
    }
    

});



//calculation for mode

document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate-mode-button");
  calculateButton.addEventListener("click", calculate);

  function calculate() {
      const numbersInput = document.getElementById("data-input-mode").value;
      const numbers = numbersInput.split(",").map(Number);
    
      const mode = calculateMode(numbers);

      document.getElementById("modeResult").textContent = ` ${mode}`;
  }


  function calculateMode(numbers) {
      const counts = {};
      let mode = numbers[0];
      let maxCount = 1;

      for (let i = 0; i < numbers.length; i++) {
          const num = numbers[i];
          counts[num] = (counts[num] || 0) + 1;

          if (counts[num] > maxCount) {
              mode = num;
              maxCount = counts[num];
          }
      }

      return mode;
  }
});

 

//calculation for variance

document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate-variance-button");
  calculateButton.addEventListener("click", calculate);
  const mean = document.getElementById("meanResult").textContent;

  function calculate() {
      const numbersInput = document.getElementById("data-input-variance").value;
      const numbers = numbersInput.split(",").map(Number);
      
    
      const variance = calculateVariance(numbers, mean);
      document.getElementById("varianceResult").textContent = `${variance}`;
  }


  function calculateVariance(numbers, mean) {
    const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
    const sumSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val, 0);
    return sumSquaredDifferences / numbers.length;
}

});



  // event listeners for left window

  function showContent(contentId) {
    var contentElements = document.getElementsByClassName("right-column");
    for (var i = 0; i < contentElements.length; i++) {
      contentElements[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
    
    var menuItems = document.getElementsByClassName("menu-item");
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    document.getElementById(contentId + "-link").classList.add("active");
    document.getElementById(contentId + "-link").classList.remove("nav-content");
  }




  
   // event listeners for nav
 
 function showNavContent(contentId) {
  var contentElementsNav = document.getElementsByClassName("nav-content");
  for (var i = 0; i < contentElementsNav.length; i++) {
    contentElementsNav[i].style.display = "none";
  }
  document.getElementById(contentId).style.display = "block";
  
  var menuItemsNav = document.getElementsByClassName("nav-btn");
  for (var i = 0; i < menuItemsNav.length; i++) {
    menuItemsNav[i].classList.remove("nav-active");
  }

  document.getElementById(contentId + "-link").classList.add("nav-active");
  
}

  //refresh button
  const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', function () {
    const refreshButton = document.getElementById("refresh");

    refreshButton.addEventListener("click", function () {
        ipcRenderer.send("refresh-window");
    });
})