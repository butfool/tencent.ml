

// Time clock function
var clock;
$(document).ready(function () {
  var myDate = new Date();
  var year = 2022, month = 10, day = 1;
  // <!--var	year=myDate.getFullYear()+1,month=10,day=12;-->
  var currentDate = new Date();
  var futureDate = new Date(year, month - 1, day, 8.5);
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
});

// hitokoto API
const interval = function () {
  fetch('https://v1.hitokoto.cn?max_length=25')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
      document.getElementsByClassName('Author')[0].children[0].innerText = data.from
    })
    .catch(console.error)
  return interval;
}
setInterval(interval(), 5000);

// Lean Statics
const { Query, User } = AV;
AV.init({
  appId: "Y2frg1n6f1ET1SkwwFEg2NTk-9Nh9j0Va",
  appKey: "5pf0NqJ8FCdoM4zwBSt2X6EW",
  serverURL: "https://y2frg1n6.lc-cn-e1-shared.com"
})

const query = new AV.Query('Numbers');
function getAndIncrement() {
  query.get('6291c865033caa54ba65b1af').then(result => {
    result.increment('num', 1);
    result.save();
    let target = document.querySelector("#visit");
    target.innerText = `本站总访问 ${result.attributes.num + 1} 次`
  })
}
getAndIncrement();
