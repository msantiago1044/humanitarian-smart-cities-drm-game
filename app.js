/**
 * Humanitarian Smart Cities (203428682) - Phase 2: Humanitarian Logistics Ecosystems
 * Step 1: Individual Web 2.0 Digital Game (25 Questions on National & International DRM Actors)
 * Student: Marcelo Barraza | Role: Leader | UNAD - ECBTI
 */

const QUESTIONS_DB = [
  // PART I: NATIONAL ACTORS & COLOMBIAN DRM SYSTEM (LAW 1523 OF 2012 & LCA COLOMBIA)
  {
    id: 1,
    scope: "National",
    actorFocus: "Congress of Colombia & SNGRD",
    reference: "Congreso de la República de Colombia (2012)",
    question: "Which Colombian law adopts the National Disaster Risk Management Policy and establishes the National Disaster Risk Management System (SNGRD)?",
    options: [
      "Law 99 of 1993",
      "Law 1523 of 2012",
      "Law 388 of 1997",
      "Decree 919 of 1989"
    ],
    correctIndex: 1,
    explanation: "Law 1523 of April 24, 2012, officially adopted the National Policy on Disaster Risk Management and established the National Disaster Risk Management System (SNGRD) in Colombia."
  },
  {
    id: 2,
    scope: "National",
    actorFocus: "UNGRD (National Coordinating Entity)",
    reference: "Law 1523 of 2012, Art. 17–18",
    question: "Under Law 1523 of 2012, which entity serves as the directing, coordinating, and national guiding agency of the SNGRD in Colombia?",
    options: [
      "Ministry of National Defense",
      "Institute of Hydrology, Meteorology and Environmental Studies (IDEAM)",
      "National Unit for Disaster Risk Management (UNGRD)",
      "Colombian Civil Defense (DCC)"
    ],
    correctIndex: 2,
    explanation: "The UNGRD (Unidad Nacional para la Gestión del Riesgo de Desastres), attached to the Administrative Department of the Presidency of the Republic, directs, coordinates, and monitors the SNGRD nationwide."
  },
  {
    id: 3,
    scope: "National",
    actorFocus: "National Council for Disaster Risk Management",
    reference: "Law 1523 of 2012, Art. 16",
    question: "Who presides over the National Council for Disaster Risk Management in Colombia, the highest guiding and decision-making body of the SNGRD?",
    options: [
      "The Minister of the Interior",
      "The Director General of the UNGRD",
      "The President of the Republic (or their delegate)",
      "The Commander General of the Military Forces"
    ],
    correctIndex: 2,
    explanation: "According to Article 16 of Law 1523 of 2012, the National Council for Disaster Risk Management is the highest systemic body and is chaired directly by the President of the Republic."
  },
  {
    id: 4,
    scope: "National",
    actorFocus: "SNGRD National Committees",
    reference: "Law 1523 of 2012, Art. 19",
    question: "What are the three core processes through which the National Disaster Risk Management System (SNGRD) operates and structures its three National Committees?",
    options: [
      "Prevention, Mitigation, and Urban Evacuation",
      "Risk Knowledge, Risk Reduction, and Disaster Management",
      "Forecasting, Relief Distribution, and Reconstruction",
      "Procurement, Warehousing, and Last-Mile Transportation"
    ],
    correctIndex: 1,
    explanation: "Law 1523 of 2012 structures Colombian disaster risk governance around three core mission processes and committees: Risk Knowledge (Conocimiento del Riesgo), Risk Reduction (Reducción del Riesgo), and Disaster Management (Manejo de Desastres)."
  },
  {
    id: 5,
    scope: "National",
    actorFocus: "National Committee for Disaster Management",
    reference: "Law 1523 of 2012, Art. 23",
    question: "Which National Committee within the SNGRD is specifically responsible for guiding policies on emergency preparedness, alert execution, disaster response, and post-disaster recovery?",
    options: [
      "National Committee for Risk Knowledge",
      "National Committee for Risk Reduction",
      "National Committee for Disaster Management (Comité Nacional para el Manejo de Desastres)",
      "National Fiscal Stabilization Committee"
    ],
    correctIndex: 2,
    explanation: "Article 23 of Law 1523 of 2012 establishes that the National Committee for Disaster Management advises and guides response readiness, humanitarian relief execution, and rehabilitation/reconstruction."
  },
  {
    id: 6,
    scope: "National",
    actorFocus: "Municipal Mayors & Territorial Councils",
    reference: "Law 1523 of 2012, Art. 14",
    question: "At the local level in Colombia, who is the primary authority and direct guarantor responsible for implementing disaster risk management processes within a municipality?",
    options: [
      "The Regional Director of the Red Cross",
      "The Municipal Mayor (Alcalde Municipal)",
      "The Departmental Governor",
      "The National Police District Commander"
    ],
    correctIndex: 1,
    explanation: "Article 14 of Law 1523 of 2012 designates the Municipal Mayor as the driver of the local development system and the direct authority responsible for executing DRM processes in the municipality."
  },
  {
    id: 7,
    scope: "National",
    actorFocus: "National DRM Fund (FNGRD)",
    reference: "Law 1523 of 2012, Art. 47",
    question: "Which financial mechanism established in Colombia manages the economic resources required to fund risk knowledge, risk reduction, and emergency logistics nationwide?",
    options: [
      "Bank of the Republic Emergency Reserve",
      "National Disaster Risk Management Fund (FNGRD)",
      "General System of Royalties (SGR)",
      "Andean Development Corporation Trust"
    ],
    correctIndex: 1,
    explanation: "The Fondo Nacional de Gestión del Riesgo de Desastres (FNGRD) is a special account of the Nation with financial and budgetary autonomy that channels public and private resources for all phases of DRM."
  },
  {
    id: 8,
    scope: "National",
    actorFocus: "Colombian Geological Survey (SGC)",
    reference: "Law 1523 of 2012 / LCA Colombia (2024)",
    question: "In Colombia's technical risk knowledge ecosystem, which national scientific actor monitors seismic, volcanic, and geo-hazard threats?",
    options: [
      "IDEAM",
      "Colombian Geological Survey (SGC - Servicio Geológico Colombiano)",
      "DIMAR (General Maritime Directorate)",
      "IGAC (Agustín Codazzi Geographic Institute)"
    ],
    correctIndex: 1,
    explanation: "The SGC is a permanent member of the National Committee for Risk Knowledge and leads geological, volcanic, and seismological hazard monitoring in Colombia."
  },
  {
    id: 9,
    scope: "National",
    actorFocus: "IDEAM (Hydro-Meteorological Actor)",
    reference: "Law 1523 of 2012 / LCA Colombia (2024)",
    question: "Which Colombian scientific institute is responsible for hydro-meteorological forecasting, climate alerts, and flood/drought early warnings within the SNGRD?",
    options: [
      "IDEAM (Institute of Hydrology, Meteorology and Environmental Studies)",
      "INVÍAS (National Roads Institute)",
      "SGC (Colombian Geological Survey)",
      "Aerocivil"
    ],
    correctIndex: 0,
    explanation: "IDEAM provides technical hydro-meteorological data and official early warnings for La Niña/El Niño events, floods, landslides, and tropical cyclones across Colombia."
  },
  {
    id: 10,
    scope: "National",
    actorFocus: "SNGRD Operational Response Entities",
    reference: "Logistics Cluster (2024) - LCA Colombia",
    question: "According to the Logistics Capacity Assessment (LCA) for Colombia, which entities form the core operational response arm of the SNGRD on the ground?",
    options: [
      "Private freight forwarders and commercial customs brokers",
      "Colombian Civil Defense, Official Fire Departments, Colombian Red Cross, and the Military/Police Forces",
      "Ministry of Finance and DIAN",
      "Departmental Secretariats of Education"
    ],
    correctIndex: 1,
    explanation: "Under Law 1523 (Art. 24) and the Colombia LCA, the operational entities executing search and rescue (SAR), medical triage, and last-mile relief logistics are the Civil Defense, Fire Departments, Colombian Red Cross, and Armed/Police Forces."
  },
  {
    id: 11,
    scope: "National",
    actorFocus: "DIAN (Customs & Tax Authority)",
    reference: "Logistics Cluster (2024) - LCA Colombia",
    question: "In the Colombian Logistics Capacity Assessment (LCA), which government agency regulates customs, tax exemptions, and the clearance of international humanitarian relief goods entering the country?",
    options: [
      "INVIMA",
      "DIAN (National Directorate of Taxes and Customs)",
      "ANLA (National Authority of Environmental Licenses)",
      "Superintendence of Ports and Transport"
    ],
    correctIndex: 1,
    explanation: "DIAN regulates customs clearance procedures and enforces special emergency facilitation regimes for importing international humanitarian aid and equipment during declared disasters."
  },
  {
    id: 12,
    scope: "National",
    actorFocus: "Aerocivil (Civil Aviation Authority)",
    reference: "Logistics Cluster (2024) - LCA Colombia",
    question: "Which Colombian governmental body coordinates civil aviation infrastructure, airbridges, and airport capacities documented in the Logistics Capacity Assessment (LCA)?",
    options: [
      "ANI (National Infrastructure Agency)",
      "INVÍAS",
      "Aerocivil (Special Administrative Unit of Civil Aeronautics)",
      "DIMAR"
    ],
    correctIndex: 2,
    explanation: "Aerocivil manages air transport regulation and airport infrastructure, playing a vital logistics role when road corridors collapse and humanitarian airbridges are required."
  },

  // PART II: INTERNATIONAL FRAMEWORKS & GLOBAL HUMANITARIAN LOGISTICS ACTORS
  {
    id: 13,
    scope: "International",
    actorFocus: "World Food Programme (WFP) & Logistics Cluster",
    reference: "Logistics Cluster (2024)",
    question: "Which United Nations agency is the global lead of the Logistics Cluster, mandated to provide coordination, information management, and common logistics services during humanitarian crises?",
    options: [
      "UNHCR (UN Refugee Agency)",
      "UNICEF (UN Children's Fund)",
      "WFP (World Food Programme)",
      "WHO (World Health Organization)"
    ],
    correctIndex: 2,
    explanation: "Because of its extensive global supply chain and transport network, the Inter-Agency Standing Committee (IASC) designated the World Food Programme (WFP) as the global lead agency of the Logistics Cluster."
  },
  {
    id: 14,
    scope: "International",
    actorFocus: "Global Logistics Cluster (DLCA Platform)",
    reference: "Logistics Cluster (2024) - dlca.logcluster.org",
    question: "What is the primary purpose of the Logistics Capacity Assessment (LCA) platform maintained by the Global Logistics Cluster?",
    options: [
      "To rank countries by commercial export volume",
      "To provide baseline country data on transportation infrastructure, customs, storage, and logistics service providers for emergency preparedness",
      "To issue sovereign debt loans to disaster-affected countries",
      "To recruit military personnel for peacekeeping missions"
    ],
    correctIndex: 1,
    explanation: "The Digital Logistics Capacity Assessment (DLCA) serves as a critical preparedness repository detailing ports, airports, road networks, warehousing, fuel supply, and institutional actors prior to an emergency."
  },
  {
    id: 15,
    scope: "International",
    actorFocus: "UN OCHA (Humanitarian Coordination)",
    reference: "United Nations Humanitarian System",
    question: "Which United Nations office is responsible for bringing together humanitarian actors to ensure a coherent response to emergencies through the Cluster Approach and managing emergency funds like CERF?",
    options: [
      "UNDP (United Nations Development Programme)",
      "OCHA (United Nations Office for the Coordination of Humanitarian Affairs)",
      "UNESCO",
      "FAO (Food and Agriculture Organization)"
    ],
    correctIndex: 1,
    explanation: "UN OCHA coordinates global inter-agency humanitarian response, situation reporting, needs assessments, and emergency financing."
  },
  {
    id: 16,
    scope: "International",
    actorFocus: "Sendai Framework (2015–2030)",
    reference: "United Nations (2015) - Sendai Framework",
    question: "What is the international instrument adopted at the Third UN World Conference in Japan (2015–2030) that serves as the global blueprint for reducing disaster risk and losses?",
    options: [
      "The Kyoto Protocol",
      "The Sendai Framework for Disaster Risk Reduction 2015–2030",
      "The Geneva Conventions",
      "The Paris Agreement on Tariffs"
    ],
    correctIndex: 1,
    explanation: "Adopted in March 2015 in Sendai, Japan, the Sendai Framework (2015–2030) shifts international policy from managing post-event disasters to proactively managing and reducing disaster risk."
  },
  {
    id: 17,
    scope: "International",
    actorFocus: "UNDRR (UN Office for Disaster Risk Reduction)",
    reference: "United Nations (2015) - Sendai Framework",
    question: "Which United Nations office serves as the focal point within the UN system for the coordination, implementation, and monitoring of the Sendai Framework?",
    options: [
      "UNDRR (United Nations Office for Disaster Risk Reduction, formerly UNISDR)",
      "UNEP (UN Environment Programme)",
      "UNIDO",
      "IOM (International Organization for Migration)"
    ],
    correctIndex: 0,
    explanation: "UNDRR (formerly UNISDR) is the mandated custodian of the Sendai Framework, supporting countries in tracking targets through the Sendai Framework Monitor."
  },
  {
    id: 18,
    scope: "International",
    actorFocus: "Sendai Framework Four Priorities",
    reference: "United Nations (2015) - Sendai Framework",
    question: "Which of the following correctly lists the Four Priorities for Action established by the Sendai Framework (2015–2030)?",
    options: [
      "1. Fundraising; 2. Military intervention; 3. Media broadcasting; 4. Border control",
      "1. Understanding disaster risk; 2. Strengthening disaster risk governance; 3. Investing in DRR for resilience; 4. Enhancing disaster preparedness for effective response and to 'Build Back Better'",
      "1. Urbanization; 2. Industrialization; 3. Privatization; 4. Digitization",
      "1. Search; 2. Rescue; 3. Triage; 4. Hospitalization"
    ],
    correctIndex: 1,
    explanation: "The Sendai Framework is structured around four global priorities: (1) Understanding risk, (2) Risk governance, (3) Investing in resilience, and (4) Preparedness and 'Build Back Better' in recovery, rehabilitation, and reconstruction."
  },
  {
    id: 19,
    scope: "International",
    actorFocus: "UN 2030 Agenda — SDG 11",
    reference: "Naciones Unidas (2015) - Agenda 2030",
    question: "Within the UN 2030 Agenda for Sustainable Development (2015), which Sustainable Development Goal (SDG) explicitly calls for 'making cities and human settlements inclusive, safe, resilient, and sustainable'?",
    options: [
      "SDG 4 (Quality Education)",
      "SDG 8 (Decent Work and Economic Growth)",
      "SDG 11 (Sustainable Cities and Communities)",
      "SDG 14 (Life Below Water)"
    ],
    correctIndex: 2,
    explanation: "SDG 11 (specifically Target 11.5 and 11.b) directly connects Humanitarian Smart Cities with the Sendai Framework, aiming to significantly reduce deaths and economic losses from disasters in urban settlements."
  },
  {
    id: 20,
    scope: "International",
    actorFocus: "UN 2030 Agenda — SDG 13",
    reference: "Naciones Unidas (2015) - Agenda 2030",
    question: "Which Sustainable Development Goal (SDG) of the 2030 Agenda focuses on 'taking urgent action to combat climate change and its impacts,' including strengthening resilience to climate-related hazards?",
    options: [
      "SDG 7 (Affordable and Clean Energy)",
      "SDG 13 (Climate Action)",
      "SDG 9 (Industry, Innovation and Infrastructure)",
      "SDG 16 (Peace, Justice and Strong Institutions)"
    ],
    correctIndex: 1,
    explanation: "SDG 13 (Target 13.1) calls on all nations to strengthen resilience and adaptive capacity to climate-related hazards and natural disasters."
  },
  {
    id: 21,
    scope: "International",
    actorFocus: "European Commission JRC & IASC (INFORM Index)",
    reference: "European Commission (2024) - INFORM Risk Index",
    question: "What are the three core dimensions analyzed by the European Commission's INFORM Global Risk Index to measure humanitarian crisis and disaster risk?",
    options: [
      "Imports, Exports, and Inflation",
      "Hazard & Exposure, Vulnerability, and Lack of Coping Capacity",
      "Temperature, Rainfall, and Wind Speed",
      "Military Strength, Population Size, and Land Area"
    ],
    correctIndex: 1,
    explanation: "The INFORM Risk Index (developed by the European Commission JRC and the Inter-Agency Standing Committee) scores countries from 0 to 10 across three dimensions: Hazard & Exposure, Vulnerability, and Lack of Coping Capacity."
  },
  {
    id: 22,
    scope: "International",
    actorFocus: "INFORM Risk Index — Coping Capacity Actors",
    reference: "European Commission (2024) - INFORM Risk Index",
    question: "In the INFORM Risk Index, which two categories are evaluated under the 'Lack of Coping Capacity' dimension to assess a country's disaster response actors and logistics readiness?",
    options: [
      "Agricultural yield and mining output",
      "Institutional (DRR governance/disaster management) and Infrastructure (communication, physical networks, health system)",
      "Tourism revenue and foreign exchange reserves",
      "Primary school enrollment and literacy rates"
    ],
    correctIndex: 1,
    explanation: "INFORM divides Lack of Coping Capacity into Institutional capacity (Sendai/Hyogo DRR implementation and governance) and Infrastructure capacity (transport networks, communication, and healthcare access)."
  },
  {
    id: 23,
    scope: "International",
    actorFocus: "IFRC (Red Cross / Red Crescent Movement)",
    reference: "Arango Pastrana (2023) / Global Humanitarian Ecosystem",
    question: "Which global humanitarian network is the world's largest volunteer-based humanitarian organization, acting as an auxiliary to public authorities in disaster response and managing regional logistics hubs (RLUs)?",
    options: [
      "World Trade Organization (WTO)",
      "International Federation of Red Cross and Red Crescent Societies (IFRC)",
      "International Monetary Fund (IMF)",
      "Amnesty International"
    ],
    correctIndex: 1,
    explanation: "The IFRC coordinates 191 National Societies (including the Colombian Red Cross) and operates pre-positioned Regional Logistics Units (such as the Americas hub in Panama) for rapid emergency deployment."
  },
  {
    id: 24,
    scope: "International",
    actorFocus: "Humanitarian Country Team (HCT / Equipo Humanitario País)",
    reference: "Logistics Cluster (2024) - LCA Colombia",
    question: "In Colombia, which inter-agency coordination platform—co-led by UN OCHA—brings together UN agencies, international NGOs, and the Red Cross Movement to complement the State's SNGRD response?",
    options: [
      "National Council of Economic and Social Policy (CONPES)",
      "Humanitarian Country Team (HCT / Equipo Humanitario País - EHP)",
      "Andean Community of Nations (CAN)",
      "Pacific Alliance Trade Committee"
    ],
    correctIndex: 1,
    explanation: "The Humanitarian Country Team (Equipo Humanitario País - EHP) is the strategic forum in Colombia where UN agencies and international NGOs coordinate humanitarian action in support of UNGRD and local authorities."
  },
  {
    id: 25,
    scope: "International",
    actorFocus: "Academic Research & Multi-Actor Supply Chain Coordination",
    reference: "Arango Pastrana (2023)",
    question: "According to the bibliometric and thematic analysis by Arango Pastrana (2023) on humanitarian logistics research, what is the critical role of multi-actor coordination in humanitarian supply chains?",
    options: [
      "Eliminating the participation of local governments during emergencies",
      "Maximizing commercial profit margins for private third-party logistics providers",
      "Integrating public agencies, NGOs, military forces, and local communities to optimize facility location, inventory pre-positioning, and last-mile relief distribution under high uncertainty",
      "Restricting technology and data sharing to international donors only"
    ],
    correctIndex: 2,
    explanation: "Arango Pastrana (2023) demonstrates that modern humanitarian logistics research centers on multi-actor coordination, pre-positioning of relief supplies, facility location models, and last-mile distribution to minimize human suffering."
  }
];

