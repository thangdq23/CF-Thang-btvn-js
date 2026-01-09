const questions = document.querySelectorAll(".accordion-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const currentAnswer = question.nextElementSibling;

    document.querySelectorAll(".accordion-answer").forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.classList.remove("active");
      }
    });

    currentAnswer.classList.toggle("active");
  });
});
