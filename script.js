const testData = [
  [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg",
    },
  ],
  [
    {
      category: "Reaction",
      score: 81,
      icon: "./assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 93,
      icon: "./assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 62,
      icon: "./assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 73,
      icon: "./assets/images/icon-visual.svg",
    },
  ],
  [
    {
      category: "Reaction",
      score: 79,
      icon: "./assets/images/icon-reaction.svg",
    },
    {
      category: "Memory",
      score: 91,
      icon: "./assets/images/icon-memory.svg",
    },
    {
      category: "Verbal",
      score: 60,
      icon: "./assets/images/icon-verbal.svg",
    },
    {
      category: "Visual",
      score: 71,
      icon: "./assets/images/icon-visual.svg",
    },
  ],
];

const detailItemElements = document.querySelectorAll(".card-detail__item");
if (detailItemElements.length != 4) {
  throw new Error("detail element not found");
}
const averageScoreElement = document.querySelector(".card-summary__score");
if (averageScoreElement === null) {
  throw new Error("score element not found");
}
const averageScoreElementNotNull = averageScoreElement;

let currentDataIndex = 0;

function incDataIndex() {
  currentDataIndex += 1;
  if (currentDataIndex > testData.length - 1) {
    currentDataIndex = 0;
  }
}

const button = document.querySelector(".card-detail__button");
button?.addEventListener("click", (e) => {
  loadAllTestData();
  incDataIndex();
});

function loadAllTestData() {
  const detailItemsArray = [...detailItemElements];
  const data = testData[currentDataIndex];
  let totalScore = 0;
  for (let index = 0; index < data.length; index++) {
    loadTestData(detailItemsArray[index], data[index]);
    totalScore += data[index].score;
  }

  const averageScore = Math.round(totalScore / 4);
  //console.log(averageScore);
  averageScoreElementNotNull.textContent = "" + averageScore;
}

function loadTestData(elem, { score }) {
  elem.querySelector(".score").textContent = score;
}

loadAllTestData();
incDataIndex();
