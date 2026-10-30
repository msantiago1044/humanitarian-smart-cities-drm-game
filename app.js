const QUESTIONS = [
  {
    id: 1,
    scope: "National",
    source: "Law 1523 of 2012",
    question: "Which Colombian law adopts the National Disaster Risk Management Policy and establishes the National Disaster Risk Management System (SNGRD)?",
    options: ["Law 99 of 1993", "Law 1523 of 2012", "Law 388 of 1997", "Decree 919 of 1989"],
    correct: 1,
    note: "Law 1523 of 2012 adopts the National Policy and establishes the SNGRD in Colombia."
  },
  {
    id: 2,
    scope: "National",
    source: "Law 1523 of 2012",
    question: "Under Law 1523 of 2012, which entity directs, coordinates, and guides the SNGRD at the national level?",
    options: [
      "Ministry of National Defense",
      "IDEAM",
      "National Unit for Disaster Risk Management (UNGRD)",
      "Colombian Civil Defense"
    ],
    correct: 2,
    note: "UNGRD directs and coordinates the National Disaster Risk Management System."
  },
  {
    id: 3,
    scope: "National",
    source: "Law 1523 of 2012 (Art. 16)",
    question: "Who presides over the National Council for Disaster Risk Management in Colombia?",
    options: [
      "The Minister of the Interior",
      "The Director of UNGRD",
      "The President of the Republic (or delegate)",
      "The Commander of the Armed Forces"
    ],
    correct: 2,
    note: "The National Council is the highest body of the SNGRD and is chaired by the President of the Republic."
  },
  {
    id: 4,
    scope: "National",
    source: "Law 1523 of 2012 (Art. 19)",
    question: "What are the three core processes and National Committees of the SNGRD?",
    options: [
      "Prevention, Mitigation, and Evacuation",
      "Risk Knowledge, Risk Reduction, and Disaster Management",
      "Forecasting, Relief Distribution, and Reconstruction",
      "Purchasing, Warehousing, and Transport"
    ],
    correct: 1,
    note: "SNGRD operates through Risk Knowledge, Risk Reduction, and Disaster Management."
  },
  {
    id: 5,
    scope: "National",
    source: "Law 1523 of 2012 (Art. 23)",
    question: "Which National Committee guides emergency preparedness, alert execution, disaster response, and recovery?",
    options: [
      "National Committee for Risk Knowledge",
      "National Committee for Risk Reduction",
      "National Committee for Disaster Management",
      "National Fiscal Committee"
    ],
    correct: 2,
    note: "The National Committee for Disaster Management leads preparedness, response, and recovery policy."
  },
  {
    id: 6,
    scope: "National",
    source: "Law 1523 of 2012 (Art. 14)",
    question: "At the municipal level in Colombia, who is the primary authority directly responsible for implementing disaster risk management processes?",
    options: [
      "The Regional Red Cross Director",
      "The Municipal Mayor (Alcalde Municipal)",
      "The Departmental Governor",
      "The Police Commander"
    ],
    correct: 1,
    note: "Article 14 establishes the Municipal Mayor as the direct guarantor of DRM in the municipality."
  },
  {
    id: 7,
    scope: "National",
    source: "Law 1523 of 2012 (Art. 47)",
    question: "Which financial fund manages economic resources for risk knowledge, reduction, and disaster management in Colombia?",
    options: [
      "Bank of the Republic Reserve",
      "National Disaster Risk Management Fund (FNGRD)",
      "General System of Royalties (SGR)",
      "IDB Emergency Trust"
    ],
    correct: 1,
    note: "The FNGRD is the special national account financing all SNGRD phases."
  },
  {
    id: 8,
    scope: "National",
    source: "SNGRD / LCA Colombia",
    question: "Which Colombian technical-scientific entity monitors seismic, volcanic, and geological hazards?",
    options: [
      "IDEAM",
      "Colombian Geological Survey (SGC)",
      "DIMAR",
      "IGAC"
    ],
    correct: 1,
    note: "The SGC (Servicio Geológico Colombiano) monitors geological, volcanic, and seismic activity."
  },
  {
    id: 9,
    scope: "National",
    source: "SNGRD / LCA Colombia",
    question: "Which Colombian institute is responsible for hydro-meteorological forecasting and climate alerts within the SNGRD?",
    options: [
      "IDEAM (Institute of Hydrology, Meteorology and Environmental Studies)",
      "INVÍAS",
      "SGC",
      "Aerocivil"
    ],
    correct: 0,
    note: "IDEAM provides official weather forecasts and hydro-meteorological early warnings."
  },
  {
    id: 10,
    scope: "National",
    source: "Logistics Cluster (2024) - LCA Colombia",
    question: "Which entities constitute the core operational response arm of the SNGRD on the ground?",
    options: [
      "Private freight forwarders and customs brokers",
      "Colombian Civil Defense, Fire Departments, Colombian Red Cross, and Military/Police Forces",
      "Ministry of Finance and DIAN",
      "Municipal planning offices"
    ],
    correct: 1,
    note: "These operational actors execute search and rescue, medical aid, and last-mile relief delivery."
  },
  {
    id: 11,
    scope: "National",
    source: "Logistics Cluster (2024) - LCA Colombia",
    question: "In the Colombia LCA, which government agency regulates customs and clearance of international humanitarian relief goods?",
    options: [
      "INVIMA",
      "DIAN (National Directorate of Taxes and Customs)",
      "ANLA",
      "Superintendence of Transport"
    ],
    correct: 1,
    note: "DIAN manages customs procedures and emergency relief import exemptions."
  },
  {
    id: 12,
    scope: "National",
    source: "Logistics Cluster (2024) - LCA Colombia",
    question: "Which Colombian authority coordinates civil aviation infrastructure and airport capacities for humanitarian airbridges?",
    options: ["ANI", "INVÍAS", "Aerocivil", "DIMAR"],
    correct: 2,
    note: "Aerocivil regulates civil aviation and airport logistics operations across Colombia."
  },
  {
    id: 13,
    scope: "International",
    source: "Logistics Cluster (2024)",
    question: "Which UN agency is the global lead of the Logistics Cluster during humanitarian emergencies?",
    options: [
      "UNHCR",
      "UNICEF",
      "WFP (World Food Programme)",
      "WHO"
    ],
    correct: 2,
    note: "The IASC designated the World Food Programme (WFP) as global lead of the Logistics Cluster."
  },
  {
    id: 14,
    scope: "International",
    source: "Logistics Cluster (2024)",
    question: "What is the main objective of the Logistics Capacity Assessment (LCA) tool?",
    options: [
      "To rank countries by GDP growth",
      "To provide baseline data on transport infrastructure, customs, storage, and logistics actors for emergency preparedness",
      "To issue financial loans to governments",
      "To recruit peacekeeping troops"
    ],
    correct: 1,
    note: "The DLCA provides logistics preparedness profiles on ports, airports, roads, warehousing, and regulations."
  },
  {
    id: 15,
    scope: "International",
    source: "United Nations System",
    question: "Which UN office coordinates global humanitarian response across clusters and manages the CERF emergency fund?",
    options: [
      "UNDP",
      "OCHA (UN Office for the Coordination of Humanitarian Affairs)",
      "UNESCO",
      "FAO"
    ],
    correct: 1,
    note: "UN OCHA leads inter-agency coordination in complex emergencies and natural disasters."
  },
  {
    id: 16,
    scope: "International",
    source: "United Nations (2015)",
    question: "Which global instrument adopted in Japan serves as the blueprint for disaster risk reduction from 2015 to 2030?",
    options: [
      "The Kyoto Protocol",
      "The Sendai Framework for Disaster Risk Reduction 2015–2030",
      "The Geneva Conventions",
      "The Basel Convention"
    ],
    correct: 1,
    note: "The Sendai Framework (2015–2030) focuses on preventing new and reducing existing disaster risk."
  },
  {
    id: 17,
    scope: "International",
    source: "United Nations (2015)",
    question: "Which UN office serves as the focal point for monitoring and implementing the Sendai Framework?",
    options: [
      "UNDRR (UN Office for Disaster Risk Reduction)",
      "UNEP",
      "UNIDO",
      "IOM"
    ],
    correct: 0,
    note: "UNDRR (formerly UNISDR) coordinates the implementation of the Sendai Framework."
  },
  {
    id: 18,
    scope: "International",
    source: "United Nations (2015) - Sendai Framework",
    question: "What are the Four Priorities for Action of the Sendai Framework (2015–2030)?",
    options: [
      "1. Fundraising; 2. Military aid; 3. Media; 4. Borders",
      "1. Understanding disaster risk; 2. Strengthening risk governance; 3. Investing in DRR for resilience; 4. Enhancing preparedness & 'Build Back Better'",
      "1. Urbanization; 2. Industrialization; 3. Privatization; 4. Digitization",
      "1. Search; 2. Rescue; 3. Triage; 4. Hospitalization"
    ],
    correct: 1,
    note: "Sendai defines 4 priorities: understanding risk, governance, investing in resilience, and preparedness/Build Back Better."
  },
  {
    id: 19,
    scope: "International",
    source: "Naciones Unidas (2015) - 2030 Agenda",
    question: "Which Sustainable Development Goal (SDG) calls for 'making cities and human settlements inclusive, safe, resilient, and sustainable'?",
    options: [
      "SDG 4 (Quality Education)",
      "SDG 8 (Decent Work)",
      "SDG 11 (Sustainable Cities and Communities)",
      "SDG 14 (Life Below Water)"
    ],
    correct: 2,
    note: "SDG 11 directly addresses urban resilience and smart sustainable cities."
  },
  {
    id: 20,
    scope: "International",
    source: "Naciones Unidas (2015) - 2030 Agenda",
    question: "Which SDG focuses on 'taking urgent action to combat climate change and its impacts' and strengthening adaptive capacity to hazards?",
    options: [
      "SDG 7 (Clean Energy)",
      "SDG 13 (Climate Action)",
      "SDG 9 (Industry & Infrastructure)",
      "SDG 16 (Peace & Institutions)"
    ],
    correct: 1,
    note: "SDG 13 (Target 13.1) mandates strengthening resilience to climate-related hazards."
  },
  {
    id: 21,
    scope: "International",
    source: "European Commission (2024) - INFORM Index",
    question: "What are the three core dimensions evaluated by the European Commission's INFORM Global Risk Index?",
    options: [
      "Imports, Exports, and Inflation",
      "Hazard & Exposure, Vulnerability, and Lack of Coping Capacity",
      "Temperature, Rainfall, and Wind Speed",
      "Military Strength, Population, and Area"
    ],
    correct: 1,
    note: "INFORM measures humanitarian risk across Hazard & Exposure, Vulnerability, and Lack of Coping Capacity."
  },
  {
    id: 22,
    scope: "International",
    source: "European Commission (2024) - INFORM Index",
    question: "Which two categories are evaluated under the 'Lack of Coping Capacity' dimension in the INFORM Risk Index?",
    options: [
      "Agriculture and Mining",
      "Institutional (DRR governance) and Infrastructure (communication, physical networks, health access)",
      "Tourism and Foreign Reserves",
      "Literacy and School Enrollment"
    ],
    correct: 1,
    note: "Lack of Coping Capacity evaluates Institutional governance and physical/health Infrastructure."
  },
  {
    id: 23,
    scope: "International",
    source: "Global Humanitarian Ecosystem",
    question: "Which global volunteer-based humanitarian network coordinates 191 National Societies and operates Regional Logistics Units (RLUs)?",
    options: [
      "WTO",
      "IFRC (International Federation of Red Cross and Red Crescent Societies)",
      "IMF",
      "Amnesty International"
    ],
    correct: 1,
    note: "The IFRC leads global Red Cross/Red Crescent disaster response and pre-positioned logistics hubs."
  },
  {
    id: 24,
    scope: "International",
    source: "LCA Colombia / OCHA",
    question: "In Colombia, which platform co-led by UN OCHA coordinates UN agencies and international NGOs to complement the SNGRD?",
    options: [
      "CONPES",
      "Humanitarian Country Team (HCT / Equipo Humanitario País - EHP)",
      "CAN",
      "Pacific Alliance"
    ],
    correct: 1,
    note: "The Humanitarian Country Team (Equipo Humanitario País) aligns international humanitarian actors with UNGRD."
  },
  {
    id: 25,
    scope: "International",
    source: "Arango Pastrana (2023)",
    question: "According to Arango Pastrana (2023), what is the central goal of multi-actor coordination in humanitarian logistics research?",
    options: [
      "Excluding local authorities during emergencies",
      "Maximizing commercial profit for private carriers",
      "Integrating public agencies, NGOs, military, and communities to optimize facility location, pre-positioning, and last-mile relief delivery",
      "Restricting data sharing to international donors"
    ],
    correct: 2,
    note: "Arango Pastrana (2023) emphasizes multi-actor coordination, pre-positioning, and last-mile optimization to reduce human suffering."
  }
];

