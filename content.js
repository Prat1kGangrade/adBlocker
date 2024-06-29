const removeAds = () => {
    // Remove video ads
    const videoAds = document.querySelectorAll('.video-ads, .ytp-ad-module');
    videoAds.forEach(ad => ad.remove());
  
    // Skip overlay ads
    const overlayAds = document.querySelectorAll('.ytp-ad-overlay-container');
    overlayAds.forEach(ad => ad.remove());
}
  