const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は大雪が降っていて:insertx:こたつに入っていた。 山を越えたら:inserty:に着いて楽しさで時間を忘れた。そしてBobは:insertz:。:insertx:体が急に大きくなって、空に飛んでいきました。';
const insertX = ['りつたろうは', '空飛ぶおじさんは', '歩いているありさんは'];
const insertY = ['郵便局', '食堂', '滝の近くにある池'];
const insertZ = ['凍えるくらい寒い日でした', '魚釣りに出かけました', '芋を持って踊りました'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
