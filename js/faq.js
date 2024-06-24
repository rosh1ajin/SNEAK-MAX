document.addEventListener('DOMContentLoaded', (event) => {
    const accordions = document.querySelectorAll('.faq-accordion');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.faq-accordion__control');
            const content = self.querySelector('.faq-accordion__content');

            // Закрыть все аккордеоны, кроме текущего
            accordions.forEach(otherEl => {
                if (otherEl !== self) {
                    otherEl.classList.remove('open');
                    const otherControl = otherEl.querySelector('.faq-accordion__control');
                    const otherContent = otherEl.querySelector('.faq-accordion__content');
                    otherControl.setAttribute('aria-expanded', false);
                    otherContent.setAttribute('aria-hidden', true);
                    otherContent.style.maxHeight = null;
                }
            });

            // если аккордеон закрыт
            if (!self.classList.contains('open')) {
                self.classList.add('open');
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                self.classList.remove('open');
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});