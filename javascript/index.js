function changeText(newText) {
    const spanElement = document.querySelector('.dropdown > span');
    spanElement.innerHTML = newText;
}

document.querySelector('.dropdown > span').addEventListener('mouseover', () => {
    changeText('&#8681;Links&#8681;');
});

document.querySelector('.dropdown > span').addEventListener('mouseout', () => {
    changeText('&#8679;Links&#8679;');
});

