const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const taskBtn = $$(".task");
const taskActive = $(".task.active");
const tabDetailBtn = $$(".tab_detail");
const tabDetaiActive = $(".tab_detail.active");
const line = $(".feature_list .line");
const QABtn = $$(".QA__header");
const QAactive = $(".QA__header.active");
const answerBtn = $$(".answer");
const answerActive = $(".answer.active");
const form = $("form");
line.style.left = taskActive.offsetLeft + "px";
line.style.width = taskActive.offsetWidth + "px";
function start() {
  switchTab();
  openQA();
  handeMenu_btn();
}

start();
//handel
function switchTab() {
  taskBtn.forEach(function (tab, index) {
    const tabdetail = tabDetailBtn[index];
    tab.onclick = function () {
      $(".task.active").classList.remove("active");
      $(".tab_detail.active").classList.remove("active");
      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";
      tabdetail.classList.add("active");
      this.classList.add("active");
    };
  });
}

function openQA() {
  QABtn.forEach(function (QA, index) {
    const answer = answerBtn[index];
    QA.onclick = function (e) {
      if (e.target.closest(".QA__header:not(.active)")) {
        answer.classList.add("active");
        this.classList.add("active");
      } else {
        $(".QA__header.active").classList.remove("active");
        $(".answer.active").classList.remove("active");
      }
    };
  });
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.onsubmit = function (e) {
  e.preventDefault();
  if (validateEmail(this.email.value)) {
    alert("We received your email successfully!");
    this.email.value = "";
  } else {
    alert("Please enter correct email address!");
    this.email.value = "";
  }
};

function handeMenu_btn() {
  const header = $(".header_sub-option");
  const mobileMenu = $(".menu_Btn");
  mobileMenu.onclick = function (e) {
    if (header.style.display == "none") {
      header.style.display = "block";
    } else {
      header.style.display = "none";
    }
  };
}
