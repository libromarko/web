import React, { useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import Group from "../../components/Group";
import Bookmark from "../../components/Bookmark";
import EditGroup from "../../components/EditGroup";
import EditBookmark from "../../components/EditBookmark";

export default function Dashboard() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [updatedGroups, setUpdatedGroups] = useState(false);
  const [updatedBookmarks, setUpdatedBookmarks] = useState(false);
  const [openEditGroupSection, setOpenEditGroupSection] = useState({
    isOpen: false,
    group: null,
  });
  const [openEditBookmarkSection, setOpenEditBookmarkSection] = useState({
    isOpen: false,
    bookmark: null,
  });

  return (
    <Container maxWidth="xl" style={{ minHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            {selectedGroup ? (
              <>
                {openEditBookmarkSection.isOpen ? (
                  <EditBookmark
                    openEditBookmarkSection={openEditBookmarkSection}
                    setOpenEditBookmarkSection={setOpenEditBookmarkSection}
                    setUpdatedBookmarks={setUpdatedBookmarks}
                  />
                ) : null}
                <Bookmark
                  selectedGroup={selectedGroup}
                  setOpenEditBookmarkSection={setOpenEditBookmarkSection}
                  updatedBookmarks={updatedBookmarks}
                />
              </>
            ) : null}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
