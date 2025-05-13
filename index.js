const buttons = document.querySelectorAll('.faq_button');

buttons.forEach(button => button.addEventListener('click', handleExpand));

function handleExpand(e) {
    const button = e.currentTarget;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(button.getAttribute('aria-controls'));

    button.setAttribute('aria-expanded', String(!expanded));
    panel.setAttribute('aria-hidden', String(expanded));

    if (!expanded) {
        panel.querySelector('p').focus();
    }
}