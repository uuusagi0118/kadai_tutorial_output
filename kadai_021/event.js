const text = document.getElementById('text');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.innerText = "ボタンをクリックしました";
    }, 2000);
});
