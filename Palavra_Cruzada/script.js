const size = 12;
const themeCatalog = {
  historia: {
    label: 'História',
    emoji: '🏛️',
    description: 'Palavras ligadas aos fatos e personagens mais marcantes da história do Brasil.',
    games: [
      {
        name: 'Jogo 1',
        words: [
          { answer: 'BRASIL', clue: 'País onde nasceu a nossa independência.' },
          { answer: 'COLONIA', clue: 'Período em que o Brasil foi administrado por Portugal.' },
          { answer: 'IMPERIO', clue: 'Forma de governo adotada após a independência.' },
          { answer: 'REPUBLICA', clue: 'Sistema político instaurado em 1889.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional presente em grandes feitos.' },
          { answer: 'MARIANA', clue: 'Cidade histórica ligada ao ciclo do ouro.' },
          { answer: 'BAHIA', clue: 'Estado onde a colonização teve grande impacto.' },
          { answer: 'MINAS', clue: 'Região histórica do ouro e do poder colonial.' },
          { answer: 'PEDRO', clue: 'Nome do primeiro imperador do Brasil.' },
          { answer: 'SENADO', clue: 'Instituição do poder político nacional.' }
        ]
      },
      {
        name: 'Jogo 2',
        words: [
          { answer: 'COLONIA', clue: 'Período em que o Brasil foi administrado por Portugal.' },
          { answer: 'IMPERIO', clue: 'Forma de governo adotada após a independência.' },
          { answer: 'REPUBLICA', clue: 'Sistema político instaurado em 1889.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional presente em grandes feitos.' },
          { answer: 'MARIANA', clue: 'Cidade histórica ligada ao ciclo do ouro.' },
          { answer: 'PERNAMBUCO', clue: 'Estado que marcou a história colonial.' },
          { answer: 'BAHIA', clue: 'Estado onde a colonização teve grande impacto.' },
          { answer: 'MINAS', clue: 'Região histórica do ouro e do poder colonial.' },
          { answer: 'PEDRO', clue: 'Nome do primeiro imperador do Brasil.' },
          { answer: 'TIRADENTES', clue: 'Mártir da Inconfidência Mineira.' }
        ]
      },
      {
        name: 'Jogo 3',
        words: [
          { answer: 'IMPERIO', clue: 'Forma de governo adotada após a independência.' },
          { answer: 'REPUBLICA', clue: 'Sistema político instaurado em 1889.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional presente em grandes feitos.' },
          { answer: 'MARIANA', clue: 'Cidade histórica ligada ao ciclo do ouro.' },
          { answer: 'PERNAMBUCO', clue: 'Estado que marcou a história colonial.' },
          { answer: 'BAHIA', clue: 'Estado onde a colonização teve grande impacto.' },
          { answer: 'MINAS', clue: 'Região histórica do ouro e do poder colonial.' },
          { answer: 'PEDRO', clue: 'Nome do primeiro imperador do Brasil.' },
          { answer: 'TIRADENTES', clue: 'Mártir da Inconfidência Mineira.' },
          { answer: 'SENADO', clue: 'Instituição do poder político nacional.' }
        ]
      },
      {
        name: 'Jogo 4',
        words: [
          { answer: 'REPUBLICA', clue: 'Sistema político instaurado em 1889.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional presente em grandes feitos.' },
          { answer: 'MARIANA', clue: 'Cidade histórica ligada ao ciclo do ouro.' },
          { answer: 'PERNAMBUCO', clue: 'Estado que marcou a história colonial.' },
          { answer: 'BAHIA', clue: 'Estado onde a colonização teve grande impacto.' },
          { answer: 'MINAS', clue: 'Região histórica do ouro e do poder colonial.' },
          { answer: 'PEDRO', clue: 'Nome do primeiro imperador do Brasil.' },
          { answer: 'TIRADENTES', clue: 'Mártir da Inconfidência Mineira.' },
          { answer: 'SENADO', clue: 'Instituição do poder político nacional.' },
          { answer: 'CABRAL', clue: 'Explorador que chegou ao Brasil em 1500.' }
        ]
      },
      {
        name: 'Jogo 5',
        words: [
          { answer: 'BANDEIRA', clue: 'Símbolo nacional presente em grandes feitos.' },
          { answer: 'MARIANA', clue: 'Cidade histórica ligada ao ciclo do ouro.' },
          { answer: 'PERNAMBUCO', clue: 'Estado que marcou a história colonial.' },
          { answer: 'BAHIA', clue: 'Estado onde a colonização teve grande impacto.' },
          { answer: 'MINAS', clue: 'Região histórica do ouro e do poder colonial.' },
          { answer: 'PEDRO', clue: 'Nome do primeiro imperador do Brasil.' },
          { answer: 'TIRADENTES', clue: 'Mártir da Inconfidência Mineira.' },
          { answer: 'SENADO', clue: 'Instituição do poder político nacional.' },
          { answer: 'CABRAL', clue: 'Explorador que chegou ao Brasil em 1500.' },
          { answer: 'QUINZE', clue: 'Número associado à Proclamação da República.' }
        ]
      }
    ]
  },
  geografia: {
    label: 'Geografia',
    emoji: '🌎',
    description: 'Termos ligados aos estados, regiões e paisagens do território brasileiro.',
    games: [
      {
        name: 'Jogo 1',
        words: [
          { answer: 'AMAZONIA', clue: 'Maior floresta tropical do planeta.' },
          { answer: 'PANTANAL', clue: 'Grandes áreas alagadas do Centro-Oeste.' },
          { answer: 'PARANA', clue: 'Estado brasileiro conhecido pelo rio homônimo.' },
          { answer: 'MATOGROSSO', clue: 'Estado com enorme extensão territorial.' },
          { answer: 'SAOPAULO', clue: 'Estado mais populoso do país.' },
          { answer: 'RONDONIA', clue: 'Estado do Norte com forte presença amazônica.' },
          { answer: 'RIOGRANDE', clue: 'Estado da região Sul com forte identidade cultural.' },
          { answer: 'PIRACICABA', clue: 'Cidade paulista conhecida por sua tradição rural.' },
          { answer: 'CERRADO', clue: 'Bioma típico do interior do Brasil.' },
          { answer: 'CAATINGA', clue: 'Bioma do Semiárido brasileiro.' }
        ]
      },
      {
        name: 'Jogo 2',
        words: [
          { answer: 'PANTANAL', clue: 'Grandes áreas alagadas do Centro-Oeste.' },
          { answer: 'PARANA', clue: 'Estado brasileiro conhecido pelo rio homônimo.' },
          { answer: 'MATOGROSSO', clue: 'Estado com enorme extensão territorial.' },
          { answer: 'SAOPAULO', clue: 'Estado mais populoso do país.' },
          { answer: 'RONDONIA', clue: 'Estado do Norte com forte presença amazônica.' },
          { answer: 'RIOGRANDE', clue: 'Estado da região Sul com forte identidade cultural.' },
          { answer: 'PIRACICABA', clue: 'Cidade paulista conhecida por sua tradição rural.' },
          { answer: 'CERRADO', clue: 'Bioma típico do interior do Brasil.' },
          { answer: 'CAATINGA', clue: 'Bioma do Semiárido brasileiro.' },
          { answer: 'MARANHAO', clue: 'Estado da região Nordeste com litoral extenso.' }
        ]
      },
      {
        name: 'Jogo 3',
        words: [
          { answer: 'PARANA', clue: 'Estado brasileiro conhecido pelo rio homônimo.' },
          { answer: 'MATOGROSSO', clue: 'Estado com enorme extensão territorial.' },
          { answer: 'SAOPAULO', clue: 'Estado mais populoso do país.' },
          { answer: 'RONDONIA', clue: 'Estado do Norte com forte presença amazônica.' },
          { answer: 'RIOGRANDE', clue: 'Estado da região Sul com forte identidade cultural.' },
          { answer: 'PIRACICABA', clue: 'Cidade paulista conhecida por sua tradição rural.' },
          { answer: 'CERRADO', clue: 'Bioma típico do interior do Brasil.' },
          { answer: 'CAATINGA', clue: 'Bioma do Semiárido brasileiro.' },
          { answer: 'MARANHAO', clue: 'Estado da região Nordeste com litoral extenso.' },
          { answer: 'PRAIA', clue: 'Formação costeira muito presente no Brasil.' }
        ]
      },
      {
        name: 'Jogo 4',
        words: [
          { answer: 'MATOGROSSO', clue: 'Estado com enorme extensão territorial.' },
          { answer: 'SAOPAULO', clue: 'Estado mais populoso do país.' },
          { answer: 'RONDONIA', clue: 'Estado do Norte com forte presença amazônica.' },
          { answer: 'RIOGRANDE', clue: 'Estado da região Sul com forte identidade cultural.' },
          { answer: 'PIRACICABA', clue: 'Cidade paulista conhecida por sua tradição rural.' },
          { answer: 'CERRADO', clue: 'Bioma típico do interior do Brasil.' },
          { answer: 'CAATINGA', clue: 'Bioma do Semiárido brasileiro.' },
          { answer: 'MARANHAO', clue: 'Estado da região Nordeste com litoral extenso.' },
          { answer: 'PRAIA', clue: 'Formação costeira muito presente no Brasil.' },
          { answer: 'SERRA', clue: 'Relevo montanhoso presente em várias regiões.' }
        ]
      },
      {
        name: 'Jogo 5',
        words: [
          { answer: 'SAOPAULO', clue: 'Estado mais populoso do país.' },
          { answer: 'RONDONIA', clue: 'Estado do Norte com forte presença amazônica.' },
          { answer: 'RIOGRANDE', clue: 'Estado da região Sul com forte identidade cultural.' },
          { answer: 'PIRACICABA', clue: 'Cidade paulista conhecida por sua tradição rural.' },
          { answer: 'CERRADO', clue: 'Bioma típico do interior do Brasil.' },
          { answer: 'CAATINGA', clue: 'Bioma do Semiárido brasileiro.' },
          { answer: 'MARANHAO', clue: 'Estado da região Nordeste com litoral extenso.' },
          { answer: 'PRAIA', clue: 'Formação costeira muito presente no Brasil.' },
          { answer: 'SERRA', clue: 'Relevo montanhoso presente em várias regiões.' },
          { answer: 'LITORAL', clue: 'Zona costeira do país.' }
        ]
      }
    ]
  },
  conhecimentos: {
    label: 'Conhecimentos Gerais',
    emoji: '🧠',
    description: 'Curiosidades e temas da cultura, cotidiano e identidade brasileira.',
    games: [
      {
        name: 'Jogo 1',
        words: [
          { answer: 'CARNAVAL', clue: 'Festa popular brasileira de grande tradição.' },
          { answer: 'FEIJOADA', clue: 'Prato típico muito conhecido no Brasil.' },
          { answer: 'FUTEBOL', clue: 'Esporte mais popular do país.' },
          { answer: 'CAPITAL', clue: 'Cidade sede do governo nacional.' },
          { answer: 'PREFEITO', clue: 'Chefe do Executivo municipal.' },
          { answer: 'DENGUE', clue: 'Doença transmitida pelo mosquito Aedes.' },
          { answer: 'MANGUEIRA', clue: 'Árvore associada às festas juninas.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional usado em comemorações.' },
          { answer: 'MUSEU', clue: 'Local dedicado à preservação da memória.' },
          { answer: 'BASQUETE', clue: 'Esporte praticado em quadras e escolas.' }
        ]
      },
      {
        name: 'Jogo 2',
        words: [
          { answer: 'FEIJOADA', clue: 'Prato típico muito conhecido no Brasil.' },
          { answer: 'FUTEBOL', clue: 'Esporte mais popular do país.' },
          { answer: 'CAPITAL', clue: 'Cidade sede do governo nacional.' },
          { answer: 'PREFEITO', clue: 'Chefe do Executivo municipal.' },
          { answer: 'DENGUE', clue: 'Doença transmitida pelo mosquito Aedes.' },
          { answer: 'MANGUEIRA', clue: 'Árvore associada às festas juninas.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional usado em comemorações.' },
          { answer: 'MUSEU', clue: 'Local dedicado à preservação da memória.' },
          { answer: 'BASQUETE', clue: 'Esporte praticado em quadras e escolas.' },
          { answer: 'CHURRASCO', clue: 'Tradicional prato de carne assada.' }
        ]
      },
      {
        name: 'Jogo 3',
        words: [
          { answer: 'FUTEBOL', clue: 'Esporte mais popular do país.' },
          { answer: 'CAPITAL', clue: 'Cidade sede do governo nacional.' },
          { answer: 'PREFEITO', clue: 'Chefe do Executivo municipal.' },
          { answer: 'DENGUE', clue: 'Doença transmitida pelo mosquito Aedes.' },
          { answer: 'MANGUEIRA', clue: 'Árvore associada às festas juninas.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional usado em comemorações.' },
          { answer: 'MUSEU', clue: 'Local dedicado à preservação da memória.' },
          { answer: 'BASQUETE', clue: 'Esporte praticado em quadras e escolas.' },
          { answer: 'CHURRASCO', clue: 'Tradicional prato de carne assada.' },
          { answer: 'CACAU', clue: 'Produto agrícola muito associado ao Brasil.' }
        ]
      },
      {
        name: 'Jogo 4',
        words: [
          { answer: 'CAPITAL', clue: 'Cidade sede do governo nacional.' },
          { answer: 'PREFEITO', clue: 'Chefe do Executivo municipal.' },
          { answer: 'DENGUE', clue: 'Doença transmitida pelo mosquito Aedes.' },
          { answer: 'MANGUEIRA', clue: 'Árvore associada às festas juninas.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional usado em comemorações.' },
          { answer: 'MUSEU', clue: 'Local dedicado à preservação da memória.' },
          { answer: 'BASQUETE', clue: 'Esporte praticado em quadras e escolas.' },
          { answer: 'CHURRASCO', clue: 'Tradicional prato de carne assada.' },
          { answer: 'CACAU', clue: 'Produto agrícola muito associado ao Brasil.' },
          { answer: 'CEMITERIO', clue: 'Lugar de descanso para os mortos.' }
        ]
      },
      {
        name: 'Jogo 5',
        words: [
          { answer: 'PREFEITO', clue: 'Chefe do Executivo municipal.' },
          { answer: 'DENGUE', clue: 'Doença transmitida pelo mosquito Aedes.' },
          { answer: 'MANGUEIRA', clue: 'Árvore associada às festas juninas.' },
          { answer: 'BANDEIRA', clue: 'Símbolo nacional usado em comemorações.' },
          { answer: 'MUSEU', clue: 'Local dedicado à preservação da memória.' },
          { answer: 'BASQUETE', clue: 'Esporte praticado em quadras e escolas.' },
          { answer: 'CHURRASCO', clue: 'Tradicional prato de carne assada.' },
          { answer: 'CACAU', clue: 'Produto agrícola muito associado ao Brasil.' },
          { answer: 'CEMITERIO', clue: 'Lugar de descanso para os mortos.' },
          { answer: 'CANTINA', clue: 'Local que serve refeições rápidas.' }
        ]
      }
    ]
  }
};