// Game State
let currentIdx = 0;
let score = 0;
let streak = 0;
let answeredState = new Array(QUESTIONS_DB.length).fill(null); // null, true (correct), false (wrong)
let selectedOptionState = new Array(QUESTIONS_DB.length).fill(null);
let flashcardIdx = 0;
let catalogFilter = "all";

const LETTERS = ["A", "B", "C", "D"];

// View Navigation
function switchView(viewName) {
  document.querySelectorAll(".view-section").forEach((sec) => sec.classList.remove("active"));
  document.querySelectorAll(".mode-tab").forEach((tab) => tab.classList.remove("active"));

  const targetSec = document.getElementById(`view-${viewName}`);
  const targetTab = document.getElementById(`tab-${viewName}`);
  if (targetSec) targetSec.classList.add("active");
  if (targetTab) targetTab.classList.add("active");

  if (viewName === "game") {
    renderQuestion();
  } else if (viewName === "flashcards") {
    renderFlashcard();
  } else if (viewName === "catalog") {
    renderCatalog();
  }
}

// Start or Reset Game
function startNewGame() {
  currentIdx = 0;
  score = 0;
  streak = 0;
  answeredState = new Array(QUESTIONS_DB.length).fill(null);
  selectedOptionState = new Array(QUESTIONS_DB.length).fill(null);

  document.getElementById("quiz-active-container").classList.remove("hidden");
  document.getElementById("quiz-results-container").classList.add("hidden");

  switchView("game");
}

