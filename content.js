const defined = (v) => v !== null && v !== undefined;

const selectors = [
    '.ytp-ad-skip-button',
    '.ytp-ad-skip-button-modern', 
    '.ytp-skip-ad-button',
    '[data-testid="ytp-skip-ad-button"]',
    '.ytp-skip-ad-button'
];

function trySkipAd() {
  for (let sel of selectors) {
    const btn = document.querySelector(sel);
    if (btn) {
      btn.click();
      // Force events if needed
      btn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      return;
    }
  }
}

// Poll every 5s for skip button
setInterval(trySkipAd, 500);

// Also watch for DOM changes
const observer = new MutationObserver(trySkipAd);
observer.observe(document.body, { childList: true, subtree: true });