const state = {
  activeCell: null,
  direction: 'across',
  activeClue: null,
  checked: false
};

let answerGrid = Array.from({ length: size }, () => Array(size).fill(null));
let currentTheme = localStorage.getItem('crossword-theme') || 'historia';
let currentGameIndex = Number(localStorage.getItem('crossword-game-index') || 0);
let currentPuzzle = null;
let score = 0;
let darkMode = localStorage.getItem('crossword-dark') === 'true';

const boardEl = document.getElementById('board');
const messageEl = document.getElementById('message');
const acrossCluesEl = document.getElementById('acrossClues');
const downCluesEl = document.getElementById('downClues');
const themeLabelEl = document.getElementById('themeLabel');
const themeDescriptionEl = document.getElementById('themeDescription');
const variantLabelEl = document.getElementById('gameVariantLabel');
const scoreEl = document.getElementById('scoreValue');
const themeToggleEl = document.getElementById('themeToggle');
const startBtnEl = document.getElementById('startBtn');
const homeStatusEl = document.getElementById('homeStatus');
const backBtnEl = document.getElementById('backBtn');
const newGameBtnEl = document.getElementById('newGameBtn');
const revealBtnEl = document.getElementById('revealBtn');
const checkBtnEl = document.getElementById('checkBtn');
const themeCards = document.querySelectorAll('.theme-card');

