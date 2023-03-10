let arr = [
  {
    id: "1",
    question: "Koji je glavni grad Australije ?",
    answers: ["Sidnej", "Rim", "Kanbera"],
    correct: { id: "3", answer: "Kanbera" },
    points: 5,
  },

  {
    id: "2",
    question: "Koji nacionalni park u Srbiji ima najveću površinu ?",
    answers: ["Đerdap", "Fruška gora", "Tara"],
    correct: { id: "3", answer: "Tara" },
    points: 5,
  },

  {
    id: "3",
    question: "Koji ljudski organ tokom života nikad ne menja svoju veličinu ?",
    answers: ["Uho", "Oko", "Želudac"],
    correct: { id: "2", answer: "Oko" },
    points: 5,
  },

  {
    id: "4",
    question: "Koje je najsuvlje mesto na planeti Zemlji ?",
    answers: ["Arktik", "Sahara", "Antarktik"],
    correct: { id: "3", answer: "Antarktik" },
    points: 5,
  },

  {
    id: "5",
    question: 'Koji srpski pisac je napisao roman "Na Drini ćuprija" ?',
    answers: ["Danilo Kiš", "Ivo Andrić", "Meša Selimović"],
    correct: { id: "2", answer: "Ivo Andrić" },
    points: 5,
  },

  {
    id: "6",
    question: "Ko je najpoznatiji srpski naučnik i pronalazač ?",
    answers: ["Mihajlo Pupin", "Milutin Milanković", "Nikola Tesla"],
    correct: { id: "3", answer: "Nikola Tesla" },
    points: 5,
  },

  {
    id: "7",
    question: "Koja je najviša planina u Srbiji ?",
    answers: ["Zlatibor", "Đeravica", "Kopaonik"],
    correct: { id: "2", answer: "Đeravica" },
    points: 5,
  },

  {
    id: "8",
    question: "Narod koje države ima najduži životni vek ?",
    answers: ["Švajcarske", "Japana", "Španije"],
    correct: { id: "2", answer: "Japana" },
    points: 5,
  },

  {
    id: "9",
    question: "Kolika je udaljenost između Rusije i Amerike",
    answers: ["4 kilometra", "24 kilometra", "5 kilometra"],
    correct: { id: "1", answer: "4 kilometra" },
    points: 5,
  },

  {
    id: "10",
    question: "U kom gradu u Čileu kiša nije padala 40 godina ?",
    answers: ["Santijago", "Konsepsion", "Kalama"],
    correct: { id: "3", answer: "Kalama" },
    points: 5,
  },
];

let question = arr[0];

const startTest = () => {
  // samo i samo
  // ispisuje prvo pitanje na web stranici
  // arr[0].question arr[0].answers[0]
  document.getElementById("pitanje").textContent = question.question;
  document.getElementById("ans1").textContent = question.answers[0];
  document.getElementById("ans2").textContent = question.answers[1];
  document.getElementById("ans3").textContent = question.answers[2];
};

startTest();

let score = 0;
let index = 0;

const submitAnswer = (id, ans) => {
  // 1. Uporedi da li je id za koji smo submitovali odgovor i id trenutnog pitanja isti
  // question.id === id
  const correct = question.correct;
  // 2. Da li je nas "ans" jednak "correct"
  if (correct.id === id) {
    // 3. Ako jeste dodaj bodove
    score = score + question.points;
  } 
  index++;
  // 4. Ako postoji sledece pitanje prikazi ga i sacuvaj to pitanje u varijabli "question"
  if(arr[index]){
    question = arr[index]
    document.getElementById("pitanje").textContent = question.question;
    document.getElementById("ans1").textContent = question.answers[0];
    document.getElementById("ans2").textContent = question.answers[1];
    document.getElementById("ans3").textContent = question.answers[2];
  } else {
    // 5. Ako ne postoji novo pitanje, onda me odvedi na success page
    window.location.href = "success.html";
    document.getElementById("score").textContent = score;
  }
};

document.getElementById("ans1").addEventListener("click", () => {
  const ans = document.getElementById("ans1").textContent;
  submitAnswer(question.id, ans);
});
document.getElementById("ans2").addEventListener("click", () => {
  const ans = document.getElementById("ans2").textContent;
  submitAnswer(question.id, ans);
});
document.getElementById("ans3").addEventListener("click", () => {
  const ans = document.getElementById("ans3").textContent;
  submitAnswer(question.id, ans);
});