// Render Current Question in Game
function renderQuestion() {
  const q = QUESTIONS_DB[currentIdx];
  const total = QUESTIONS_DB.length;

  // Update HUD
  const hudCat = document.getElementById("hud-category");
  hudCat.textContent = q.scope === "National" ? "NATIONAL ACTOR (COLOMBIA)" : "INTERNATIONAL / ACADEMIC";
  document.getElementById("q-current-idx").textContent = currentIdx + 1;
  document.getElementById("q-total-count").textContent = total;
  document.getElementById("q-progress-bar").style.width = `${((currentIdx + 1) / total) * 100}%`;

  updateHudMetrics();

  // Question Content
  document.getElementById("q-actor-focus").textContent = `Actor / Focus: ${q.actorFocus}`;
  document.getElementById("q-ref-source").textContent = `Source: ${q.reference}`;
  document.getElementById("q-text").textContent = `${q.id}. ${q.question}`;

  // Options
  const optionsContainer = document.getElementById("q-options");
  optionsContainer.innerHTML = "";

  const alreadyAnswered = answeredState[currentIdx] !== null;
  const chosenIdx = selectedOptionState[currentIdx];

  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.disabled = alreadyAnswered;

    if (alreadyAnswered) {
      if (idx === q.correctIndex) {
        btn.classList.add("correct");
      } else if (idx === chosenIdx && idx !== q.correctIndex) {
        btn.classList.add("wrong");
      }
    }

    btn.innerHTML = `
      <span class="option-letter">${LETTERS[idx]}</span>
      <span>${optText}</span>
    `;

    btn.onclick = () => handleSelectAnswer(idx);
    optionsContainer.appendChild(btn);
  });

  // Feedback Box
  const feedbackBox = document.getElementById("q-feedback");
  if (alreadyAnswered) {
    showFeedbackBox(answeredState[currentIdx], q);
  } else {
    feedbackBox.classList.add("hidden");
  }

  renderNavigatorDots();
}