function applyDarkMode() {
  document.body.classList.toggle('dark', darkMode);
  if (themeToggleEl) {
    themeToggleEl.textContent = darkMode ? '☀️' : '🌙';
  }
}

function isWhiteCell(row, col) {
  return answerGrid[row]?.[col] !== null && answerGrid[row]?.[col] !== undefined;
}

function getWordCells(row, col, direction) {
  if (!isWhiteCell(row, col)) return [];

  const cellsInWord = [];
  const stepR = direction === 'down' ? 1 : 0;
  const stepC = direction === 'across' ? 1 : 0;

  let r = row;
  let c = col;
  while (isWhiteCell(r - stepR, c - stepC)) {
    r -= stepR;
    c -= stepC;
  }

  while (isWhiteCell(r, c)) {
    cellsInWord.push({ row: r, col: c });
    r += stepR;
    c += stepC;
  }

  return cellsInWord;
}

function buildPuzzle(themeKey, gameIndex = currentGameIndex) {
  const game = themeCatalog[themeKey]?.games?.[gameIndex];
  if (!game) {
    return null;
  }

  const words = game.words
    .map((item) => ({ ...item, answer: item.answer.toUpperCase() }))
    .filter((item) => item.answer.length >= 4 && item.answer.length <= 10);

  if (words.length < 10) {
    return null;
  }

  const shuffledWords = [...words].sort(() => Math.random() - 0.5);
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const answers = [];

  shuffledWords.forEach((word, index) => {
    const row = index + 1;
    const col = 2;
    const letters = word.answer.split('');

    if (col + letters.length > size) {
      return;
    }

    letters.forEach((letter, letterIndex) => {
      grid[row][col + letterIndex] = letter;
    });

    answers.push({ row, col, direction: 'across', answer: word.answer, clue: word.clue, number: answers.length + 1 });
  });

  return { answers, grid };
}

