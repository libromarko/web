import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Box,
  Grid,
  IconButton,
  FormHelperText,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useApi } from "../../hooks/useApi";

export default function EditGroup({
  openEditGroupSection,
  setOpenEditGroupSection,
  setUpdatedGroups,
}) {
  const { post, put, del } = useApi();
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setName(
      openEditGroupSection.group?.name ? openEditGroupSection.group?.name : ""
    );
  }, [openEditGroupSection.group]);

  const handleSave = () => {
    if (openEditGroupSection.group) {
      put(`group`, openEditGroupSection.group.id, { name: name }).then(
        (response) => {
          if (response.id) {
            setOpenEditGroupSection({ group: null, isOpen: false });
            setUpdatedGroups((prev) => !prev);
          } else {
            if (typeof response.message === "string") {
              setError([response.message]);
            } else {
              setError(response.message);
            }
          }
        }
      );
    } else {
      post("group", { name: name }).then((response) => {
        if (response.id) {
          setOpenEditGroupSection({ group: null, isOpen: false });
          setUpdatedGroups((prev) => !prev);
        } else {
          if (typeof response.message === "string") {
            setError([response.message]);
          } else {
            setError(response.message);
          }
        }
      });
    }
  };

  const handleDelete = () => {
    del("group", openEditGroupSection.group.id).then((response) => {
      if (response.id) {
        setOpenEditGroupSection({ group: null, isOpen: false });
        setUpdatedGroups((prev) => !prev);
      }
    });
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {error &&
            error.map((e, i) => (
              <FormHelperText key={i} error>
                {e}
              </FormHelperText>
            ))}
        </Grid>
        <Grid item xs={6}>
          <Input
            placeholder="Group Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            disabled={name.length <= 0}
            variant="outlined"
            startIcon={<SaveIcon />}
            onClick={() => handleSave()}
          >
            Save
          </Button>
          {openEditGroupSection.group && (
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => handleDelete()}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={2}>
          <IconButton
            aria-label="close"
            color="secondary"
            onClick={() =>
              setOpenEditGroupSection((prevState) => ({
                group: null,
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
