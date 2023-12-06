// JavaScript can be used to dynamically add content to the scrollable area

// Example: Adding 50 items dynamically
const scrollContent = document.querySelector('.scroll-content');
for (let i = 0; i < 500; i++) {
  const item = document.createElement('div');
  item.textContent = `Item ${i + 1}`;
  scrollContent.appendChild(item);
}

