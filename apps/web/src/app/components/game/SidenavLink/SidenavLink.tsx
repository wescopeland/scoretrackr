import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidenavLinkProps {
  label: string;
  to: string;
}

export const SidenavLink = ({ label, to }: SidenavLinkProps) => {
  return (
    <ListItem
      button={true}
      component={NavLink}
      to={to}
      dense={true}
      activeClassName="Mui-selected"
    >
      <ListItemText>{label}</ListItemText>
    </ListItem>
  );
};
