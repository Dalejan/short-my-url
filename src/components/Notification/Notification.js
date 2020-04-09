import { store } from "react-notifications-component";

export const createNotification = (title, message, type, duration = 5000) => {
  console.log(title, message, type);
  store.addNotification({
    title: title,
    message: message,
    type: type, //success, danger, warning, info
    insert: "top",
    container: "bottom-center",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: duration,
      //onScreen: true,
    },
  });
};
