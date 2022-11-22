//JSON 데이터 가져오기
const chartData = new XMLHttpRequest();
const url = "/json/sub2_chartData.json";

chartData.open("get", url, true);
chartData.send();

chartData.onreadystatechange = function () {
    if (chartData.readyState == 4 && chartData.status == 200) {

        let data = JSON.parse(chartData.responseText);
        // console.log(data);
        // console.log(data[0]);

        // 대장암 발생률 데이터
        let yearIncidence = data[0].cancerIncidence.map(function (elements) {
            return elements.year;
        });
        // console.log(yearIncidence);
        let numberIncidence = data[0].cancerIncidence.map(function (elements) {
            return elements.numberIncidence;
        });
        // console.log(numberIncidence);
        let tidalIncidence = data[0].cancerIncidence.map(function (elements) {
            return elements.tidalIncidence;
        });
        // console.log(tidalIncidence);

        let ctx1 = document.getElementById('lineBar_chart1').getContext("2d");

        let myChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: yearIncidence,
                datasets: [
                    {
                        label: '발생자수',
                        data: numberIncidence,
                        backgroundColor: 'rgba(255, 174, 0, 1)',
                        borderColor: 'rgba(255, 115, 0, 1)',
                        type: 'bar',
                        yAxisID: 'numberInc' //바 그래프 이름 지정
                    },
                    {
                        label: '조발생률',
                        data: tidalIncidence,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(112, 219, 112, 1)',
                        pointHoverBorderColor: 'rgba(40, 189, 65, 1)',
                        yAxisID: 'tidalInc' //라인 그래프 이름 지정
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels : {
                            usePointStyle: true,
                            pointStyle: 'rect'
                        }
                    }
                },
                scales: {
                    numberInc: { //바 그래프
                        beginAtZero: true,
                        max: 35000,
                        type: 'linear',
                        position: 'left'

                    },
                    tidalInc: { //라인 그래프
                        beginAtZero: true,
                        max: 80,
                        type: 'linear',
                        position: 'right'
                    }
                }
            }
        });
    };
};