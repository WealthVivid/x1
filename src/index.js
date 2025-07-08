// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import CodeCommentsCleaner from './CodeCommentsCleaner';
import './index.css';   // your Tailwind or global styles

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<CodeCommentsCleaner />);
