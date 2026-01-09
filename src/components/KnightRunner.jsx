import { Box } from '@mui/material';

const FRAME_COUNT = 2; // change if your sprite has more/less
const FRAME_WIDTH = 48*3; // px — adjust to exact frame width
const FRAME_HEIGHT = 48*3;
const SCALE = 500;
const PixelRunner = () => {
  return (
    <Box
      sx={{
        width: FRAME_WIDTH,
        height: FRAME_HEIGHT,
        backgroundImage: 'url(/run.png)',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        mt:2,

        /* sprite animation */
        animation: `
          run-frames 0.8s steps(${FRAME_COUNT}) infinite,
          run-move 6s linear infinite
        `,
      }}
    />
  );
};

export default PixelRunner;
