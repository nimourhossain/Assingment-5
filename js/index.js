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

  document
  .getElementById("donate-btn-noakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = getInputFieldValueById("input-noakhali");
    const balance = getTextFieldValueById("balance");
    const title = document.getElementById("noakhaliTitle").innerText;

    if (inputNumber <= 0 || isNaN(inputNumber)) {
      alert("Please enter a valid number");
      return;
    }
    if (inputNumber > balance) {
      alert("Insufficient balance");
      return;
    }
    const totalBalance = balance - inputNumber;
    document.getElementById("balance").innerText = totalBalance;
    const donateAmount = parseFloat(
      document.getElementById("donate-result-show-noakhli").innerText
    );
    const totalDonateAmount = inputNumber + donateAmount;
    document.getElementById("donate-result-show-noakhli").innerText =
      totalDonateAmount;

    document.getElementById("input-noakhali").value = " ";

    const div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("p-5", "mb-5", "rounded-lg");
    div.innerHTML = `<p class="text-lg font-medium">${inputNumber} Taka is
                        Donated For ${title}</p>
                        <p class = "text-xs"> Date: ${new Date()}</p>`;
    document.getElementById("history").appendChild(div);

    const modal = document.getElementById("my_modal_1");

    function openModal() {
      modal.showModal();
    }
    openModal();

    function closeModal() {
      modal.close();
    }
    closeModal;
  });

  document
  .getElementById("donate-btn-feni")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = getInputFieldValueById("input-feni");
    const balance = getTextFieldValueById("balance");
    const title = document.getElementById("feni-title").innerText;

    if (inputNumber <= 0 || isNaN(inputNumber)) {
      alert("Please enter a valid number");
      return;
    }
    if (inputNumber > balance) {
      alert("Insufficient balance");
      return;
    }
    const totalBalance = balance - inputNumber;
    document.getElementById("balance").innerText = totalBalance;
    const donateAmount = parseFloat(
      document.getElementById("donate-result-show-feni").innerText
    );
    const totalDonateAmount = inputNumber + donateAmount;
    document.getElementById("donate-result-show-feni").innerText =
      totalDonateAmount;

    document.getElementById("input-feni").value = "";
    const div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("p-5", "mb-5", "rounded-lg");
    div.innerHTML = `<p class="text-lg font-medium">${inputNumber} Taka is
                        Donated For ${title}</p>
                        <p class = "text-xs"> Date: ${new Date()}</p>`;
    document.getElementById("history").appendChild(div);
    
    const modal = document.getElementById("my_modal_1");

    function openModal() {
      modal.showModal();
    }
    openModal();

    function closeModal() {
      modal.close();
    }
    closeModal;
  });

document
  .getElementById("donate-btn-student")
  .addEventListener("click", function (event) {
    event.preventDefault();
    
    const inputNumber = getInputFieldValueById("input-student");
    const balance = getTextFieldValueById("balance");
    const title = document.getElementById("student-title").innerText;

    if (inputNumber <= 0 || isNaN(inputNumber)) {
      alert("Please enter a valid number");
      return;
    }
    if (inputNumber > balance) {
      alert("Insufficient balance");
      return;
    }
    const totalBalance = balance - inputNumber;
    document.getElementById("balance").innerText = totalBalance;
    const donateAmount = parseFloat(
      document.getElementById("donate-result-show-student").innerText
    );
    const totalDonateAmount = inputNumber + donateAmount;
    document.getElementById("donate-result-show-student").innerText =
      totalDonateAmount;

    document.getElementById("input-student").value = "";
    

    
    const div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("p-5", "mb-5", "rounded-lg");
    div.innerHTML = `<p class="text-lg font-medium">${inputNumber} Taka is
                        Donated For ${title}</p>
                        <p class = "text-xs"> Date: ${new Date()}</p>`;
    document.getElementById("history").appendChild(div);

    
    const modal = document.getElementById("my_modal_1");

    function openModal() {
      modal.showModal();
    }
    openModal();

    function closeModal() {
      modal.close();
    }
    closeModal;
  });