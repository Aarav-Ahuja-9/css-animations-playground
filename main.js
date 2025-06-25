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
  console.log(previewBox.style);
    setTimeout(() => {
      previewBox.classList.remove(vlaueOfSelectAnimation);
      previewBox.classList.remove("animate__animated");
    }, animationCountValue * 1000);

  // console.log(vlaueOfSelectAnimation);
  // console.log(previewBox.classList);
});
