import { toast } from "react-hot-toast";

const getToastId = (type, message) => `${type}-${message}`;
export const showSuccessToast = (message) => {
  toast.success(message, {
    id: getToastId("success", message), // pour empecher d'avoir deux fois le même toast affiché en même temps.
    duration: 4000,
    position: "top-center",
    style: {
      backgroundColor: "#368f8b",
      padding: "10px",
      color: "white",
      fontSize: "20px",
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    id: getToastId("error", message), // pour empecher d'avoir deux fois le même toast affiché en même temps.
    duration: 4000,
    position: "top-center",
    style: {
      backgroundColor: " #ef4444",
      padding: "6px",
      color: "white",
      fontSize: "20px",
      textAlign: "center",
    },
  });
};
