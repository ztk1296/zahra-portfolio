import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Avatar, AvatarGroup, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";


    const StyledCard = styled(Card)(({ theme }) => ({
      display: "flex",
      flexDirection: "column",
      padding: 0,
      height: "100%",
      backgroundColor: (theme.vars || theme).palette.background.paper,
      "&:hover": {
        backgroundColor: "transparent",
        cursor: "pointer",
      },
      "&:focus-visible": {
        outline: "3px solid",
        outlineColor: "hsla(210, 98%, 48%, 0.5)",
        outlineOffset: "2px",
      },
    }));
    
    const StyledCardContent = styled(CardContent)({
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: 16,
      flexGrow: 1,
      "&:last-child": {
        paddingBottom: 16,
      },
    });
    
    const StyledTypography = styled(Typography)({
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
    });
    
    function Author({ authors }) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
            }}
          >
            <AvatarGroup max={3}>
              {authors.map((author, index) => (
                <Avatar
                  key={index}
                  alt={author.name}
                  src={author.avatar}
                  sx={{ width: 24, height: 24 }}
                />
              ))}
            </AvatarGroup>
            <Typography variant="caption">
              {authors.map((author) => author.name).join(", ")}
            </Typography>
          </Box>
          <Typography variant="caption">July 14, 2021</Typography>
        </Box>
      );
    }
    
    Author.propTypes = {
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
    };
    
export default function SectionTab({cardData}) {
      const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
    
      const handleFocus = (index) => {
        setFocusedCardIndex(index);
      };
    
      const handleBlur = () => {
        setFocusedCardIndex(null);
      };

    return (
        <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <StyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? "Mui-focused" : ""}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              sx={{
                aspectRatio: "16 / 9",
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[0].description}
              </StyledTypography>
            </StyledCardContent>
            <Author authors={cardData[0].authors} />
          </StyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <StyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? "Mui-focused" : ""}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[1].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[1].title}
              </Typography>
              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {cardData[1].description}
              </StyledTypography>
            </StyledCardContent>
            <Author authors={cardData[1].authors} />
          </StyledCard>
        </Grid>
        </Grid>
    )

}