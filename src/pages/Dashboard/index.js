import React, { useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import Group from "../../components/Group";
import Bookmark from "../../components/Bookmark";

export default function Dashboard() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <Container maxWidth="xl" style={{ height: "100vh" }}>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Group
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
            />
          </Grid>
          <Grid item xs={4}>
            {selectedGroup ? (
              <Bookmark selectedGroup={selectedGroup} />
            ) : null}
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
