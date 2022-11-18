// Chart.js - Line chart

/** javascript로 JSON 데이터 가져오기 → XMLHttpRequest 객체 생성 **/
const chartData = new XMLHttpRequest();
const url = "/PROJECT/json/sub4_chartData.json";

//XMLHttpRequest 내장 함수
chartData.open("get", url, true); //XMLHttpRequest의 open()메서드 : .open(전송방식, 전송위치, sync방식)
chartData.send();

chartData.onreadystatechange = function () {
    if (chartData.readyState == 4 && chartData.status == 200) {
        /** property 통신상태) readyState → 4: 모든 응답 데이터 취득완료 (통신 완료)
            property 응답) status → 200: 처리 성공 (통신 성공) **/

        let data = JSON.parse(chartData.responseText);
        // console.log(data);
        /** 서버로부터 응답 취득하는 property → responseText / responseXML / response
            일반적인 텍스트 취득 → responseText **/

        let year = data.reason_notTest.map(function (elements) {
            return elements.year;
        });
        // console.log(year);
        let health = data.reason_notTest.map(function (elements) {
            return elements.health;
        });
        // console.log(health);
        let time = data.reason_notTest.map(function (elements) {
            return elements.time;
        });
        // console.log(time);
        let hard = data.reason_notTest.map(function (elements) {
            return elements.hard;
        });
        // console.log(hard);
        let money = data.reason_notTest.map(function (elements) {
            return elements.money;
        });
        // console.log(money);
        let fear = data.reason_notTest.map(function (elements) {
            return elements.fear;
        });
        // console.log(fear);

        //차트 그리기
        let ctx = document.getElementById('line_chart').getContext("2d");

        let myChart = new Chart(ctx, {
            type: 'line', // 차트 종류
            data: {
                labels: year, //차트 x축 
                datasets: [
                    {
                        label: '건강해서', //차트 y축 
                        data: health,
                        backgroundColor: 'transparent', //투명
                        borderColor: 'rgba(255, 174, 0, 1)',
                        pointHoverBorderColor: 'rgba(255, 115, 0, 1)'
                    },
                    {
                        label: '여유시간 없음',
                        data: time,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(245, 233, 61, 1)',
                        pointHoverBorderColor: 'rgba(255, 213, 0, 1)'
                    },
                    {
                        label: '검사 과정이 힘듦',
                        data: hard,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(112, 219, 112, 1)',
                        pointHoverBorderColor: 'rgba(40, 189, 65, 1)'
                    },
                    {
                        label: '경제적 여유 없음',
                        data: money,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(113, 207, 244, 1)',
                        pointHoverBorderColor: 'rgba(77, 166, 255, 1)'
                    },
                    {
                        label: '암 발견 두려움',
                        data: fear,
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(196, 158, 234, 1)',
                        pointHoverBorderColor: 'rgba(178, 102, 255, 1)'
                    },
                ]
            },
            options: {
                maintainAspectRatio: false,
                // aspectRatio: 1, // canvas요소 부모에 사이즈 지정할때
                // responsive: false, //canvas요소 본인에 사이즈 지정할때
                // plugins: {
                //     legend: {
                //        labels: {
                //             usePointStyle: true,
                //        },
                //     }
                // },
                elements: {
                    line: {
                        tension: 0.1 //line 곡선의 정도(직선은 0)
                    },
                    point: {
                        borderWidth: 4, //point점의 너비
                        pointHoverBackgroundColor: '#ffffff',
                        pointHoverBorderWidth: 4
                    }
                },
                scales: {
                    xAxes: {
                        grid: {
                            color: "rgba(0,0,0,0)"
                        }
                    },
                    yAxes: {
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 1000
                }
            }
        });
        console.log(myChart)
    }
};




