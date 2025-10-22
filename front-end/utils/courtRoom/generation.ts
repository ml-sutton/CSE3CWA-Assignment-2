import { GameEvent } from "../../domain/models/gameEvent";
import { Task } from "../../domain/models/task"

export const GenerateGameOutput = (tasks: Task[], events: GameEvent[], timeSec: number) => {
  const taskString = JSON.stringify(tasks, null, 2);
  const eventString = JSON.stringify(events, null, 2);
  const data = `<section id = "gameRoot"
  style = "width:100%;max-width:1000px;margin:0 auto;border:1px solid #ccc;border-radius:8px;background:#fff;position:relative;overflow:hidden;height:540px;" >

      <div id="deskBg"  style = "position:absolute;inset:0;transition:opacity .6s ease;z-index:0;pointer-events:none;opacity:1;" >
    </div>
      <div id="courtBg"  style = "position:absolute;inset:0;transition:opacity .6s ease;z-index:0;pointer-events:none;opacity:0;" >
    </div>
      <nav id="nav" style = "display:flex;gap:6px;border-bottom:1px solid #ccc;padding:6px 8px;background:rgba(248,248,248,0.9);position:relative;z-index:2;align-items:center;" >
    </nav>
      <section style="position:relative;z-index:2;background:rgba(255,255,255,0.92);padding-bottom:48px;height:100%;" >
        <h3 id="heading" style = "margin:12px 12px 8px;font-size:18px;" > </h3>
          <div id = "body" style = "padding:12px;font-size:14px;display:block;overflow:auto;height:calc(100% - 120px);" > </div>
            <div id = "timer" style = "position:absolute;top:8px;right:12px;font-weight:bold;color:#333;z-index:3;" > 5: 30 </div>

                <div id="courtOverlay"
  style = "position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:4;pointer-events:none;opacity:0;transition:opacity .3s ease;" >
    <div id="courtMsg"
  style = "font-size:26px;font-weight:bold;color:#222;text-shadow:0 1px 0 #fff;margin-bottom:12px;" >⚖️ You went to
          court — Game Over </div>
    <button id = "resetBtn"
  style = "padding:10px 16px;border:none;background:#007bff;color:#fff;border-radius:6px;cursor:pointer;font-size:16px;" > Reset
  Game </button>
    </div>

    </section>
    </section>

      <script>
      (function () {
        var deskBg = document.getElementById('deskBg');
        var courtBg = document.getElementById('courtBg');
        var nav = document.getElementById('nav');
        var heading = document.getElementById('heading');
        var body = document.getElementById('body');
        var timerDisplay = document.getElementById('timer');
        var courtOverlay = document.getElementById('courtOverlay');
        var courtMsg = document.getElementById('courtMsg');
        var resetBtn = document.getElementById('resetBtn');

        var totalTimeSec = ${timeSec};
        var elapsedSec = 0;
        var countdownInterval = null;
        var timerStarted = false;
        var hasCompletedAtLeastOneTask = false;

        var tasks = ${taskString};
        var events = [];
        var doneEvents = []; 
        var pendingEventTimers = {};
        var activeTabId = null;
        var inRevisionPhase = false; 

        const predefinedEvents = ${eventString};

        function allTabs() { return tasks.concat(events); }

        function getNextTabId() {
          let max = 0;
          allTabs().concat(doneEvents).forEach(t => { if (t.tabId > max) max = t.tabId; });
          return max + 1;
        }

        function spawnEvent(ev) {
          if (doneEvents.find(d => d.text === ev.text)) return;

          if (ev.isRevision && !hasCompletedAtLeastOneTask) return;
          const tabId = getNextTabId();
          const newEv = { ...ev, tabId, tabName: ev.text, tabBody: ev.text, isEvent: true, edited: false };
          events.push(newEv);
          renderTabs();

          pendingEventTimers[tabId] = setTimeout(() => {
            const e = events.find(x => x.tabId === tabId);
            if (e && !e.edited) goToCourt(e.court || 'You failed to fix the event');
          }, 30000);
        }

        const eventSpawner = setInterval(() => {
          if (inRevisionPhase) return; 
          const ev = predefinedEvents[Math.floor(Math.random() * predefinedEvents.length)];
          spawnEvent(ev);
          checkForRevisionTrigger();
        }, 30000);

        function checkForRevisionTrigger() {
          const allEventTexts = predefinedEvents.map(e => e.text);
          const doneTexts = doneEvents.map(e => e.text);
          const allDone = allEventTexts.every(txt => doneTexts.includes(txt));
          if (allDone && !inRevisionPhase) {
            inRevisionPhase = true;
            spawnRevisionEvents();
          }
        }

        function spawnRevisionEvents() {
        
          const shuffled = [...doneEvents].sort(() => Math.random() - 0.5);
          shuffled.forEach((done, idx) => {
            const tabId = getNextTabId();
            const revEv = {
              tabId,
              tabName: "Fix issue in " + done.tabName,
              tabBody: done.tabBody, 
              isEvent: true,
              edited: false,
              isRevision: true,
              court: done.court
            };
            events.push(revEv);
          });
          renderTabs();
        }

        function startTimer() {
          if (timerStarted) return;
          timerStarted = true;
          countdownInterval = setInterval(() => {
            elapsedSec++;
            let remaining = totalTimeSec - elapsedSec;
            if (remaining <= 0) {
              clearInterval(countdownInterval);
              goToCourt('Time up');
            }
            updateTimerDisplay();
          }, 1000);
        }

        function updateTimerDisplay() {
          let remaining = totalTimeSec - elapsedSec;
          let min = Math.floor(remaining / 60);
          let sec = remaining % 60;
          timerDisplay.textContent = min + ':' + String(sec).padStart(2, '0');
        }

        function renderTabs() {
          nav.innerHTML = '';
          const all = allTabs();

          all.forEach(tab => {
            const btn = document.createElement('button');
            btn.textContent = tab.tabName + (tab.isEvent ? ' ⚠' : '');
            btn.style.cssText = "padding:6px;border:1px solid #ccc;margin:0;border-radius:4px;";
            if (tab.isEvent) btn.style.color = 'red';
            btn.addEventListener('click', () => setActiveTab(tab.tabId));
            nav.appendChild(btn);
          });

          const pushBtn = document.createElement('button');
          pushBtn.id = 'pushBtn';
          pushBtn.textContent = 'Push ▶';
          pushBtn.style.cssText = "margin-left:auto;padding:6px 10px;border:none;background:#007bff;color:white;border-radius:4px;cursor:pointer;font-size:13px;";
          const activeTab = all.find(x => x.tabId === activeTabId);
          pushBtn.disabled = !(activeTab && activeTab.isEvent && activeTab.edited);
          pushBtn.addEventListener('click', handlePush);
          nav.appendChild(pushBtn);
        }

        function setActiveTab(tabId) {
          const tab = allTabs().find(x => x.tabId === tabId);
          if (!tab) return;
          heading.textContent = tab.tabName;
          body.innerHTML = '';

          const ta = document.createElement('textarea');
          ta.value = tab.tabBody;
          ta.spellcheck = false;
          ta.style.cssText = 'width:100%;height:200px;padding:8px;font-family:monospace;font-size:14px;border:1px solid #ccc;border-radius:4px;';
          ta.addEventListener('input', () => {
            tab.tabBody = ta.value;
            tab.edited = true;
            if (tab.isEvent && pendingEventTimers[tab.tabId]) {
              clearTimeout(pendingEventTimers[tab.tabId]);
              delete pendingEventTimers[tab.tabId];
            }
            startTimer();
            renderTabs();
          });
          body.appendChild(ta);
          activeTabId = tabId;
          renderTabs();
        }

        function handlePush() {
          const active = allTabs().find(x => x.tabId === activeTabId);
          if (!active || !active.isEvent) return alert('You can only push events!');
          if (!active.edited) return alert('You must edit the event first!');

          doneEvents.push({
            text: active.tabName,
            tabName: active.tabName,
            tabBody: active.tabBody,
            court: active.court || '',
            from: active.from || '',
          });

          events = events.filter(x => x.tabId !== active.tabId);
          alert('Event pushed successfully!');
          renderTabs();
          checkForRevisionTrigger();
        }

        function goToCourt(msg) {
          deskBg.style.opacity = '0';
          courtBg.style.opacity = '1';
          courtOverlay.style.opacity = '1';
          courtOverlay.style.pointerEvents = 'auto';
          courtMsg.textContent = msg;
          if (countdownInterval) clearInterval(countdownInterval);
        }

        resetBtn.addEventListener('click', () => {
          deskBg.style.opacity = '1';
          courtBg.style.opacity = '0';
          courtOverlay.style.opacity = '0';
          courtOverlay.style.pointerEvents = 'none';
          elapsedSec = 0;
          hasCompletedAtLeastOneTask = false;
          doneEvents = [];
          events = [];
          inRevisionPhase = false;
          tasks.forEach(t => t.edited = false);
          renderTabs();
        });

        renderTabs();
      })();

  </script>`;
  return data
};
