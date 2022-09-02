import React, { useEffect, useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import Group from "../../components/Group";
import Bookmark from "../../components/Bookmark";
import EditGroup from "../../components/EditGroup";
import EditBookmark from "../../components/EditBookmark";
import ActivationAlert from "../../components/ActivationAlert";
import { useApi } from "../../hooks/useApi";

export default function Dashboard() {
  const { get } = useApi();

  const [isActive, setIsActive] = useState(null);
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

  useEffect(() => {
    get("activation/user").then((response) => {
      setIsActive(response.isActive);
    });
  }, [get]);

  return (
    <Container maxWidth="xl" style={{ minHeight: "100vh" }}>
      {!isActive && <ActivationAlert />}
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {openEditGroupSection.isOpen && (
              <EditGroup
                openEditGroupSection={openEditGroupSection}
                setOpenEditGroupSection={setOpenEditGroupSection}
                setUpdatedGroups={setUpdatedGroups}
                setSelectedGroup={setSelectedGroup}
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
