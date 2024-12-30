const questionBox = document.querySelectorAll(".question-box")

questionBox.forEach((item) => {
    const plusIcon = item.querySelector(".plus-icon");
    const answer = item.querySelector(".answer");

    plusIcon.addEventListener("click", () => {
        answer.classList.toggle("show");
    
        plusIcon.src = answer.classList.contains("show")
          ? "assets/images/icon-minus.svg"
          : "assets/images/icon-plus.svg";
      });

} );


