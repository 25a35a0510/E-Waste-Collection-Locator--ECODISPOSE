
/* ============================================================
   1. NAVIGATION
   go(id)     — show the selected page section, hide others,
                update active nav link highlight
   toggleMore — open/close the "More" dropdown menu
   closeMore  — close the dropdown (used on outside click)
   ============================================================ */

/* Pages that live inside the "More" dropdown */
const morePages = ['report', 'sources', 'tnc'];

/**
 * Switch visible page section.
 * Removes .on from all .pg divs and nav links,
 * then adds .on to the target section and its nav link.
 */
function go(id) {
  /* Hide all page sections */
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));

  /* Remove active state from all nav links */
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('on'));

  /* Show the target section */
  document.getElementById(id).classList.add('on');

  /* Highlight the matching nav link (if it exists in main nav) */
  const navEl = document.getElementById('n-' + id);
  if (navEl) navEl.classList.add('on');

  /* If target is a "More" page, highlight the More button */
  const moreBtn = document.getElementById('moreBtn');
  moreBtn.classList.toggle('active', morePages.includes(id));

  /* Close the dropdown and scroll to top */
  closeMore();
  window.scrollTo(0, 0);
}

/**
 * Toggle the "More ▼" dropdown open/closed.
 * stopPropagation prevents the document click handler from
 * immediately closing it right after opening.
 */
function toggleMore(event) {
  event.stopPropagation();
  const dropdown = document.getElementById('moreDropdown');
  const btn      = document.getElementById('moreBtn');
  const isOpen   = dropdown.classList.contains('open');

  dropdown.classList.toggle('open', !isOpen);
  btn.querySelector('.arr').style.transform = isOpen ? '' : 'rotate(180deg)';
}

/** Close the More dropdown — called on outside click and on go() */
function closeMore() {
  const dropdown = document.getElementById('moreDropdown');
  const btn      = document.getElementById('moreBtn');
  dropdown.classList.remove('open');
  btn.querySelector('.arr').style.transform = '';
}

/* Close dropdown when clicking anywhere outside it */
document.addEventListener('click', () => closeMore());

/* Close modal on Escape key press */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});


/* ============================================================
   2. SEARCH / FILTER
   filterCenters() — reads the city dropdown and category
   dropdown, filters the centers array from data.js,
   then passes results to renderCenters()
   ============================================================ */

function filterCenters() {
  const city = document.getElementById('citySelect').value;   /* e.g. "kakinada" or "" */
  const cat  = document.getElementById('catFilter').value;    /* e.g. "mobile" or ""   */

  const filtered = centers.filter(c => {
    const matchCity = !city || c.city === city;
    const matchCat  = !cat  || c.cats.includes(cat);
    return matchCity && matchCat;
  });

  renderCenters(filtered);
}


/* ============================================================
   3. RENDER CENTERS
   Builds center cards in the #resultsGrid element.
   Each card gets an onclick that opens the detail modal.
   ============================================================ */