function renderBoard() {
  if (!boardEl || !currentPuzzle) return;

  const cellNumbers = new Map();
  currentPuzzle.answers.forEach((word) => {
    if (!cellNumbers.has(`${word.row}-${word.col}`)) {
      cellNumbers.set(`${word.row}-${word.col}`, word.number);
    }
  });

  boardEl.innerHTML = '';
  answerGrid = Array.from({ length: size }, () => Array(size).fill(null));

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const value = currentPuzzle.grid[row][col];
      answerGrid[row][col] = value;
      const cellEl = document.createElement('div');
      cellEl.className = value ? 'cell white' : 'cell black';
      cellEl.dataset.row = row;
      cellEl.dataset.col = col;

      if (value) {
        const number = cellNumbers.get(`${row}-${col}`);
        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.maxLength = 1;
        inputEl.autocomplete = 'off';
        inputEl.spellcheck = false;
        inputEl.setAttribute('aria-label', `Célula ${row + 1}, ${col + 1}`);
        inputEl.addEventListener('focus', () => {
          state.activeCell = { row, col };
          if (state.activeClue) {
            state.direction = state.activeClue.direction;
          }
          updateHighlights();
        });
        inputEl.addEventListener('input', (event) => {
          const typed = event.target.value.toUpperCase().replace(/[^A-ZÀ-Ú]/g, '');
          event.target.value = typed;
          if (typed) {
            moveToNextCell(row, col);
          }
          updateValidation();
          checkCompletion();
        });
        inputEl.addEventListener('keydown', (event) => {
          if (event.key === 'Backspace') {
            if (event.target.value) {
              event.target.value = '';
            } else {
              moveToPreviousCell(row, col);
            }
            event.preventDefault();
            updateValidation();
            checkCompletion();
          }
          if (event.key === 'ArrowRight') moveFocus(row, col, 0, 1);
          if (event.key === 'ArrowLeft') moveFocus(row, col, 0, -1);
          if (event.key === 'ArrowDown') moveFocus(row, col, 1, 0);
          if (event.key === 'ArrowUp') moveFocus(row, col, -1, 0);
        });

        cellEl.appendChild(inputEl);
        if (number) {
          const numberEl = document.createElement('span');
          numberEl.className = 'number';
          numberEl.textContent = number;
          cellEl.appendChild(numberEl);
        }
      }

      boardEl.appendChild(cellEl);
    }
  }
}

