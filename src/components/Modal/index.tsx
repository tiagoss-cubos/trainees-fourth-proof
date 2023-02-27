import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { states } from "../../utills";
import "./styles.css";
import StateName from "../StateName";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 656,
  height: 664,
  p: 8,
  backgroundColor: "#fff",
  borderRadius: "16px",
  border: "none",
};

const BasicModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h1 className='modal__title'>Olá Trainee 😃,</h1>
          <div className='container__state'>
            {states.map((state) => (
              <StateName key={state.UF} name={state.Estado} />
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
