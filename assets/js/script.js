const questionsData = [
  {
    id: 1,
    ods: "ODS 8 & ODS 9",
    q: "1. Estrutura e Postura de Trabalho",
    sub: "Móveis, equipamentos e postos de trabalho adequados?",
    a: "Todas as áreas são acompanhadas por alguns departamentos responsáveis por cada controle que envolve segurança, saúde, alimentação. O departamento de SHE controla toda a segurança dentro do CAD que envolva o deslocamento de pessoas nas áreas corretas, sinalizações, treinamento para operador de máquinas e todas as sinalizações para o deslocamento seguro obedecendo às normas NR11."
  },
  {
    id: 2,
    ods: "ODS 3",
    q: "2. Cuidados com a Saúde e Bem-Estar",
    sub: "Ações voltadas ao bem-estar, pausas e saúde mental?",
    a: "A empresa oferece benefícios em apoio à saúde, proporcionando assistência e acesso facilitado a psicólogos e demais apoios necessários à saúde mental e postura. Se houver necessidade de pausa, o funcionário tem liberdade para se deslocar a um espaço reservado para descompressão."
  },
  {
    id: 3,
    ods: "ODS 3 & ODS 8",
    q: "3. Prevenção de Doenças e Acidentes",
    sub: "Ações preventivas contra acidentes e afastamentos?",
    a: "São realizados briefings diários com orientações sobre diversos temas que envolvem as atividades profissionais diárias."
  },
  {
    id: 4,
    ods: "ODS 8",
    q: "4. Treinamentos e Capacitações",
    sub: "Treinamentos formais sobre ergonomia e saúde?",
    a: "Sim, é feito um trabalho constante para que as pessoas entendam as formas corretas para exercer certas atividades. A percepção geral é de uma clara melhoria no dia a dia das pessoas."
  },
  {
    id: 5,
    ods: "ODS 10",
    q: "5. Inclusão e Acessibilidade",
    sub: "Condições de trabalho para PCDs e redução de desigualdades?",
    a: "A empresa abre espaço para profissionais PCD, direciona equipe capacitada para apoiá-los no dia a dia das atividades e mantém todos os espaços com sinalizações e apoios para deslocamentos e passagem segura."
  },
  {
    id: 6,
    ods: "ODS 3",
    q: "6. Saúde Mental e Combate ao Estresse",
    sub: "Estratégias para prevenir estresse e burnout?",
    a: "Esse cuidado é direcionado para consultas com psicólogos e acesso direto à liderança para apoio e direcionamento."
  },
  {
    id: 7,
    ods: "ODS 8 & ODS 9",
    q: "7. Regras e Políticas Formais",
    sub: "Documentos e políticas formais sobre ergonomia?",
    a: "Sim, os departamentos de RH e SHE fazem as orientações com frequência sobre a política praticada pela instituição, contando com panfletos orientativos, mensagens pelo chat interno da empresa para todos os profissionais e treinamentos específicos quando necessário."
  },
  {
    id: 8,
    ods: "ODS 8",
    q: "8. Impacto na Satisfação e Produtividade",
    sub: "Reflexos da ergonomia no desempenho e motivação?",
    a: "Quando se entrega um ambiente saudável com equipamentos e profissionalismo, tem uma motivação e satisfação natural nas entregas esperadas."
  },
  {
    id: 9,
    ods: "ODS 8",
    q: "9. Clima de Trabalho e Retenção",
    sub: "Influência do cuidado com funcionários na retenção?",
    a: "Ambientes tóxicos e cobranças excessivas afetam todas as pessoas e o clima organizacional, deixando um ar tenso. O cuidado com o funcionário fortalece a permanência na empresa."
  },
  {
    id: 10,
    ods: "ODS 9 & ODS 11",
    q: "10. Principais Desafios",
    sub: "Dificuldades para manter as ações de ergonomia?",
    a: "Todas as ações envolvem planejamento e ações conjuntas de áreas que compartilham o mesmo ambiente. Faz-se necessário um esforço para o entendimento de cada área com suas responsabilidades e a instituição realizar o investimento adequado."
  }
];

function renderAccordion() {
  const container = document.getElementById('accordion-container');
  if (!container) return;

  container.innerHTML = questionsData.map(item => `
    <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 shadow-sm">
      <button onclick="toggleAccordion(${item.id})" class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-[11px] font-bold tracking-wide text-meli-blue bg-yellow-100 px-2.5 py-0.5 rounded-full">${item.ods}</span>
            <span class="text-xs text-gray-400">Pergunta 0${item.id}</span>
          </div>
          <h3 class="font-serif-editorial text-lg font-medium text-gray-900">${item.q}</h3>
          <p class="text-xs text-gray-500 font-light">${item.sub}</p>
        </div>
        <div id="icon-${item.id}" class="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 font-medium text-lg transition-transform duration-300">
          +
        </div>
      </button>
      <div id="content-${item.id}" class="hidden px-6 pb-6 pt-2 text-sm text-gray-600 border-t border-gray-100 bg-gray-50/50">
        <p class="leading-relaxed font-light"><strong class="font-semibold text-gray-900">Resposta do Entrevistado:</strong> ${item.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  
  if (content && icon) {
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.textContent = '−';
      icon.classList.add('bg-meli-yellow', 'text-gray-900', 'border-transparent');
    } else {
      content.classList.add('hidden');
      icon.textContent = '+';
      icon.classList.remove('bg-meli-yellow', 'text-gray-900', 'border-transparent');
    }
  }
}

function openModal(src, title) {
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modal = document.getElementById('image-modal');

  if (modalImg && modalTitle && modal) {
    modalImg.src = src;
    modalTitle.textContent = title;
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Inicializa a renderização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderAccordion);