import React from "react";
import { Box, Divider, List, ListItem, ListItemText } from "@material-ui/core";

export const MostRecentSubmissions = () => {
  return (
    <List aria-label="most recent submissions">
      <ListItem alignItems="flex-start">
        <Box width={1 / 5}>
          <ListItemText>Donkey Kong</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>1st</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>1,218,000</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>Wes Copeland</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>May 5, 2016</ListItemText>
        </Box>
      </ListItem>

      <Divider />

      <ListItem alignItems="center">
        <Box width={1 / 5}>
          <ListItemText>Donkey Kong Jr.</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>3rd</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>1,338,600</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>Andrew Barrow</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>Nov 8, 2018</ListItemText>
        </Box>
      </ListItem>

      <Divider />

      <ListItem alignItems="center">
        <Box width={1 / 5}>
          <ListItemText>Donkey Kong Jr.</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>8th</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>1,204,600</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>Steve Wiebe</ListItemText>
        </Box>
        <Box width={1 / 5}>
          <ListItemText>Feb 2, 2010</ListItemText>
        </Box>
      </ListItem>
    </List>
  );
};
