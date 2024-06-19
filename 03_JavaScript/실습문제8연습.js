const userId = document.querySelector("#userId");
const userIdSpan = document.querySelector("#userIdSpan");

userId.addEventListener("input", function (e) {
  const regExp = /^[a-z][a-z]{3,11}$/;
  const check = regExp.test(userId.value);

  if (check) {
    userIdSpan.style.color = ".";
    userIdSpan.innerHTML = ".";
  } else {
    userIdSpan.style.color = ".";
    userIdSpan.innerHTML = ".";
  }
});

const userPwd = document.querySelector("#userPwd");
const userPwdSpan = document.querySelector("#userPwdSpan");

userPwd.addEventListener("input", function (e) {
  const regExp = /^[!-~]{8,15}$/;
  const check = regExp.test(userPwd.value);

  if (check) {
    userPwdSpan.style.color = "green";
    userPwdSpan.innerHTML = "OK!";
  } else {
    userPwdSpan.style.color = "red";
    userPwdSpan.innerHTML =
      "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

const userPwdCheck = document.querySelector("#userPwdCheck");
const userPwdCheckSpan = document.querySelector("#userPwdCheckSpan");

userPwdCheck.addEventListener("input", function (e) {
  if (userPwd.value === userPwdCheck.value) {
    userPwdCheckSpan.style.color = "green";
    userPwdCheckSpan.innerHTML = "OK!";
  } else {
    userPwdCheckSpan.style.color = "red";
    userPwdCheckSpan.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});

const userName = document.querySelector("#userName");
const userNameSpan = document.querySelector("#userNameSpan");

userName.addEventListener("input", function (e) {
  const regExp = /^[가-힣]{2,}$/;
  const check = regExp.test(userName.value);

  if (check) {
    userNameSpan.style.color = "green";
    userNameSpan.innerHTML = "OK";
  } else {
    userNameSpan.style.color = "red";
    userNameSpan.innerHTML =
      "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});

const userEmail = document.querySelector("#userEmail");
const userEmailSpan = document.querySelector("#userEmailSpan");

userEmail.addEventListener("input", function (e) {
  const regExp = /^[!-~]+@[!-~]+$/;
  const check = regExp.test(userEmail.value);

  if (check) {
    userEmailSpan.style.color = "green";
    userEmailSpan.innerHTML = "OK";
  } else {
    userEmailSpan.style.color = "red";
    userEmailSpan.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  }
});
