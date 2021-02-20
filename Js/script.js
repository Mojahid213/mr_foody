const searchBtn = document.getElementById("search");
let theInput = document.getElementById("search_input");
const chicken = document.getElementById("chicken");
const beef = document.getElementById("beef");
const curry = document.getElementById("curry");
const row_div = document.getElementById("row_div");
const error_1 = document.getElementById("error_1");
const error_2 = document.getElementById("error_2");


//curry btn event-listener
curry.addEventListener('click',()=>{
    const curryValue = curry.innerText;
    theInput.value = curryValue;
    searchBtn.click();
    theInput.value = "";
    beef.style.backgroundColor = "";
    chicken.style.backgroundColor = "";
    curry.style.backgroundColor = "Tomato";
})

//chicken btn event-listener
chicken.addEventListener('click',()=>{
    const ChickenValue = chicken.innerText;
    theInput.value = ChickenValue;
    searchBtn.click();
    theInput.value = "";
    beef.style.backgroundColor = "";
    curry.style.backgroundColor = "";
    chicken.style.backgroundColor = "Tomato";
})

//beef btn event-listener
beef.addEventListener('click',()=>{
    const beefValue = beef.innerText;
    theInput.value = beefValue;
    searchBtn.click();
    theInput.value = "";
    chicken.style.backgroundColor = "";
    curry.style.backgroundColor = "";
    beef.style.backgroundColor = "Tomato";
})

//Chicken event-listener
window.addEventListener("load", () => {
  const chicvalue = chicken.innerText;
  theInput.value = chicvalue.trim();
  searchBtn.click();
  theInput.value = "";
  beef.style.backgroundColor = "";
  curry.style.backgroundColor = "";
  chicken.style.backgroundColor = "Tomato";
});

//Input field event-listener
theInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    beef.style.backgroundColor = "";
    curry.style.backgroundColor = "";
    chicken.style.backgroundColor = "";
    searchBtn.click();
  }
});
//Search Btn event-listener
searchBtn.addEventListener("click", () => {
  if (theInput.value != "") {
    beef.style.backgroundColor = "";
    curry.style.backgroundColor = "";
    chicken.style.backgroundColor = "";
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${theInput.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        let html = "";
        if (data.meals) {
          data.meals.forEach((meal) => {
            html += `
                    <div class="col" id="${meal.idMeal}">
                    <div class="card">
                      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title text-center">${meal.strMeal}</h5>
                      </div>
                    </div>
                  </div>
                    `;
          });
          error_2.innerHTML = "";
        } else {
          const theerror_2 = `
                    <h1 style="text-align:center;color:red">Something went wrong!</h1>
                `;
          error_2.innerHTML = theerror_2;
        }
        error_1.innerHTML = "";
        row_div.innerHTML = html;
      });
  }
  if (theInput.value == "") {
    beef.style.backgroundColor = "";
    curry.style.backgroundColor = "";
    chicken.style.backgroundColor = "";
    const theH1 = `
            <h1 style="text-align:center;color:red">Write Something!</h1>
        `;
    error_1.innerHTML = theH1;
    row_div.innerHTML = "";
    error_2.innerHTML = "";
  }
});
