
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.container ul').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('gray');
            }
            
            if (event.target.tagName === 'SPAN') {
                var parentLi = event.target.parentElement;
                parentLi.style.transition = 'opacity 1s';
                parentLi.style.opacity = '0';
                setTimeout(function () {
                    parentLi.remove();
                }, 1000);
                event.stopPropagation();
            }
        }
    });

    document.querySelector('.container input').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var newTodo = this.value.trim();
            if (newTodo !== '') {
                this.value = '';
                var ul = document.querySelector('.container ul');
                var li = document.createElement('li');
                li.innerHTML = '<span>X</span> ' + newTodo;
                ul.appendChild(li);
            }
        }
    });
});