function updateHighlights() {
  if (!boardEl) return;
  const cellsInWord = state.activeCell ? getWordCells(state.activeCell.row, state.activeCell.col, state.direction) : [];
  document.querySelectorAll('.cell.white').forEach((cell) => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const isActive = state.activeCell && state.activeCell.row === row && state.activeCell.col === col;
    const isInWord = cellsInWord.some((wordCell) => wordCell.row === row && wordCell.col === col);
    cell.classList.toggle('active', isActive);
    cell.classList.toggle('highlight', !isActive && isInWord);
  });
}

function moveToNextCell(row, col) {
  const stepR = state.direction === 'down' ? 1 : 0;
  const stepC = state.direction === 'across' ? 1 : 0;
  const nextRow = row + stepR;
  const nextCol = col + stepC;
  if (isWhiteCell(nextRow, nextCol)) {
    const nextInput = boardEl.querySelector(`[data-row="${nextRow}"][data-col="${nextCol}"] input`);
    if (nextInput) nextInput.focus();
  }
}

function moveToPreviousCell(row, col) {
  const stepR = state.direction === 'down' ? 1 : 0;
  const stepC = state.direction === 'across' ? 1 : 0;
  const prevRow = row - stepR;
  const prevCol = col - stepC;
  if (isWhiteCell(prevRow, prevCol)) {
    const prevInput = boardEl.querySelector(`[data-row="${prevRow}"][data-col="${prevCol}"] input`);
    if (prevInput) prevInput.focus();
  }
}

