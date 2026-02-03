import React from "react";
import { motion } from "framer-motion";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  tag?: string;
  price?: string;
  duration?: string;
  level?: string;
  students?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  tag,
  price,
  duration,
  level,
  students,
  onClick,
  className = "",
}) => {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
          {tag && <span className="card-tag">{tag}</span>}
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-meta">
          {duration && <span>{duration}</span>}
          {level && <span> • {level}</span>}
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <div className="card-price-box">
            {price && <span className="card-price">{price}</span>}
            {students && (
              <span className="card-students">{students} students</span>
            )}
          </div>
          <button className="card-btn">View details</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
