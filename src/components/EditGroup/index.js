import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Box,
  Grid,
  IconButton,
  FormHelperText,
  Switch,
  FormControlLabel,
  Paper,
  InputBase,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from "@mui/icons-material/Link";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { useApi } from "../../hooks/useApi";

export default function EditGroup({
  openEditGroupSection,
  setOpenEditGroupSection,
  setUpdatedGroups,
  setSelectedGroup,
}) {
  const { post, put, del } = useApi();

  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const copyToClipboard = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(
        window.location.href.replace("dashboard", "shared/") +
          openEditGroupSection.group.id
      );
    }
    handleTooltipOpen(true);
  };

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    setName(
      openEditGroupSection.group?.name ? openEditGroupSection.group?.name : ""
    );
    setIsPublic(openEditGroupSection.group?.public ? true : false);
  }, [openEditGroupSection.group]);

  const handleSave = () => {
    if (openEditGroupSection.group) {
      put(`group`, openEditGroupSection.group.id, {
        name: name,
        public: isPublic,
      }).then((response) => {
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
    } else {
      post("group", { name: name, public: isPublic }).then((response) => {
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
        setSelectedGroup(null);
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
        <Grid
          container
          mt={1}
          mb={1}
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={isPublic}
                  onChange={() => setIsPublic(!isPublic)}
                />
              }
              label={isPublic ? "Public" : "Private"}
            />
          </Grid>

          <Grid item xs={6}>
            {isPublic ? (
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <Paper
                  elevation={3}
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "75%",
                  }}
                >
                  <LinkIcon />
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    value={
                      window.location.href.replace("dashboard", "shared/") +
                      openEditGroupSection?.group?.id
                    }
                  />
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Copied!"
                  >
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="copy"
                      onClick={copyToClipboard}
                    >
                      <ContentPasteIcon />
                    </IconButton>
                  </Tooltip>
                </Paper>
              </ClickAwayListener>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
