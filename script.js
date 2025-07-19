const completeBtn = document.querySelector(".btn");
const progressFill = document.querySelector(".progress-fill");

completeBtn.addEventListener("click", () => {
  progressFill.style.width = "100%";
  completeBtn.innerText = "Completed ✅";
  completeBtn.disabled = true;
  completeBtn.style.opacity = "0.6";
  completeBtn.style.cursor = "not-allowed";
});
