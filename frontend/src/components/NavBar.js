import NavLinks from "./NavLinks";
import NavLinksScreen from "./NavLinksScreen";

import useScreenSize from "../utils/useScreenSize";

import { useState } from "react";

function NavBar() {
  const screenSize = useScreenSize();
  const [visible, setVisible] = useState(false);
  return (
    <div className="p-1">
      <div className="sticky p-2 w-screen flex justify-between">
        <div className="p-2">
          <a href="/">
            <img
              style={{ borderRadius: "50%" }}
              width="70px"
              src="./images/logo.jpeg"
              alt="Logo"
            />
          </a>
        </div>
        <div>
          <div className="">
            <div className="">
              <ul className={`${screenSize.width > 680 ? "flex" : ""} `}>
                <li>
                  {screenSize.width < 680 && (
                    <button
                      className="p-2"
                      onClick={() => {
                        setVisible(!visible);
                      }}
                    >
                      <img width="25px" src="./svgs/3_lines.svg" />
                    </button>
                  )}
                </li>
                {screenSize.width > 680 && <NavLinks />}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {screenSize.width < 680 && visible && <NavLinksScreen />}
    </div>
  );
}

export default NavBar;
