dayjs.extend(window.dayjs_plugin_dayOfYear);
dayjs.extend(window.dayjs_plugin_weekOfYear);

class Time {
  constructor() {
    const time = dayjs().format('HH:mm');
    this.date = dayjs();
    this.dayOfYear = dayjs().dayOfYear();
    this.weekOfYear = dayjs().week();
    this.dayOfWeek = dayjs().day();
    this.timezone = 'Europe / Paris';
    this.time = time;
    this.clock = window.document.getElementById('clock');
    this.setClock(time)
    console.log(this)
  }
}

Time.prototype.getClock = function() {
  return this.clock;
}

Time.prototype.setClock = function(value) {
  this.clock.textContent = value;
}

Time.prototype.updateClockValue = function() {
  const that = this;
  setInterval(function () {
    that.time = dayjs().format('HH:mm');
    that.setClock(that.time);
  }, 1000)
}