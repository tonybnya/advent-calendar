const calendarContainer = document.getElementById('calendar');
const log = (arg) => console.log(arg);
const gifts = ['🎁', '🍫', '🧸', '🎉', '🍭', '📦', '💝', '🎂', '💎', '🚀', '🎨'];

const calendarState = JSON.parse(localStorage.getItem('calendarState')) || {};

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  box.setAttribute('data-day', i);

  let number = document.createElement('p');
  number.innerHTML = i;

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');

  let description = document.createElement('p');
  description.classList.add('opened');
  description.innerHTML = "Open me!";

  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);

  if (calendarState[i]) {
    box.classList.add('opened');
    icon.style.display = 'none';
    box.style.border = '1px solid #C4C4C4';
    box.style.pointerEvents = 'none';
    description.style.display = 'block';
    description.innerHTML = calendarState[i].gift;
  }

   box.addEventListener('click', () => {
    if (!box.classList.contains('opened')) {
      const randomGift = gifts[Math.floor(Math.random() * gifts.length)];

      box.style.border = 'none';
      icon.style.display = 'none';
      box.classList.add('opened');
      box.style.border = '1px solid #C4C4C4';
      box.style.pointerEvents = 'none';
      description.style.display = 'block';
      description.innerHTML = randomGift;

      calendarState[i] = {
        opened: true,
        gift: randomGift
      };
      localStorage.setItem('calendarState', JSON.stringify(calendarState));
    } else {
      description.innerHTML = 'Open me!';
      box.classList.remove('opened');
    }
  });
}