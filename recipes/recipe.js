const ingredients = document.querySelectorAll('#ingredients ul li');

for (const each of ingredients) {
  const normalWords = each.textContent.split(' ').slice(2).join(' ');
  const boldWords = each.textContent.split(' ').slice(0, 2).join(' ');
  each.innerHTML = `<b>${boldWords}</b> ${normalWords}`;
}
