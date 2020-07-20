import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

import { useStyles } from './SpacerRow.styles';

export const SpacerRow = () => {
  const { tableCell } = useStyles();

  return (
    <TableRow>
      <TableCell className={tableCell} />
      <TableCell className={tableCell} />
      <TableCell className={tableCell} />
      <TableCell className={tableCell} />
      <TableCell className={tableCell} />
    </TableRow>
  );
};