function handleSelectAnswer(selectedIndex) {
  if (answeredState[currentIdx] !== null) return;

  const q = QUESTIONS_DB[currentIdx];
  const isCorrect = selectedIndex === q.correctIndex;

  answeredState[currentIdx] = isCorrect;
  selectedOptionState[currentIdx] = selectedIndex;

  if (isCorrect) {
    streak += 1;
    score += 100;
  } else {
    streak = 0;
  }

  renderQuestion();
}

function showFeedbackBox(isCorrect, q) {
  const feedbackBox = document.getElementById("q-feedback");
  const icon = document.getElementById("feedback-icon");
  const title = document.getElementById("feedback-title");
  const exp = document.getElementById("feedback-explanation");
  const nextBtn = document.getElementById("btn-next-q");

  feedbackBox.classList.remove("hidden", "is-correct", "is-wrong");
  feedbackBox.classList.add(isCorrect ? "is-correct" : "is-wrong");

  if (isCorrect) {
    icon.textContent = "✓";
    title.textContent = `Correct! (+100 pts) — Official Answer: ${LETTERS[q.correctIndex]}`;
  } else {
    icon.textContent = "✕";
    title.textContent = `Incorrect — The Correct Answer is ${LETTERS[q.correctIndex]}: ${q.options[q.correctIndex]}`;
  }

  exp.textContent = q.explanation;

  const allDone = answeredState.every((s) => s !== null);
  if (allDone) {
    nextBtn.textContent = "View Final Mission Report →";
  } else if (currentIdx < QUESTIONS_DB.length - 1) {
    nextBtn.textContent = `Next Question (#${currentIdx + 2}) →`;
  } else {
    nextBtn.textContent = "Finish & View Results →";
  }
}

function nextQuestion() {
  const allDone = answeredState.every((s) => s !== null);
  if (allDone && currentIdx === QUESTIONS_DB.length - 1) {
    showFinalResults();
    return;
  }

  if (currentIdx < QUESTIONS_DB.length - 1) {
    currentIdx += 1;
    renderQuestion();
  } else {
    // Find first unanswered or show results
    const firstUnanswered = answeredState.findIndex((s) => s === null);
    if (firstUnanswered !== -1) {
      currentIdx = firstUnanswered;
      renderQuestion();
    } else {
      showFinalResults();
    }
  }
}

function updateHudMetrics() {
  const answeredCount = answeredState.filter((s) => s !== null).length;
  const correctCount = answeredState.filter((s) => s === true).length;
  const accuracy = answeredCount === 0 ? 100 : Math.round((correctCount / answeredCount) * 100);

  document.getElementById("hud-score").textContent = score;
  document.getElementById("hud-streak").textContent = `${streak}🔥`;
  document.getElementById("hud-accuracy").textContent = `${accuracy}%`;
}

function renderNavigatorDots() {
  const container = document.getElementById("q-dots-container");
  container.innerHTML = "";

  QUESTIONS_DB.forEach((q, idx) => {
    const dot = document.createElement("button");
    dot.className = "q-dot";
    if (idx === currentIdx) dot.classList.add("current");
    if (answeredState[idx] === true) dot.classList.add("answered-correct");
    if (answeredState[idx] === false) dot.classList.add("answered-wrong");

    dot.textContent = idx + 1;
    dot.title = `Jump to Question ${idx + 1}`;
    dot.onclick = () => {
      currentIdx = idx;
      renderQuestion();
    };
    container.appendChild(dot);
  });
}

function showFinalResults() {
  document.getElementById("quiz-active-container").classList.add("hidden");
  const resCard = document.getElementById("quiz-results-container");
  resCard.classList.remove("hidden");

  const total = QUESTIONS_DB.length;
  const correctCount = answeredState.filter((s) => s === true).length;
  const pct = Math.round((correctCount / total) * 100);

  const natCorrect = QUESTIONS_DB.slice(0, 12).filter((_, i) => answeredState[i] === true).length;
  const intlCorrect = QUESTIONS_DB.slice(12, 25).filter((_, i) => answeredState[i + 12] === true).length;

  document.getElementById("res-final-correct").textContent = `${correctCount} / ${total}`;
  document.getElementById("res-final-pct").textContent = `${pct}% Accuracy`;
  document.getElementById("res-total-points").textContent = `${score} pts`;
  document.getElementById("res-nat-score").textContent = `${natCorrect} / 12`;
  document.getElementById("res-intl-score").textContent = `${intlCorrect} / 13`;
}

// FLASHCARDS LOGIC
function renderFlashcard() {
  const cardEl = document.getElementById("flashcard-el");
  cardEl.classList.remove("flipped");

  const q = QUESTIONS_DB[flashcardIdx];
  document.getElementById("fc-counter").textContent = `${flashcardIdx + 1} / ${QUESTIONS_DB.length}`;

  const catBadge = document.getElementById("fc-category");
  catBadge.textContent = q.scope === "National" ? "NATIONAL (COLOMBIA)" : "INTERNATIONAL / GLOBAL";
  catBadge.className = `fw-tag ${q.scope === "National" ? "nat" : "intl"}`;

  document.getElementById("fc-number").textContent = `Question #${q.id} · ${q.actorFocus}`;
  document.getElementById("fc-question-text").textContent = q.question;

  const optList = document.getElementById("fc-options-list");
  optList.innerHTML = q.options
    .map((opt, idx) => `<div class="fc-opt-item"><strong>${LETTERS[idx]})</strong> ${opt}</div>`)
    .join("");

  document.getElementById("fc-ref-back").textContent = q.reference;
  document.getElementById("fc-answer-text").textContent = `${LETTERS[q.correctIndex]}) ${q.options[q.correctIndex]}`;
  document.getElementById("fc-explanation-text").textContent = q.explanation;
}

function flipFlashcard() {
  document.getElementById("flashcard-el").classList.toggle("flipped");
}

function nextFlashcard() {
  flashcardIdx = (flashcardIdx + 1) % QUESTIONS_DB.length;
  renderFlashcard();
}

function prevFlashcard() {
  flashcardIdx = (flashcardIdx - 1 + QUESTIONS_DB.length) % QUESTIONS_DB.length;
  renderFlashcard();
}

// TUTOR VERIFICATION CATALOG LOGIC
function setCatalogFilter(filterVal, btnEl) {
  catalogFilter = filterVal;
  document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderCatalog();
}

function renderCatalog() {
  const searchVal = (document.getElementById("catalog-search")?.value || "").toLowerCase().trim();
  const container = document.getElementById("catalog-list");

  const filtered = QUESTIONS_DB.filter((q) => {
    const matchesScope = catalogFilter === "all" || q.scope === catalogFilter;
    const matchesQuery =
      !searchVal ||
      q.question.toLowerCase().includes(searchVal) ||
      q.actorFocus.toLowerCase().includes(searchVal) ||
      q.explanation.toLowerCase().includes(searchVal) ||
      q.reference.toLowerCase().includes(searchVal) ||
      q.options.some((o) => o.toLowerCase().includes(searchVal));
    return matchesScope && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="catalog-item"><p>No questions match your current filter.</p></div>`;
    return;
  }

  container.innerHTML = filtered
    .map((q) => {
      const optionsHtml = q.options
        .map((opt, i) => {
          const isCorr = i === q.correctIndex;
          return `<div class="cat-opt ${isCorr ? "is-correct-opt" : ""}">
            <strong>${LETTERS[i]})</strong> ${opt} ${isCorr ? " ✓ (Correct Answer)" : ""}
          </div>`;
        })
        .join("");

      return `
        <article class="catalog-item">
          <div class="cat-item-top">
            <span class="cat-q-num">QUESTION #${q.id} · ${q.actorFocus}</span>
            <div>
              <span class="fw-tag ${q.scope === "National" ? "nat" : "intl"}">${q.scope.toUpperCase()}</span>
              <span class="actor-badge">${q.reference}</span>
            </div>
          </div>
          <h3 class="cat-q-title">${q.question}</h3>
          <div class="cat-options-list">
            ${optionsHtml}
          </div>
          <div class="cat-explanation">
            <strong>Academic Justification:</strong> ${q.explanation}
          </div>
        </article>
      `;
    })
    .join("");
}

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
  renderFlashcard();
  renderCatalog();
});
