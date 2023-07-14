import { Avatar, Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <header className="w-full max-h-[70px] flex items-center absolute -top-[5px] z-50">
      <div className="h-min flex justify-between w-full items-center">
        <div>
          <img src="/assets/slides/common/img/Fitness_Mozgu_White.png" />
        </div>
        <div className="flex w-full justify-end gap-4">
          <Box className="flex items-center gap-2">
            <Avatar src="/assets/slides/common/img/dashboard.svg" />
            <Typography className="text-yellow" fontWeight="bold">
              Wyniki
            </Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <img src="/assets/slides/common/img/info.svg" />
            <Typography className="text-yellow" fontWeight="bold">
              O nas
            </Typography>
          </Box>
          <Button>
            <img src="/assets/slides/common/img/become_a_member_button.png" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
