const removeAds = () => {
    // Remove video ads
    const videoAds = document.querySelectorAll('.video-ads, .ytp-ad-module');
    videoAds.forEach(ad => ad.remove());
  
    // Skip overlay ads
    const overlayAds = document.querySelectorAll('.ytp-ad-overlay-container');
    overlayAds.forEach(ad => ad.remove());
  
    // Remove sidebar ads
    const sidebarAds = document.querySelectorAll('.ytd-promoted-sparkles-text-search-renderer, .ytd-promoted-video-renderer');
    sidebarAds.forEach(ad => ad.remove());
  };
  
  // Initial ad removal
  removeAds();
  
  // Observe for new ad elements being added dynamically
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
  