import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Chip,
  Divider,
  createTheme,
  ThemeProvider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import blogPosts from "../asset/BLOG_JSON/blog.json";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import ReactMarkdown from "react-markdown";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});

const BlogPostDetail = () => {
  const { id } = useParams();
  const [openCodeDialog, setOpenCodeDialog] = useState(false);
  const [selectedCodeBlock, setSelectedCodeBlock] = useState(null);

  const post = blogPosts.find((p) => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="md">
          <Typography variant="h4">Blog Post Not Found</Typography>
        </Container>
      </ThemeProvider>
    );
  }

  const handleOpenCodeDialog = (codeBlock) => {
    setSelectedCodeBlock(codeBlock);
    setOpenCodeDialog(true);
  };

  const handleCloseCodeDialog = () => {
    setOpenCodeDialog(false);
    setSelectedCodeBlock(null);
  };

  const formatText = (text) => {
    if (!text) return null;

    // Split text into lines
    const lines = text.split("\n");

    // Check if at least one line is a bullet point
    const containsBullets = lines.some((line) => line.trim().startsWith("- "));
    if (containsBullets) {
      return (
        <>
          {lines.map((line, i) =>
            line.trim().startsWith("- ") ? (
              <ul key={`ul-${i}`}>
                <li>
                  <ReactMarkdown>{line.replace("- ", "")}</ReactMarkdown>
                </li>
              </ul>
            ) : (
              <Typography key={i} variant="body1" paragraph>
                <ReactMarkdown>{line}</ReactMarkdown>
              </Typography>
            )
          )}
        </>
      );
    }

    const isDoubleBreak = text.includes("\n\n");
    if (isDoubleBreak) {
      return (
        <>
          <br />
          <br />
        </>
      );
    }

    // Regular text with tab handling
    return (
      <Typography variant="body1" paragraph sx={{ whiteSpace: "pre-line" }}>
        <ReactMarkdown>
          {text.replace(/\t/g, "\u00A0\u00A0\u00A0\u00A0")}
        </ReactMarkdown>
      </Typography>
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth="md"
        sx={{
          py: 6,
          minHeight: "100vh",
          background: "rgba(255, 255, 255, 1)",
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Chip label={post.category} color="primary" />
          </Box>

          <Typography variant="h3" component="h1" gutterBottom>
            {post.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
              backgroundColor: "rgba(5, 5, 5, 0.93)",
              mb: 3,
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mr: 2, ml: 2 }}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">{post.author}</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DateRangeIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2">{post.date}</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
            <Typography variant="body2">{post.readTime} read</Typography>
          </Box>

          {/* Featured Image */}
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: 2,
              mb: 4,
            }}
          />
        </Box>

        {/* Blog Content */}
        <Box>
          {/* Introduction */}
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            {post.content.introduction}
          </Typography>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h5"
                fontWeight={600}
                gutterBottom
                sx={{ mt: 3 }}
              >
                {section.title}
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: "32px" }}>
                {formatText(section.body)}
              </Typography>

              {/* Code Block Display */}
              {section.codeBlocks &&
                section.codeBlocks.map((codeBlock, codeIndex) => (
                  <Box
                    key={codeIndex}
                    sx={{
                      my: 2,
                      position: "relative",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        p: 1,
                        backgroundColor: "rgba(0,0,0,0.1)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CodeIcon fontSize="small" sx={{ mr: 1 }} />
                      {codeBlock.title}
                      <Button
                        size="small"
                        sx={{ ml: "auto" }}
                        onClick={() => handleOpenCodeDialog(codeBlock)}
                      >
                        View Full Code
                      </Button>
                    </Typography>
                    <SyntaxHighlighter
                      language={codeBlock.language}
                      style={oneDark}
                      customStyle={{
                        margin: 0,
                        borderRadius: 0,
                        maxHeight: "300px",
                        overflow: "auto",
                      }}
                    >
                      {codeBlock.code}
                    </SyntaxHighlighter>
                  </Box>
                ))}
            </React.Fragment>
          ))}

          {/* Conclusion */}
          <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
            Conclusion
          </Typography>
          <Typography variant="body1" paragraph>
            {post.content.conclusion}
          </Typography>
        </Box>

        {/* Code Dialog */}
        <Dialog
          open={openCodeDialog}
          onClose={handleCloseCodeDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>{selectedCodeBlock?.title || "Code Block"}</DialogTitle>
          <DialogContent>
            {selectedCodeBlock && (
              <SyntaxHighlighter
                language={selectedCodeBlock.language}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  borderRadius: 8,
                  maxHeight: "600px",
                  overflow: "auto",
                }}
              >
                {selectedCodeBlock.code}
              </SyntaxHighlighter>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default BlogPostDetail;
