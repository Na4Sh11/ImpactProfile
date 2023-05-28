import React, { useEffect } from "react";

// import "../Component/chatbot.css";

const MyComponent = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "664c274e-a559-471e-8fb3-a63bc8ba107b",

      region: "jp-tok",

      serviceInstanceID: "bc8895cd-67cd-4da0-ba05-5497168122b9",

      onLoad: function (instance) {
        instance.render();
      },
    };

    const t = document.createElement("script");

    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";

    document.head.appendChild(t);

    return () => {
      // Clean up the script tag when the component unmounts

      document.head.removeChild(t);
    };
  }, []);

  return (
    <></>
  );
};

export default MyComponent;
