import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  tag?: string;
  price?: string;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  tag,
  price,
  onClick,
  className = "",
}) => {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={{ y: -10 }}
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
        <p className="card-description">{description}</p>
        <div className="card-footer">
          {price && <span className="card-price">{price}</span>}
          <button className="card-btn">
            Learn More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
