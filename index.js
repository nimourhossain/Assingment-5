document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = "./home.html";
    console.log(clicked);
  });

  document.getElementById("donate-btn").addEventListener("click", function () {
    const donateSection = document.getElementById("donate-section");
    donateSection.classList.remove("hidden");
    const historySection = document.getElementById("history");
    historySection.classList.add("hidden");
  
    const historyBtnStyle = document.getElementById("history-btn");
    historyBtnStyle.classList.remove("btn-color");
    const donateBtnStyle = document.getElementById("donate-btn");
    donateBtnStyle.classList.add("btn-color");
  });

  document.getElementById("history-btn").addEventListener("click", function () {
    const historyBtnStyle = document.getElementById("history-btn");
    historyBtnStyle.classList.add("btn-color");
  
    const historySection = document.getElementById("history");
    historySection.classList.remove("hidden");
  
    const donateSection = document.getElementById("donate-section");
    donateSection.classList.add("hidden");
  
    const donateBtnStyle = document.getElementById("donate-btn");
    donateBtnStyle.classList.remove("btn-color");
  });