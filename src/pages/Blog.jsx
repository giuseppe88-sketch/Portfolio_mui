import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import blogPosts from '../asset/BLOG_JSON/blog.json';
import BlogPostCard from '../components/BlogPostCard';
import NewsletterSection from '../components/NewsLetterSection';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976',
    },
    secondary: {
      main: '#1976',
    },
  },
  typography: {
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
  },
});

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Get unique categories
  const categories = [
    'All',
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter((post) => 
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handlePostClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth="lg"
        sx={{
          background: 'rgba(210, 212, 216, 0.32)',
          py: 6,
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <Grid container spacing={4}>
          {/* Header Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  background: '#ffffff',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Tech & Code Blog
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="center"
                color="#ffff"
                sx={{ maxWidth: '600px' }}
              >
                Sharing my insights and experiences on web development,
                programming, and the latest tech trends
              </Typography>
            </Box>
          </Grid>

          {/* Search and Filter Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2,
                mb: 4,
              }}
            >
              <TextField
                placeholder="Search articles..."
                size="small"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  flexGrow: 1,
                  maxWidth: { xs: '100%', sm: '300px' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => setSelectedCategory(category)}
                    color={
                      selectedCategory === category ? 'primary' : 'default'
                    }
                    variant={
                      selectedCategory === category ? 'filled' : 'outlined'
                    }
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <Grid item xs={12}>
              <BlogPostCard 
                {...filteredPosts[0]} 
                isFeatured 
                onReadMore={() => handlePostClick(filteredPosts[0].id)}
              />
            </Grid>
          )}

          {/* Blog Posts Grid */}
          {filteredPosts.slice(1).map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <BlogPostCard 
                {...post} 
                onReadMore={() => handlePostClick(post.id)}
              />
            </Grid>
          ))}

          {/* Newsletter Section */}
          <Grid item xs={12}>
            <NewsletterSection />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Blog;