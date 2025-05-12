function ativarModoSimples() {
  if (document.body.classList.contains('modo-simples')) {
    document.body.classList.remove('modo-simples');
    localStorage.removeItem('modoSimples');
  } else {
    document.body.classList.add('modo-simples');
    localStorage.setItem('modoSimples', 'true');
  }
}

let fontSize = parseInt(getComputedStyle(document.body).fontSize);

function updatePreferences() {
  localStorage.setItem('fontSize', fontSize);
  localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
}

function increaseFont() {
  if (fontSize < 30) {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
    updatePreferences();
  }
}

function decreaseFont() {
  if (fontSize > 12) {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
    updatePreferences();
  }
}

function toggleContrast() {
  document.body.classList.toggle('high-contrast');
  if (document.body.classList.contains('high-contrast')) {
    document.body.style.background = '#000';
    document.body.style.color = '#fff';
  } else {
    document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    document.body.style.color = '';
  }
  updatePreferences();
}

function lerTexto(id) {
  const elemento = document.getElementById(id);
  if (elemento) {
    const texto = elemento.innerText || elemento.textContent;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    speechSynthesis.cancel(); // Para evitar sobreposição
    speechSynthesis.speak(fala);
  }
}

function lerTextoPagina() {
  const texto = document.body.innerText;
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  speechSynthesis.cancel();
  speechSynthesis.speak(fala);
}

window.onload = () => {
  // Reaplicando preferências já salvas
  const savedFontSize = localStorage.getItem('fontSize');
  const contrast = localStorage.getItem('highContrast') === 'true';
  const modoSimples = localStorage.getItem('modoSimples') === 'true';

  if (savedFontSize) {
    fontSize = parseInt(savedFontSize);
    document.body.style.fontSize = fontSize + "px";
  }

  if (contrast) {
    document.body.classList.add('high-contrast');
    document.body.style.background = '#000';
    document.body.style.color = '#fff';
  }

  if (modoSimples) {
    document.body.classList.add('modo-simples');
  }
};