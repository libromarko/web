import React, { useEffect, useState } from "react";
import {
  Input,
  FormControl,
  Box,
  Grid,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useApi } from "../../hooks/useApi";

export default function EditBookmark({
  openEditBookmarkSection,
  setOpenEditBookmarkSection,
  setUpdatedBookmarks,
}) {
  const { post, put, del, get } = useApi();

  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (openEditBookmarkSection.bookmark) {
      setGroup(openEditBookmarkSection.bookmark.groupId);
      setUrl(openEditBookmarkSection.bookmark.url);
      setDescription(openEditBookmarkSection.bookmark.description);
    } else {
      setGroup("");
      setUrl("");
      setDescription("");
    }
    get("group/user").then((response) => {
      setGroups(response);
      setIsLoading(false);
    });
  }, [openEditBookmarkSection.bookmark]);

  const handleSave = () => {
    const body = {
      description: description,
      url: url,
      groupId: group,
    };

    if (openEditBookmarkSection.bookmark) {
      put("bookmark", openEditBookmarkSection.bookmark.id, body).then(
        (response) => {
          if (response.id) {
            setOpenEditBookmarkSection({ bookmark: null, isOpen: false });
            setUpdatedBookmarks((prev) => !prev);
          }
        }
      );
    } else {
      post("bookmark", body).then((response) => {
        console.log("response", response);
        if (response.id) {
          setOpenEditBookmarkSection({ bookmark: null, isOpen: false });
          setUpdatedBookmarks((prev) => !prev);
        }
      });
    }
  };

  const handleDelete = () => {
    del("bookmark", openEditBookmarkSection.bookmark.id).then((response) => {
      if (response.id) {
        setOpenEditBookmarkSection({ bookmark: null, isOpen: false });
        setUpdatedBookmarks((prev) => !prev);
      }
    });
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input
            placeholder="Bookmark Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Bookmark Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {!isLoading && (
            <FormControl fullWidth margin="normal">
              <InputLabel id="simple-select">Group</InputLabel>
              <Select
                labelId="simple-select"
                id="simple-select"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                autoWidth
                label="Group"
              >
                {groups.length > 0 &&
                  groups.map((group) => (
                    <MenuItem key={group.id} value={group.id}>
                      {group.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={4}>
          <Button
            disabled={url.length <= 0 || description.length <= 0}
            variant="outlined"
            startIcon={<SaveIcon />}
            onClick={() => handleSave()}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={1}>
          {openEditBookmarkSection.bookmark && (
            <IconButton
              aria-label="close"
              color="secondary"
              onClick={() => handleDelete()}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={1}>
          <IconButton
            aria-label="close"
            color="secondary"
            onClick={() =>
              setOpenEditBookmarkSection(() => ({
                bookmark: null,
                isOpen: false,
              }))
            }
          >
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
