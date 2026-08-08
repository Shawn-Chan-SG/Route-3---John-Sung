/* ===========================================================
   Route 3: John Sung — Great Commission Quest
   Shared game engine — drives each Team page
   =========================================================== */

(function () {
  const teamId = document.body.getAttribute("data-team");
  const team = TEAMS[teamId];
  if (!team) {
    document.getElementById("app").innerHTML = "<p style='color:#fff'>" + t("unknownTeam") + "</p>";
    return;
  }
  const STORAGE_KEY = "route3_johnsung_" + teamId;
  const seq = team.sequence; // array of CP numbers, length 8

  function normalize(s) {
    return (s || "").toString().trim().toLowerCase().replace(/\s+/g, " ");
  }

  function defaultState() {
    return {
      started: false,
      current: 0,
      frontier: 0,
      status: new Array(seq.length).fill("pending"), // pending | solved | skipped
      screen: "start", // start | checkpoint | final | done
      passageAnswers: {}
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.status) || parsed.status.length !== seq.length) {
        return defaultState();
      }
      return parsed;
    } catch (e) {
      return defaultState();
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  let state = loadState();

  const app = document.getElementById("app");

  function allSolved() {
    return state.status.every((s) => s === "solved");
  }
  function solvedCount() {
    return state.status.filter((s) => s === "solved").length;
  }

  function patternDisplay(pattern) {
    if (Array.isArray(pattern)) {
      return pattern.map((n) => Array(n).fill("_").join(" ")).join("   ·   ");
    }
    return Array(pattern).fill("_").join(" ");
  }

  function updateDocTitle() {
    document.title = t("pageTitleTeam", { teamId: teamId });
  }

  function renderProgressDots(highlightCurrent) {
    let html = '<div class="progress-row">';
    seq.forEach((cpNum, i) => {
      const st = state.status[i];
      const visited = i <= state.frontier;
      let cls = "dot";
      if (st === "solved") cls += " solved";
      else if (st === "skipped") cls += " skipped";
      if (visited) cls += " visited";
      if (highlightCurrent && i === state.current) cls += " current";
      html += `<button type="button" class="${cls}" data-dot="${i}" ${visited ? "" : "disabled"} title="${t("checkpointDotTitle", { n: i + 1 })}">${i + 1}</button>`;
    });
    html += "</div>";
    html += `<div class="progress-caption">${t("progressCaption", { solved: solvedCount(), total: seq.length })}</div>`;
    return html;
  }

  function header() {
    updateDocTitle();
    return `
      <div class="site-header">
        <img class="site-logo" src="assets/images/mm-logo.png" alt="Mission logo" />
        <span class="emoji">🌿</span>
        <h1>${t("siteTitle")}</h1>
        <p>${t("routeLine")}</p>
        <p>${t("eventLine")}</p>
        <span class="tag">${teamLabel(team)}</span>
      </div>`;
  }

  function topActions(showReset) {
    return `
      <div class="top-actions">
        <a class="back-link" href="index.html">${t("raceHome")}</a>
        <div class="top-actions-right">
          ${showReset ? `<button type="button" class="reset-link" id="resetLink">${t("resetGame")}</button>` : ""}
          <button type="button" class="lang-toggle" id="langToggle">${t("langToggle")}</button>
        </div>
      </div>`;
  }

  /* ---------------- START SCREEN ---------------- */
  function renderStart() {
    app.innerHTML = `
      ${header()}
      <div class="wrap">
        ${topActions(false)}
        <div class="card">
          <h2>${t("welcome", { team: teamLabel(team) })}</h2>
          <p>${t("introP1")}</p>
          <p>${t("introP2")}</p>
          <p>${t("introP3")}</p>
          <button type="button" class="btn btn-primary btn-full" id="beginBtn">${t("beginRace")}</button>
        </div>
      </div>
      <div class="site-footer">${t("footerTeam", { team: teamLabel(team) })}</div>
    `;
    wireCommon();
    document.getElementById("beginBtn").addEventListener("click", () => {
      state.started = true;
      state.screen = "checkpoint";
      state.current = 0;
      state.frontier = 0;
      saveState(state);
      render();
    });
  }

  /* ---------------- CHECKPOINT SCREEN ---------------- */
  function renderCheckpoint() {
    const i = state.current;
    const cpNum = seq[i];
    const cp = CP_DATA[cpNum];
    const st = state.status[i];
    const isReview = i < state.frontier;
    const solvedAll = allSolved();

    let banner = "";
    if (solvedAll) {
      banner = `
        <div class="card" style="background:linear-gradient(160deg,#fff6df,#fdeab8); border:2px solid var(--gold);">
          <h2 style="margin-top:0;">${t("allCompleteTitle")}</h2>
          <p>${t("allCompleteBody")}</p>
          <button type="button" class="btn btn-gold btn-full" id="toFinalBtn">${t("proceedFinal")}</button>
        </div>`;
    }

    let actionArea = "";
    if (st === "solved") {
      actionArea = `
        <div class="status-msg ok">${t("solvedKeyword", { answer: cp.answer.toUpperCase() })}</div>
        <div class="btn-row">
          <button type="button" class="btn btn-secondary" id="backBtn" ${i === 0 ? "disabled" : ""}>${t("back")}</button>
          <button type="button" class="btn btn-primary" id="nextBtn" ${i < state.frontier ? "" : "disabled"}>${t("next")}</button>
        </div>`;
    } else {
      const skippedNote = st === "skipped"
        ? `<div class="status-msg info">${t("skippedNote")}</div>`
        : "";
      actionArea = `
        ${skippedNote}
        <label class="field-label">${t("enterKeyword")}</label>
        <div class="pattern">${patternDisplay(cp.pattern)}</div>
        <input type="text" id="answerInput" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${t("keywordPlaceholder")}" />
        <div class="status-msg" id="answerMsg"></div>
        <div class="btn-row">
          <button type="button" class="btn btn-primary" id="submitBtn">${t("submit")}</button>
          <button type="button" class="btn btn-secondary" id="skipBtn">${t("skip")}</button>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-secondary" id="backBtn" ${i === 0 ? "disabled" : ""}>${t("back")}</button>
          ${isReview ? `<button type="button" class="btn btn-secondary" id="nextBtn">${t("next")}</button>` : ""}
        </div>`;
    }

    let hintImg = cp.hint ? `<img class="photo" src="${cp.hint}" alt="Hint" /><div class="photo-caption">${t("hintCaption")}</div>` : "";

    let plusCodeRow = cp.plusCode
      ? `<div class="plus-code-row">${cp.plusCode}</div>`
      : "";

    let lastStationNote = "";
    if (i === seq.length - 1 && !solvedAll && st !== "pending") {
      lastStationNote = `<p class="status-msg info">${t("lastStationNote", { n: seq.length - solvedCount() })}</p>`;
    }

    const cpName = cpText(cp, "name");

    app.innerHTML = `
      ${header()}
      <div class="wrap">
        ${topActions(false)}
        ${renderProgressDots(true)}
        ${banner}
        <div class="card">
          <h2>${t("checkpointTitle", { i: i + 1, n: seq.length, name: cpName })}</h2>
          <img class="photo" src="${cp.map}" alt="Map to ${cpName}" />
          <div class="photo-caption">${t("mapCaption")}</div>
          ${plusCodeRow}
          <h3>${t("whereToFind")}</h3>
          <p>${cpText(cp, "where")}</p>
          ${hintImg}
          <h3>${t("confirmBoard")}</h3>
          <img class="photo" src="${cp.board}" alt="${cpName} board" />
          <h3>${t("clue")}</h3>
          <p>${cpText(cp, "riddle")}</p>
          ${actionArea}
          ${lastStationNote}
        </div>
      </div>
      <div class="site-footer">${t("footerTeam", { team: teamLabel(team) })}</div>
    `;

    wireCommon();
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => attemptAnswer(i, cp));
      const input = document.getElementById("answerInput");
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") attemptAnswer(i, cp);
      });
    }
    const skipBtn = document.getElementById("skipBtn");
    if (skipBtn) skipBtn.addEventListener("click", () => skipCheckpoint(i));
    const backBtn = document.getElementById("backBtn");
    if (backBtn) backBtn.addEventListener("click", () => {
      state.current = Math.max(0, state.current - 1);
      saveState(state);
      render();
    });
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.addEventListener("click", () => {
      state.current = Math.min(state.frontier, state.current + 1);
      saveState(state);
      render();
    });
    const toFinalBtn = document.getElementById("toFinalBtn");
    if (toFinalBtn) toFinalBtn.addEventListener("click", () => {
      state.screen = "final";
      saveState(state);
      render();
    });
  }

  function attemptAnswer(i, cp) {
    const input = document.getElementById("answerInput");
    const msg = document.getElementById("answerMsg");
    const val = normalize(input.value);
    if (!val) {
      msg.textContent = t("pleaseTypeAnswer");
      msg.className = "status-msg error";
      return;
    }
    if (val === normalize(cp.answer)) {
      state.status[i] = "solved";
      input.classList.add("correct");
      if (allSolved()) {
        // That was the last checkpoint — auto-advance straight to the Final Challenge.
        msg.textContent = t("correctAllDone");
        msg.className = "status-msg ok";
        state.screen = "final";
        saveState(state);
        setTimeout(render, 900);
      } else {
        msg.textContent = t("correct");
        msg.className = "status-msg ok";
        advanceAfterAction(i);
      }
    } else {
      msg.textContent = t("notQuite");
      msg.className = "status-msg error";
      input.classList.add("error");
    }
  }

  function skipCheckpoint(i) {
    if (state.status[i] !== "solved") {
      state.status[i] = "skipped";
    }
    advanceAfterAction(i);
  }

  function advanceAfterAction(i) {
    const wasFrontier = i === state.frontier;
    if (wasFrontier && i < seq.length - 1) {
      state.frontier = i + 1;
      state.current = i + 1;
    }
    // If this was a review-mode action (an earlier skipped station), current stays
    // put so the participant can see the "solved" confirmation, then tap Next/a dot.
    saveState(state);
    setTimeout(render, 500);
  }

  /* ---------------- FINAL CHALLENGE SCREEN ---------------- */
  function renderFinal() {
    if (!allSolved()) {
      state.screen = "checkpoint";
      saveState(state);
      render();
      return;
    }
    const parts = PASSAGE_TEMPLATE.split(/\{(\d)\}/);
    let passageHtml = "";
    for (let p = 0; p < parts.length; p++) {
      if (p % 2 === 0) {
        passageHtml += escapeHtml(parts[p]);
      } else {
        const n = parts[p];
        passageHtml += `<input type="text" class="blank-input" data-blank="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" size="8" />`;
      }
    }

    const bankWords = shuffledBank();

    app.innerHTML = `
      ${header()}
      <div class="wrap">
        ${topActions(false)}
        <div class="card">
          <h2>${t("finalTitle")}</h2>
          <p>${t("finalIntro")}</p>
          <div class="passage">${passageHtml}</div>
          <div class="status-msg" id="finalMsg"></div>
          <div class="word-bank">
            <h3>${t("wordBank")}</h3>
            <div class="chips">${bankWords.map((w) => `<span class="chip">${w}</span>`).join("")}</div>
          </div>
          <div class="btn-row" style="margin-top:16px;">
            <button type="button" class="btn btn-secondary" id="backToChecksBtn">${t("backToCheckpoints")}</button>
            <button type="button" class="btn btn-primary" id="submitPassageBtn">${t("submitPassage")}</button>
          </div>
        </div>
      </div>
      <div class="site-footer">${t("footerTeam", { team: teamLabel(team) })}</div>
    `;

    wireCommon();
    document.getElementById("backToChecksBtn").addEventListener("click", () => {
      state.screen = "checkpoint";
      saveState(state);
      render();
    });
    document.getElementById("submitPassageBtn").addEventListener("click", checkPassage);
  }

  function shuffledBank() {
    const words = Object.keys(BLANK_SOURCE_CP).map((n) => CP_DATA[BLANK_SOURCE_CP[n]].answer);
    const arr = words.map((w) => w.replace(/\b\w/g, (c) => c.toUpperCase()));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function checkPassage() {
    const inputs = document.querySelectorAll(".blank-input");
    let allCorrect = true;
    inputs.forEach((inp) => {
      const n = inp.getAttribute("data-blank");
      const correctWord = CP_DATA[BLANK_SOURCE_CP[n]].answer;
      const ok = normalize(inp.value) === normalize(correctWord);
      inp.classList.remove("correct", "error");
      inp.classList.add(ok ? "correct" : "error");
      if (!ok) allCorrect = false;
    });
    const msg = document.getElementById("finalMsg");
    if (allCorrect) {
      msg.textContent = t("allCorrectDone");
      msg.className = "status-msg ok";
      state.screen = "done";
      saveState(state);
      setTimeout(render, 600);
    } else {
      msg.textContent = t("someWrong");
      msg.className = "status-msg error";
    }
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------------- CONGRATULATIONS SCREEN ---------------- */
  function renderDone() {
    app.innerHTML = `
      ${header()}
      <div class="wrap">
        ${topActions(false)}
        <div class="card congrats-card">
          <span class="congrats-emoji">🎉🌿🎉</span>
          <h2>${t("congratsTitle", { team: teamLabel(team) })}</h2>
          <p>${t("congratsBody")}</p>
          <p><strong>${t("congratsInstruction")}</strong></p>
        </div>
        <div class="gm-only-reset">
          <button type="button" class="reset-link-discreet" id="resetBtn2">${t("resetFacilitatorOnly")}</button>
        </div>
      </div>
      <div class="site-footer">${t("footerTeam", { team: teamLabel(team) })}</div>
      ${resetModalHtml()}
    `;
    wireResetModal();
    document.getElementById("resetBtn2").addEventListener("click", openResetModal);
  }

  /* ---------------- RESET MODAL ---------------- */
  function resetModalHtml() {
    return `
      <div class="modal-overlay" id="resetModal">
        <div class="modal-box">
          <span class="warn-icon">⚠️</span>
          <h3>${t("resetConfirmTitle")}</h3>
          <p>${t("resetConfirmBody", { team: teamLabel(team) })}</p>
          <div class="modal-actions">
            <button type="button" class="btn btn-secondary" id="cancelResetBtn">${t("cancel")}</button>
            <button type="button" class="btn btn-danger" id="confirmResetBtn">${t("yesReset")}</button>
          </div>
        </div>
      </div>`;
  }
  function openResetModal() {
    const m = document.getElementById("resetModal");
    if (m) m.classList.add("open");
  }
  function wireResetModal() {
    const cancel = document.getElementById("cancelResetBtn");
    const confirm = document.getElementById("confirmResetBtn");
    if (cancel) cancel.addEventListener("click", () => document.getElementById("resetModal").classList.remove("open"));
    if (confirm) confirm.addEventListener("click", () => {
      state = defaultState();
      saveState(state);
      render();
    });
  }

  function wireCommon() {
    const resetLink = document.getElementById("resetLink");
    if (resetLink) {
      // inject modal if not present
      if (!document.getElementById("resetModal")) {
        app.insertAdjacentHTML("beforeend", resetModalHtml());
        wireResetModal();
      }
      resetLink.addEventListener("click", openResetModal);
    }
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.addEventListener("click", () => {
        setLang(getLang() === "zh" ? "en" : "zh");
        render();
      });
    }
    document.querySelectorAll("[data-dot]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-dot"), 10);
        if (idx <= state.frontier) {
          state.current = idx;
          saveState(state);
          render();
        }
      });
    });
  }

  /* ---------------- ROUTER ---------------- */
  function render() {
    if (!state.started || state.screen === "start") {
      renderStart();
    } else if (state.screen === "final") {
      renderFinal();
    } else if (state.screen === "done") {
      renderDone();
    } else {
      renderCheckpoint();
    }
  }

  render();
})();
