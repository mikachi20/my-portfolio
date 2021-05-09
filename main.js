const button11 = document.getElementById("button-one1");
const button21 = document.getElementById("button-two1");
const button31 = document.getElementById("button-three1");
const button12 = document.getElementById("button-one2");
const button22 = document.getElementById("button-two2");
const button32 = document.getElementById("button-three2");
const memoInput = document.getElementById("memo-input");
const addButton = document.getElementById("add-button");
const memoContainer = document.getElementById("memo-container");
const replyContainer = document.getElementById("reply-container");

button11.onclick = function () {
  answer1.textContent = "正解！でも選択肢全部正解！";
};

button21.onclick = function () {
  answer1.textContent = "正解！でも選択肢全部正解！";
};

button31.onclick = function () {
  answer1.textContent = "正解！でも選択肢全部正解！";
};

button12.onclick = function () {
  answer2.textContent = "ぶっぶー";
};

button22.onclick = function () {
  answer2.textContent = "ひどい😭";
};

button32.onclick = function () {
  answer2.textContent = "よくわかってる♡";
};

let rand = 0;
const replies = [
  "こんにちは！良い天気だね！",
  "昨日の晩ご飯は何だった？",
  "今日も一日頑張ろう！",
  "LINE来るの待ってたよ！",
  "それはすごい！",
];

addButton.onclick = function () {
  addCard();
  rep();
};

const addCard = function () {
  const card = document.createElement("div");
  card.textContent = memoInput.value;
  memoContainer.append(card);
  memoInput.value = "";
  return card;
};

const rep = function () {
  let rand = random();
  const re = document.createElement("div");
  if (rand <= 0.2) {
    re.textContent = replies[0];
  } else if (rand <= 0.4) {
    re.textContent = replies[1];
  } else if (rand <= 0.6) {
    re.textContent = replies[2];
  } else if (rand <= 0.8) {
    re.textContent = replies[3];
  } else if (rand <= 1) {
    re.textContent = replies[4];
  }
  replyContainer.append(re);
};

const random = function () {
  return Math.random();
};
