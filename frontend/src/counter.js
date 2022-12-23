let count = 0;

document.getElementById('inc').onclick = function () {
  count += 1;
  document.getElementById('countLable').inner = count;
};

document.getElementById('dec').onclick = function () {
  count -= 1;
  document.getElementById('countLable').innerHTML = count;
};
