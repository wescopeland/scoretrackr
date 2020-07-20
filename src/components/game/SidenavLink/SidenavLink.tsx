import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

interface SidenavLinkProps {
  label: string;
  to: string;
}

export const SidenavLink = ({ label, to }: SidenavLinkProps) => {
  // TODO: Fix activeClassName
  return (
    <Link passHref={true} href={to}>
      <ListItem button={true} dense={true}>
        <ListItemText>{label}</ListItemText>
      </ListItem>
    </Link>
  );
};
