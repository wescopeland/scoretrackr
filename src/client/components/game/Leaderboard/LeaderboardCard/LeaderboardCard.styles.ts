import { Card, styled } from '@material-ui/core';

import { firstPlace, secondPlace, thirdPlace } from 'common/models/colors';

interface StyledCardProps {
  gamecolor: string;
  position: number;
}

export const StyledCard = styled(Card)({
  borderLeft: ({ gamecolor, position }: StyledCardProps) => {
    let color = gamecolor;
    if (position === 1) {
      color = firstPlace;
    } else if (position === 2) {
      color = secondPlace;
    } else if (position === 3) {
      color = thirdPlace;
    }

    return `10px solid ${color}`;
  }
});
