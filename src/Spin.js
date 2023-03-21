import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Spin({ islogin, SetLogin }) {
  const [buttonname, SetButton] = useState("verify");
  const navigate = useNavigate();
  const [spinner, SetSpinner] = useState(false);
  function change() {
    SetButton("Verifying...");
    SetSpinner(true);
    // SetLogin(true);
    navigate("/login");
    // setTimeout(() => {
    //   SetButton("verified");
    //   SetSpinner(false);
    // }, 3000);
  }
  return (
    <div>
      <button class="btn btn-info" onClick={change}>
        <strong>{buttonname}</strong> &nbsp;
        {spinner && (
          <div class="spinner-border spinner-border-sm " role="status"></div>
        )}
      </button>{" "}
    </div>
  );
}
