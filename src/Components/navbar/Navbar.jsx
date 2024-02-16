import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import * as React from "react";
import { scroller } from "react-scroll";

const actions = [
  { icon: <ContactPageIcon />, name: "Contact Me", navText: "footer" },
  { icon: <ListAltIcon />, name: "Projects", navText: "project" },
  { icon: <PsychologyIcon />, name: "Skills", navText: "skills" },
  { icon: <ContactEmergencyIcon />, name: "About", navText: "about" },
  { icon: <HomeIcon />, name: "Home", navText: "intro" },
];

function Navbar() {

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", bottom: 20, right: 20 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                handleClose();
                scroller.scrollTo(action.navText, {
                  smooth: true,
                });
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}

export default Navbar;
