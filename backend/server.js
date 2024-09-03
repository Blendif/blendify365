const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
const ebookRoutes = require('./routes/ebookRoutes');
const coloringPageRoutes = require('./routes/coloringPageRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const blogRoutes = require('./routes/blogRoutes');
const affiliateRoutes = require('./routes/affiliateRoutes');
const wallpaperRoutes = require('./routes/wallpaperRoutes');

app.use('/api/ebooks', ebookRoutes);
app.use('/api/coloring-pages', coloringPageRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/affiliates', affiliateRoutes);
app.use('/api/wallpapers', wallpaperRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
