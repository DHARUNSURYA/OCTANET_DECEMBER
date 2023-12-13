document.querySelector('ul').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('gray');
    } else if (event.target.tagName === 'SPAN') {
        var parentLi = event.target.parentElement;
        parentLi.style.transition = 'opacity 1s'; 
        parentLi.style.opacity = '0'; 
        setTimeout(function () {
            parentLi.remove(); 
        }, 1000);
        event.stopPropagation();
    }
});

document.querySelector('input').addEventListener('keypress', function (event) {
    if (event.which === 13) {
        var newTodo = this.value;
        this.value = '';
        var ul = document.querySelector('ul');
        var li = document.createElement('li');
        li.innerHTML = '<span>X</span> ' + newTodo;
        ul.appendChild(li);
    }
});
