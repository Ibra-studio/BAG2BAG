import { toast } from "react-hot-toast";

export const showSuccessToast = (message) => {
  toast.success(message, {
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
    duration: 4000,
    position: "top-center",
    style: {
      backgroundColor: "#368f8b",
      padding: "6px",
      color: "white",
      fontSize: "20px",
    },
  });
};
