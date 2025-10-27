// submission-guard.js
// Inclua este arquivo nas páginas do quiz (ex: <script src="js/submission-guard.js" defer></script>)

(function () {
  const SUBMITTED_KEY = 'bebras_submitted_v1'; // incrementar versão para invalidar flags antigas
  const ANSWERS_KEY = 'bebras_answers_v1';

  function markSubmitted(keepAnswers = false) {
    localStorage.setItem(SUBMITTED_KEY, 'true');
    if (!keepAnswers) {
      localStorage.removeItem(ANSWERS_KEY);
    }
  }

  function isSubmitted() {
    return localStorage.getItem(SUBMITTED_KEY) === 'true';
  }

  function disableInputs(root = document) {
    root.querySelectorAll('input, textarea, select, button[type="submit"], button[data-editable]').forEach(el => {
      el.disabled = true;
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.setAttribute('readonly', 'true');
      }
    });
  }

  function showSubmittedNotice(container) {
    const msg = document.createElement('div');
    msg.style.padding = '12px';
    msg.style.marginBottom = '8px';
    msg.style.background = '#fffbdd';
    msg.style.border = '1px solid #ffd54a';
    msg.style.borderRadius = '4px';
    msg.textContent = 'Você já submetiu este questionário. As respostas não podem mais ser alteradas.';
    if (container) container.insertBefore(msg, container.firstChild);
    else document.body.insertBefore(msg, document.body.firstChild);
  }

  function initOnLoad() {
    if (isSubmitted()) {
      const quizForm = document.querySelector('#quizForm');
      if (quizForm) {
        disableInputs(quizForm);
        showSubmittedNotice(quizForm);
      }
    }
  }

  function attachSubmitHandler() {
    const quizForm = document.querySelector('#quizForm');
    if (!quizForm) return;

    quizForm.addEventListener('submit', function (e) {
      // Se o envio for via AJAX, chame markSubmitted() no callback de sucesso.
      // Aqui assumimos submissão normal e marcamos imediatamente.
      markSubmitted(false); // false = remover respostas locais
    });
  }

  function interceptLogoClick() {
    const logoLink = document.querySelector('#logoLink'); // ajuste seletor conforme seu template
    if (!logoLink) return;
    logoLink.addEventListener('click', function (e) {
      if (isSubmitted()) {
        e.preventDefault();
        window.location.replace('/results.html');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initOnLoad();
    attachSubmitHandler();
    interceptLogoClick();
  });

  window.BebrasSubmissionGuard = {
    markSubmitted,
    isSubmitted
  };
})();