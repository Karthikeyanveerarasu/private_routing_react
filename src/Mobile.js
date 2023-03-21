import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4 class="text-center">OTP was send to number</h4>
        <div class="my-4 w-50" style={{ margin: "auto" }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter OTP"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
        <div class="text-center">
          <button class="btn btn-primary btn-md my-3">
            <span style={{ fontWeight: "bold" }}>Verify</span>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function Mobile() {
  const Register = () => {
    setModalShow(true);
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",
          display: "flex"
        }}
      >
        <div class="card" style={{ width: "70%", margin: "auto" }}>
          <div class="card-title">
            <div class="text-center my-3">
              <h2
                class="display-6"
                style={{ fontSize: "2em", fontWeight: "bold" }}
              >
                REGISTER
              </h2>
              <div
                class="mar"
                style={{
                  height: "2px",
                  backgroundColor: "black",
                  width: "30%",
                  margin: "auto"
                }}
              ></div>
            </div>
          </div>
          <div
            class="card-body"
            style={{ justifyContent: "center", width: "95%", margin: "auto" }}
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Phone"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div class=" text-center">
              <span class="btn btn-success my-3 btn-lg" onClick={Register}>
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
