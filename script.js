const starField = document.getElementById('stars');
for (let i = 0; i < 110; i += 1) {
  const star = document.createElement('i');
  star.style.cssText = `position:absolute;width:${Math.random() * 3 + 1}px;height:${Math.random() * 3 + 1}px;border-radius:50%;background:#fff;left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${Math.random() * .8 + .15};animation:twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
  starField.appendChild(star);
}
const style = document.createElement('style');
style.textContent = '@keyframes twinkle{to{opacity:.08;transform:scale(.5)}}';
document.head.appendChild(style);

function flowerBurst(amount = 36) {
  for (let i = 0; i < amount; i += 1) {
    const flower = document.createElement('span');
    flower.className = 'burst';
    flower.textContent = i % 3 === 0 ? '🌻' : '🌼';
    flower.style.left = `${50 + (Math.random() - .5) * 18}%`;
    flower.style.top = `${48 + (Math.random() - .5) * 12}%`;
    flower.style.setProperty('--x', `${(Math.random() - .5) * innerWidth}px`);
    flower.style.setProperty('--y', `${(Math.random() - .7) * innerHeight}px`);
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 1650);
  }
}
document.getElementById('flowerButton').addEventListener('click', () => flowerBurst());
document.getElementById('surpriseButton').addEventListener('click', () => {
  document.getElementById('wish').textContent = 'Mi deseo es que todas tus primaveras sean tan lindas como vos. 💛';
  flowerBurst(48);
});
