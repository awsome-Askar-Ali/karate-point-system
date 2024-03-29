import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Footer() {
     const year = new Date().getFullYear();
     return (
          <footer>
               <p>
                    Copyright <CopyrightIcon /> {year}
               </p>
          </footer>
     );
}

export default Footer;