function moveFocus(row, col, deltaRow, deltaCol) {
  const nextRow = row + deltaRow;
  const nextCol = col + deltaCol;
  if (isWhiteCell(nextRow, nextCol)) {
    const nextInput = boardEl.querySelector(`[data-row="${nextRow}"][data-col="${nextCol}"] input`);
    if (nextInput) nextInput.focus();
  }
}

function updateValidation() {
  document.querySelectorAll('.cell.white').forEach((cell) => {
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    const input = cell.querySelector('input');
    const value = input?.value.trim().toUpperCase();
    cell.classList.remove('correct', 'incorrect');
    if (value) {
      const correct = answerGrid[row][col] === value;
      cell.classList.add(correct ? 'correct' : 'incorrect');
    }
  });
}

function getCorrectCount() {
  let count = 0;
  document.querySelectorAll('.cell.white').forEach((cell) => {
    const input = cell.querySelector('input');
    if (input?.value.trim().toUpperCase() === answerGrid[Number(cell.dataset.row)][Number(cell.dataset.col)]) {
      count += 1;
    }
  });
  return count;
}

function checkCompletion() {
  const allFilled = Array.from(document.querySelectorAll('.cell.white')).every((cell) => {
    const input = cell.querySelector('input');
    return input?.value.trim().length > 0;
  });
  const allCorrect = Array.from(document.querySelectorAll('.cell.white')).every((cell) => {
    const input = cell.querySelector('input');
    return input?.value.trim().toUpperCase() === answerGrid[Number(cell.dataset.row)][Number(cell.dataset.col)];
  });

  if (allFilled && allCorrect) {
    if (messageEl) messageEl.textContent = 'Parabéns! Você resolveu o tabuleiro.';
    if (messageEl) messageEl.className = 'message success';
  } else if (state.checked) {
    if (messageEl) messageEl.textContent = 'Algumas respostas ainda precisam de ajuste.';
    if (messageEl) messageEl.className = 'message error';
  } else {
    if (messageEl) {
      messageEl.textContent = '';
      messageEl.className = 'message';
    }
  }
}

function renderClues() {
  if (!acrossCluesEl || !currentPuzzle) return;

  const across = currentPuzzle.answers.filter((word) => word.direction === 'across');

  acrossCluesEl.innerHTML = '';

  across.forEach((word) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'clue-button';
    button.dataset.number = word.number;
    button.dataset.direction = word.direction;
    button.innerHTML = `<strong>${word.number}</strong><span>${word.clue}</span>`;
    button.addEventListener('click', () => {
      state.activeClue = word;
      state.direction = word.direction;
      focusWord(word);
      updateHighlights();
      renderClues();
    });
    item.appendChild(button);
    acrossCluesEl.appendChild(item);
  });

  if (state.activeClue) {
    const activeButtons = document.querySelectorAll('.clue-button');
    activeButtons.forEach((button) => {
      const sameNumber = button.dataset.number === String(state.activeClue.number);
      const sameDirection = button.dataset.direction === state.activeClue.direction;
      if (sameNumber && sameDirection) button.classList.add('active');
    });
  }
}

