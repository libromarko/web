import React, { useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import Group from "../../components/Group";
import Bookmark from "../../components/Bookmark";
import EditGroup from "../../components/EditGroup";

export default function Dashboard() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [updatedGroups, setUpdatedGroups] = useState(false);
  const [openEditGroupSection, setOpenEditGroupSection] = useState({
    isOpen: false,
    group: null,
  });

  console.log('openEditGroupSection', openEditGroupSection);

  return (
    <Container maxWidth="xl" style={{ height: "100vh" }}>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {openEditGroupSection.isOpen && (
              <EditGroup
                openEditGroupSection={openEditGroupSection}
                setOpenEditGroupSection={setOpenEditGroupSection}
                setUpdatedGroups={setUpdatedGroups}
              />
            )}
            <Group
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              setOpenEditGroupSection={setOpenEditGroupSection}
              updatedGroups={updatedGroups}
            />
          </Grid>
          <Grid item xs={4}>
            {selectedGroup ? <Bookmark selectedGroup={selectedGroup} /> : null}
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
