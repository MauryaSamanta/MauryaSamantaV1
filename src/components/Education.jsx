const Education = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <Typography sx={{ fontWeight: 600 }}>
        Digipen Institute of Technology, Singapore
      </Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        BS Computer Science · 2019 – 2023
      </Typography>

      <ul style={{ paddingLeft: 18, marginTop: 8 }}>
        <li>Minor in Mathematics</li>
        <li>Dean’s Honor List (3×)</li>
        <li>President – Student Management Committee</li>
      </ul>

      <Box sx={{ mt: 1 }}>
        <Chip label="Final Year Project" size="small" sx={{ mr: 1 }} />
        <Chip label="2nd Year Project" size="small" />
      </Box>
    </Box>

    <Box>
      <Typography sx={{ fontWeight: 600 }}>
        Singapore Polytechnic
      </Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        Diploma in Game Design · 2014 – 2017
      </Typography>
    </Box>
  </Box>
);