function focusWord(word) {
  const input = boardEl.querySelector(`[data-row="${word.row}"][data-col="${word.col}"] input`);
  if (input) {
    state.activeCell = { row: word.row, col: word.col };
    input.focus();
  }
}

function updateScoreDisplay() {
  if (scoreEl) scoreEl.textContent = score;
}

function startGame(themeKey, gameIndex = null) {
  const games = themeCatalog[themeKey]?.games || [];
  const nextIndex = gameIndex ?? ((currentGameIndex + 1) % games.length);
  const puzzle = buildPuzzle(themeKey, nextIndex);
  if (!puzzle) {
    if (messageEl) {
      messageEl.textContent = 'Não foi possível gerar um puzzle com os termos selecionados. Tente novamente.';
      messageEl.className = 'message error';
    }
    return;
  }

  currentTheme = themeKey;
  currentGameIndex = nextIndex;
  currentPuzzle = puzzle;
  score = 0;
  state.activeCell = null;
  state.activeClue = null;
  state.direction = 'across';
  state.checked = false;
  localStorage.setItem('crossword-theme', themeKey);
  localStorage.setItem('crossword-game-index', String(currentGameIndex));
  if (themeLabelEl) themeLabelEl.textContent = `${themeCatalog[themeKey].emoji} ${themeCatalog[themeKey].label}`;
  if (themeDescriptionEl) themeDescriptionEl.textContent = themeCatalog[themeKey].description;
  if (variantLabelEl) variantLabelEl.textContent = `Variante ${currentGameIndex + 1} de ${games.length}`;
  updateScoreDisplay();
  renderBoard();
  renderClues();
  updateHighlights();
  checkCompletion();
}

function bindThemeToggle() {
  if (themeToggleEl) {
    themeToggleEl.addEventListener('click', () => {
      darkMode = !darkMode;
      localStorage.setItem('crossword-dark', String(darkMode));
      applyDarkMode();
    });
  }
}

function initHomePage() {
  bindThemeToggle();

  themeCards.forEach((card) => {
    card.addEventListener('click', () => {
      themeCards.forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
      currentTheme = card.dataset.theme;
      if (homeStatusEl) {
        homeStatusEl.textContent = `Tema selecionado: ${themeCatalog[currentTheme].label}`;
      }
      localStorage.setItem('crossword-theme', currentTheme);
    });
  });

  if (startBtnEl) {
    startBtnEl.addEventListener('click', () => {
      window.location.href = `game.html?theme=${currentTheme}`;
    });
  }
}

function initGamePage() {
  bindThemeToggle();

  const params = new URLSearchParams(window.location.search);
  const selectedTheme = params.get('theme') || localStorage.getItem('crossword-theme') || 'historia';
  startGame(selectedTheme);

  if (backBtnEl) {
    backBtnEl.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  if (newGameBtnEl) {
    newGameBtnEl.addEventListener('click', () => {
      startGame(currentTheme);
    });
  }

  if (checkBtnEl) {
    checkBtnEl.addEventListener('click', () => {
      state.checked = true;
      const correctCount = getCorrectCount();
      if (correctCount > 0) {
        score = Math.max(score, correctCount * 5);
        updateScoreDisplay();
      }
      updateValidation();
      checkCompletion();
    });
  }

  if (revealBtnEl) {
    revealBtnEl.addEventListener('click', () => {
      document.querySelectorAll('.cell.white input').forEach((input) => {
        const row = Number(input.closest('.cell').dataset.row);
        const col = Number(input.closest('.cell').dataset.col);
        input.value = answerGrid[row][col];
      });
      document.querySelectorAll('.cell.white').forEach((cell) => cell.classList.remove('correct', 'incorrect'));
      if (messageEl) {
        messageEl.textContent = 'Solução revelada. Bom treino!';
        messageEl.className = 'message success';
      }
    });
  }
}

applyDarkMode();
if (startBtnEl) {
  initHomePage();
} else {
  initGamePage();
}
