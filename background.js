chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          "id": 1,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://*.doubleclick.net/*",
            "resourceTypes": ["script", "image", "media"]
          }
        },
        {
          "id": 2,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://*.googlevideo.com/videoplayback*",
            "resourceTypes": ["media"]
          }
        },
        {
          "id": 3,
          "priority": 1,
          "action": { "type": "block" },
          "condition": {
            "urlFilter": "*://*.youtube.com/get_video_info*adformat=",
            "resourceTypes": ["xmlhttprequest"]
          }
        }
      ],
      removeRuleIds: [1, 2, 3]
    });
  });
  