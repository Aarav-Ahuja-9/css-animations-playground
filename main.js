let button = document.querySelector("button");
let selectAnimationField = document.querySelector("#AnimationList");
let previewBox = document.querySelector("#PreviewBox");
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(selectAnimation);
// })


button.addEventListener("click", (e) => {

  e.preventDefault();
  let animationCountValue = document.querySelector("#RepeatCount").value;
  let vlaueOfSelectAnimation = selectAnimationField.value;
  previewBox.setAttribute("class", "animate__animated");
  previewBox.classList.add(vlaueOfSelectAnimation);
  previewBox.style.animationIterationCount = animationCountValue;
  console.log(previewBox.style);
  if (animationCountValue == "infinite") {
    setTimeout(() => {
      previewBox.classList.remove(vlaueOfSelectAnimation);
      previewBox.classList.remove("animate__animated");
      previewBox.style.animationIterationCount = "";
      console.log(previewBox.style.animationIterationCount);
    }, 50000);
  } else if (animationCountValue > 0) {
    setTimeout(() => {
      previewBox.classList.remove(vlaueOfSelectAnimation);
      previewBox.classList.remove("animate__animated");
      previewBox.style.animationIterationCount = "";
      console.log(previewBox.style.animationIterationCount);
    }, animationCountValue * 1000);
  }

  // console.log(vlaueOfSelectAnimation);
  // console.log(previewBox.classList);
});
