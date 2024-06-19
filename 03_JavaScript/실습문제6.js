const now = new Date();
const last = new Date("2025-01-01 00:00:00");
const dday = last - now;

const day = Math.floor(dday / (1000 * 60 * 60 * 24));
const hour = Math.floor((dday / (1000 * 60 * 60)) % 24);
const minute = Math.floor((dday / (1000 * 60)) % 60);
const second = Math.floor((dday / 1000) % 60);

console.log(second);
clock.innerHTML = `${day}일 ${hour}시 ${minute}분 ${second}초`;

setInterval(() => {
  const now = new Date();
  const last = new Date("2025-01-01 00:00:00");
  const dday = last - now;

  const day = Math.floor(dday / (1000 * 60 * 60 * 24));
  const hour = Math.floor((dday / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((dday / (1000 * 60)) % 60);
  const second = Math.floor((dday / 1000) % 60);

  console.log(second);
  clock.innerHTML = `${day}일 ${hour}시 ${minute}분 ${second}초`;
}, 1000);
