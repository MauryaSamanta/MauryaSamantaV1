const Work = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Box>
      <Typography sx={{ fontWeight: 600 }}>DBS Bank</Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        Associate · Jul 2025 – Present
      </Typography>

      <ul style={{ paddingLeft: 18, marginTop: 8 }}>
        <li>Building Java, Spring Boot & Activity services</li>
        <li>Raised JUnit coverage above 80%</li>
        <li>Led team knowledge base initiative</li>
      </ul>
    </Box>

    <Box>
      <Typography sx={{ fontWeight: 600 }}>
        Graduate Associate (SEED Programme)
      </Typography>
      <Typography sx={{ opacity: 0.6, fontSize: 14 }}>
        Jul 2023 – Jun 2025
      </Typography>

      <ul style={{ paddingLeft: 18, marginTop: 8 }}>
        <li>Python + SQL automation for 1000+ configs</li>
        <li>Migrated vendor workflows to in-house Spring Boot app</li>
        <li>Reduced setup time from 1–2 hrs to &lt;5 mins</li>
      </ul>
    </Box>
  </Box>
);
