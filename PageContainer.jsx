// src/components/PageContainer.jsx
import React from 'react';
import './PageContainer.css'; // Create this CSS file for styling

function PageContainer({ children, title, description }) {
  return (
    <div className="page-container">
      {title && <h2 className="page-title">{title}</h2>}
      {description && <p className="page-description">{description}</p>}
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}

export default PageContainer;