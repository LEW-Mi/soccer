import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './ClubCard.css';

interface ClubCardProps {
  clubName: string;
  clubLogo: string;
  clubLink: string;
}

const ClubCard: React.FC<ClubCardProps> = ({ clubName, clubLogo, clubLink }) => {
  return (
    <Card component={Link} to={clubLink} className="club-card">
      <CardMedia
        component="img"
        image={clubLogo}
        alt={`${clubName} logo`}
      />
      <CardContent className="club-card-content">
        <Typography variant="h5" component="div">
          {clubName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClubCard;