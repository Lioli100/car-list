import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Testando o botão de fechar a notificação!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();

function Toast({ children, text, intent }) {
  const notify = () => {
    toast(text, {
      position: toast.POSITION.TOP_CENTER,
      type: intent,
    });
    //   toast.success("Success notification!", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //   });
    //   toast.info("Information notification!", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: 10000,
    //   });
    //   toast.error("Error notification!", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //   });
    //   toast.warn(<CustomToast />, {
    //     position: toast.POSITION.BOTTOM_CENTER,
    //     autoClose: false,
    //   });
  };

  return <button onClick={notify}>{children}</button>;
}

export default Toast;