const LETTERS = ["A", "B", "C", "D"];
let current = 0;
let answers = new Array(QUESTIONS.length).fill(null); // stores selected option index
let currentFilter = "all";

function setMode(mode) {
  document.getElementById("section-quiz").classList.toggle("active", mode === "quiz");
  document.getElementById("section-list").classList.toggle("active", mode === "list");
  document.getElementById("btn-mode-quiz").classList.toggle("active", mode === "quiz");
  document.getElementById("btn-mode-list").classList.toggle("active", mode === "list");
}

function renderQuiz() {
  const q = QUESTIONS[current];
  const total = QUESTIONS.length;
  const correctCount = answers.filter((ans, i) => ans === QUESTIONS[i].correct).length;

  document.getElementById("q-counter").textContent = `${current + 1} / ${total}`;
  document.getElementById("progress-fill").style.width = `${((current + 1) / total) * 100}%`;
  document.getElementById("score-val").textContent = correctCount;

  // Render 1-25 number pills
  const nav = document.getElementById("q-nav");
  nav.innerHTML = "";
  QUESTIONS.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className = "q-pill";
    if (idx === current) btn.classList.add("current");
    if (answers[idx] !== null) {
      btn.classList.add(answers[idx] === item.correct ? "ok" : "err");
    }
    btn.textContent = idx + 1;
    btn.onclick = () => {
      current = idx;
      document.getElementById("summary-card").classList.add("hidden");
      document.getElementById("question-card").classList.remove("hidden");
      renderQuiz();
    };
    nav.appendChild(btn);
  });

  // Render question card
  document.getElementById("q-scope").textContent = `${q.scope} Actor`;
  document.getElementById("q-source").textContent = q.source;
  document.getElementById("q-text").textContent = `${q.id}. ${q.question}`;

  const optsEl = document.getElementById("q-options");
  optsEl.innerHTML = "";
  const chosen = answers[current];
  const isAnswered = chosen !== null;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.disabled = isAnswered;

    if (isAnswered) {
      if (idx === q.correct) btn.classList.add("correct");
      else if (idx === chosen) btn.classList.add("wrong");
    }

    btn.innerHTML = `<span class="opt-letter">${LETTERS[idx]}</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(idx);
    optsEl.appendChild(btn);
  });

  const fb = document.getElementById("q-feedback");
  const fbMsg = document.getElementById("feedback-msg");
  const hint = document.getElementById("q-status-hint");

  if (isAnswered) {
    const isOk = chosen === q.correct;
    fb.className = `feedback ${isOk ? "ok" : "err"}`;
    fbMsg.innerHTML = `<strong>${isOk ? "✓ Correct!" : `✕ Incorrect (Correct: ${LETTERS[q.correct]})`}</strong> — ${q.note}`;
    hint.textContent = "Answered";
  } else {
    fb.className = "feedback hidden";
    hint.textContent = "Select an option to verify the answer";
  }

  document.getElementById("btn-prev").disabled = current === 0;
}

function selectOption(idx) {
  if (answers[current] !== null) return;
  answers[current] = idx;
  renderQuiz();
}

function goNext() {
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuiz();
  } else {
    showSummary();
  }
}

function goPrev() {
  if (current > 0) {
    current--;
    renderQuiz();
  }
}

function showSummary() {
  document.getElementById("question-card").classList.add("hidden");
  const sum = document.getElementById("summary-card");
  sum.classList.remove("hidden");

  const correctCount = answers.filter((ans, i) => ans === QUESTIONS[i].correct).length;
  const pct = Math.round((correctCount / QUESTIONS.length) * 100);
  document.getElementById("final-score").textContent = `${correctCount} / ${QUESTIONS.length}`;
  document.getElementById("final-pct").textContent = `${pct}%`;
}

function resetQuiz() {
  current = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  document.getElementById("summary-card").classList.add("hidden");
  document.getElementById("question-card").classList.remove("hidden");
  renderQuiz();
}

function filterList(scope, btnEl) {
  currentFilter = scope;
  document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderList();
}

function renderList() {
  const container = document.getElementById("all-questions-list");
  const items = QUESTIONS.filter((q) => currentFilter === "all" || q.scope === currentFilter);

  container.innerHTML = items
    .map(
      (q) => `
    <div class="qa-item">
      <div class="qa-item-head">
        <span><strong>Question #${q.id}</strong> · ${q.scope} Actor</span>
        <span>${q.source}</span>
      </div>
      <h3>${q.id}. ${q.question}</h3>
      <div class="qa-ans">✓ Correct Answer (${LETTERS[q.correct]}): ${q.options[q.correct]}</div>
      <p class="qa-note">${q.note}</p>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
  renderList();
});
