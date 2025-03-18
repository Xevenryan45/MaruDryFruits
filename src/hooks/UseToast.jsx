import { useState, useCallback } from "react";

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState("");

  const toast = useCallback(({ title, description }) => {
    // Here, you can implement your custom toast rendering logic.
    // For simplicity, we'll just set a message that you could render in your app.
    setToastMessage(`${title}: ${description}`);

    // Clear the message after 3 seconds
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  }, []);

  return { toast, toastMessage };
};
