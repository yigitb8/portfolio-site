import src from "@emotion/styled";
import { AppBar, Box, } from "@mui/material";
import { Button } from "@nextui-org/react";

function Navbar() {
  return (
    <>
      <Box>
        <AppBar class="bg-white flex items-center p-2">
          <Box class="flex justify-center flex-1">
            <img class="w-30 h-24" src="/src/assets/logo.png" alt="LOGO" />
          </Box>

        </AppBar>
        <hr />
        <AppBar class="bg-white flex items-center p-2">
          <Box class="flex justify-center flex-1 ">
            <Button radius="full" className="bg-gradient-to-tr from-blue-500 to-green-200 text-black shadow-lg  hover:from-green-200 hover:to-blue-500 rounded-md px-2 py-1 mx-3">
              Ana Sayfa
            </Button>
            <Button radius="full" className="bg-gradient-to-tr from-blue-500 to-green-200 text-black shadow-lg  hover:from-green-200 hover:to-blue-500  rounded-md px-3 py-1 mx-3">
              İletişim
            </Button>
          </Box>
        </AppBar >
        <hr />
      </Box>
    </>
  );
}
export default Navbar;