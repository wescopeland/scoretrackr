import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@material-ui/core";

const StyledTypography = styled(Typography)({
  flex: "1 1 auto",
});

interface RecentSubmissionProps {
  gameName: string;
  trackName: string;
  playerAlias: string;
  score: number;
  date: number;
  position: number;
}

export const RecentSubmission = () => {
  return (
    <>
      <List className="pt-1 pb-1">
        <ListItem className="d-flex">
          <ListItemText primary="Donkey Kong" />
          <ListItemText primary="1,218,000" secondary="Factory settings" />
          <StyledTypography>Wes Copeland</StyledTypography>
          <Typography>5 days ago</Typography>
        </ListItem>
      </List>
    </>
  );
};
