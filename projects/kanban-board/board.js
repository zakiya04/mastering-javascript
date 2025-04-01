const buttons = document.querySelectorAll(".btn");
const container = document.querySelectorAll(".container");

buttons.forEach((btn,index) => {
  btn.addEventListener("click", () => {
    let input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("draggable", "true");
    input.addEventListener('dragstart',() => input.classList.add('dragging'));
    input.addEventListener('dragend',() => input.classList.remove('dragging'));
    if(container[index]){
      container[index].appendChild(input)
    }
  });
});

container.forEach((cont)=>{
  cont.addEventListener('dragover',(event) =>{
    event.preventDefault()
    const item = document.querySelector('.dragging');
    cont.appendChild(item)
  })  
})
