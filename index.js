const buttons = document.querySelectorAll('#faq-btn-js');

buttons.forEach(button => button.addEventListener('click', handleExpand));

function handleExpand(e) {
    e.currentTarget.setAttribute('aria-expanded', e.currentTarget.getAttribute('aria-expanded') === 'true' ? 'false' : 'true')
}