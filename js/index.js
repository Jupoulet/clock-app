//time.js
const Clock = new Time();
Clock.updateClockValue();

//element.js
const OptionsContainer = new DOMReference('options');
const MainContent = new DOMReference('mainContent');

const TimezoneElement = new DOMReference('timezone');
TimezoneElement.setContent(Clock.timezone)

const dayOfYearElement = new DOMReference('dayOfYear');
dayOfYearElement.setContent(Clock.dayOfYear);

const dayOfWeek = new DOMReference('dayOfWeek');
dayOfWeek.setContent(Clock.dayOfWeek);

const weekNumber = new DOMReference('weekNumber');
weekNumber.setContent(Clock.weekOfYear);

const ToggleButton = window.document.getElementById('toggle');
ToggleButton.addEventListener('click', function (event) {
  OptionsContainer.toggle('options-informations--hidden');
  MainContent.toggle('fullScreen');

  if(ToggleButton.classList.value.split(' ').includes('toggle_button--more')) {
    ToggleButton.childNodes[0].nodeValue = 'Less';
    ToggleButton.classList.remove('toggle_button--more');
    ToggleButton.classList.add('toggle_button--less');
  } else {
    ToggleButton.childNodes[0].nodeValue = 'More';
    ToggleButton.classList.remove('toggle_button--less');
    ToggleButton.classList.add('toggle_button--more');
  }

  console.log('Togglebutton', ToggleButton.textContent)
});

// quote.js
setQuote();

const background = new DOMReference('background');
const hello = new DOMReference('hello');
const hour = dayjs().hour();
const isMorning = hour >= 7 && hour <= 19;

if (!isMorning) {
  background.removeClass('background--light');
  background.addClass('background--dark')
  hello.setContent('good evening, it\'s currently')
}