function renderCenters(list) {
  const grid = document.getElementById('resultsGrid');

  /* Show empty state if no results match the filter */
  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>No centers found for this selection.<br>Try clearing the filters or selecting a different city.</p>
      </div>`;
    return;
  }

  /* Build one card per center */
  grid.innerHTML = list.map(center => `
    <div class="center-card" onclick='openModal(${JSON.stringify(center)})'>
      <div class="c-name">${center.name}</div>
      <div class="c-city">📍 ${center.label}</div>
      <div class="c-addr">${center.addr}</div>
      <div class="tag-row">
        ${center.cats.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="c-phone">📞 <strong>${center.phone}</strong></div>
      <div class="c-source">🗂 Source: ${center.src}</div>
      <div class="tap-hint">👆 Tap for full details &amp; directions</div>
    </div>
  `).join('');
}


/* ============================================================
   4. MODAL — CENTER DETAIL POPUP
   openModal(center)  — populate modal fields and show it
   closeModal(event)  — close only when clicking the overlay bg
   closeModalDirect() — always close (used by × button + Escape)
   ============================================================ */

function openModal(center) {
  /* Fill in all modal detail fields */
  document.getElementById('m-name').textContent  = center.name;
  document.getElementById('m-addr').textContent  = center.addr;
  document.getElementById('m-city').textContent  = center.label;
  document.getElementById('m-src').textContent   = center.src;

  /* Phone as a clickable tel: link */
  document.getElementById('m-phone').innerHTML =
    `<a href="tel:${center.phone}" style="color:var(--green);font-weight:600">${center.phone}</a>`;

  /* Category tags */
  document.getElementById('m-cats').innerHTML =
    center.cats.map(t => `<span class="tag">${t}</span>`).join('');

  /* Google Maps URL using stored lat/lng coordinates */
  const mapsURL = `https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`;
  document.getElementById('m-maplink').href = mapsURL;

  /* Show the modal overlay and prevent body scroll */
  document.getElementById('centerModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(event) {
  /* Only close if user clicked the dark overlay background, not the modal box itself */
  if (event && event.target !== document.getElementById('centerModal')) return;
  closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('centerModal').classList.remove('open');
  document.body.style.overflow = '';
}


/* ============================================================
   5. IMPACT CALCULATOR
   buildDeviceRows() — creates input rows from impactData keys
   calcImpact()      — reads quantities, multiplies by constants,
                       renders the result metrics
   ============================================================ */

function buildDeviceRows() {
  /* Generate one row per device type defined in data.js */
  document.getElementById('deviceRows').innerHTML =
    Object.entries(impactData).map(([key, val]) => `
      <div class="device-row">
        <label>${val.label}</label>
        <input class="qty-input" type="number" id="qty_${key}" min="0" value="0">
      </div>
    `).join('');
}

function calcImpact() {
  let totalCO2    = 0;
  let totalMetals = 0;
  let totalCount  = 0;

  /* Sum up impact across all device types */
  Object.keys(impactData).forEach(key => {
    const input = document.getElementById('qty_' + key);
    const qty   = parseInt(input?.value) || 0;

    totalCO2    += qty * impactData[key].co2;
    totalMetals += qty * impactData[key].metals;
    totalCount  += qty;
  });

  /* Require at least one device */
  if (!totalCount) {
    showToast('Please enter at least 1 device to calculate.');
    return;
  }

  /* Render impact metrics into the results panel */
  document.getElementById('impactOut').innerHTML = `
    <div class="impact-item">
      <div class="impact-emoji">🌿</div>
      <div>
        <div class="impact-value">${totalCO2.toFixed(1)} kg</div>
        <div class="impact-label">CO₂ emissions avoided</div>
      </div>
    </div>
    <div class="impact-item">
      <div class="impact-emoji">⚙️</div>
      <div>
        <div class="impact-value">${totalMetals.toFixed(2)} kg</div>
        <div class="impact-label">Metals recovered (copper, gold, aluminium)</div>
      </div>
    </div>
    <div class="impact-item">
      <div class="impact-emoji">🗑️</div>
      <div>
        <div class="impact-value">${totalCount} device${totalCount > 1 ? 's' : ''}</div>
        <div class="impact-label">Kept out of landfill</div>
      </div>
    </div>
    <div class="impact-item">
      <div class="impact-emoji">💧</div>
      <div>
        <div class="impact-value">${(totalCount * 120).toLocaleString()} L</div>
        <div class="impact-label">Groundwater protected (estimated)</div>
      </div>
    </div>
  `;
}


/* ============================================================
   6. DATA WIPE GUIDE
   showWipeSteps() — reads selected device type, renders the
   matching step list from wipeGuides in data.js
   ============================================================ */

function showWipeSteps() {
  const device   = document.getElementById('wipeDevice').value;
  const stepList = document.getElementById('wipeSteps');

  /* Clear steps if no device selected */
  if (!device) {
    stepList.innerHTML = '';
    return;
  }

  const steps = wipeGuides[device];

  /* Build numbered step items */
  stepList.innerHTML = steps.map((step, index) => `
    <li class="step-item">
      <div class="step-num">${index + 1}</div>
      <div class="step-body">
        <strong>${step.t}</strong><br>${step.d}
      </div>
    </li>
  `).join('');
}


/* ============================================================
   7. REPORT FORM
   submitReport() — validates form, stores report in the
                    reports array, re-renders the list
   renderReports() — builds HTML for all submitted reports
   ============================================================ */

const reports = []; /* Session-only storage — cleared on page refresh */

function submitReport() {
  const location = document.getElementById('rLocation').value;
  const desc     = document.getElementById('rDesc').value.trim();

  if (!location || !desc) {
    showToast('Please select a location and add a description.');
    return;
  }

  /* Add new report to the start of the array */
  reports.unshift({
    name    : document.getElementById('rName').value.trim() || 'Anonymous',
    location: location,
    type    : document.getElementById('rType').value,
    desc    : desc,
    time    : new Date().toLocaleString('en-IN')
  });

  /* Clear the form fields */
  document.getElementById('rName').value     = '';
  document.getElementById('rLocation').value = '';
  document.getElementById('rDesc').value     = '';

  renderReports();
  showToast('Report submitted. Thank you for helping!');
}

function renderReports() {
  const list     = document.getElementById('reportsList');
  const emptyMsg = document.getElementById('noReports');

  /* Toggle the "no reports yet" message */
  emptyMsg.style.display = reports.length ? 'none' : '';

  /* Build report cards */
  list.innerHTML = reports.map(r => `
    <div class="report-item">
      <div class="report-meta">${r.type} · ${r.location}</div>
      <div class="report-desc">${r.desc}</div>
      <div class="report-who">${r.name} · ${r.time}</div>
    </div>
  `).join('');
}


/* ============================================================
   8. PICKUP FORM
   submitPickup() — validates required fields and shows
   success toast. Clears the form.
   (Simulation only — no backend integration)
   ============================================================ */

function submitPickup() {
  const name = document.getElementById('pName').value.trim();
  const city = document.getElementById('pCity').value;
  const addr = document.getElementById('pAddr').value.trim();

  if (!name || !city || !addr) {
    showToast('Please fill in Name, City, and Address.');
    return;
  }

  /* Clear the form after submission */
  document.getElementById('pName').value  = '';
  document.getElementById('pCity').value  = '';
  document.getElementById('pAddr').value  = '';
  document.getElementById('pQty').value   = '1';

  showToast('Pickup request recorded successfully!');
}


/* ============================================================
   9. TOAST NOTIFICATION
   showToast(message) — briefly shows a message at the bottom
   of the screen. Auto-hides after 3.2 seconds.
   CSS handles the slide-up/fade animation via .show class.
   ============================================================ */

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}


/* ============================================================
   10. ACCORDION — AWARENESS PAGE
   toggleAcc(head) — closes all open accordions,
   then opens the clicked one (unless it was already open).
   ============================================================ */

function toggleAcc(head) {
  const item   = head.closest('.acc-item');
  const isOpen = item.classList.contains('open');

  /* Close all accordion items first */
  document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));

  /* Open the clicked item only if it was previously closed */
  if (!isOpen) item.classList.add('open');
}


/* ============================================================
   11. INIT — runs when the DOM is fully loaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderCenters(centers);   /* show all centers by default */
  buildDeviceRows();         /* build impact calculator inputs */
});
