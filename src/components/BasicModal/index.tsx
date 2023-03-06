import { useState, MouseEvent } from "react";
import { useLazyQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { states } from "../../utills";
import StateName from "../StateName";
import "./styles.css";
import { GET_INFO } from "../../graphql/queries";
import { GetInfo } from "../../types/sign-in";

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
  const [getInfo, { loading, error, data }] = useLazyQuery<GetInfo>(GET_INFO);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  const handleClickSelectState = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    getInfo({
      variables: {
        input: {
          email: "gabriel.tamura@hotmail.com",
          state: target.getAttribute("data-state"),
        },
      },
    });
  };

  console.log(data);

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
              <StateName
                key={state.UF}
                name={state.Estado}
                data-state={state.UF}
                handleClickSelectState={handleClickSelectState}
              />
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
