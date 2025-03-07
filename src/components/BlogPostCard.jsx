import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  Chip,
  Button
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const BlogPostCard= ({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
  isFeatured = false,
  onReadMore
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        width:"90%",
        margin:"auto",
        background:"rgba(252, 252, 252, 0.16)",
        // background:"rgba(22, 28, 36, 0.9)",
        flexDirection: 'column',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardMedia
        component="img"
        height={isFeatured ? 'auto' : '160'}
        image={image}
        alt={title}
        sx={{
          width: isFeatured ? '100%' : 'auto',
          maxHeight: isFeatured ? { xs: '200px', md: '400px' } : '160px',
          cursor: 'pointer'
        }}
        onClick={onReadMore}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 1,
            }}
          >
            {isFeatured && <Chip label="Featured" color="secondary" size="small" />}
            <Chip label={category} color="primary" size="small" />
            <Typography variant="caption" color="text.secondary">
              {readTime} read
            </Typography>
          </Box>
          <Typography
            variant={isFeatured ? 'h4' : 'h6'}
            component={isFeatured ? 'h2' : 'h3'}
            gutterBottom
            sx={{ 
              fontWeight: 600,
              cursor: 'pointer'
            }}
            onClick={onReadMore}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {excerpt.length > 100 ? `${excerpt.substring(0, 100)}...` : excerpt}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {author}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
            {onReadMore && (
              <Button 
                variant="outlined" 
                size="small"
                onClick={onReadMore}
              >
                Read More
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;