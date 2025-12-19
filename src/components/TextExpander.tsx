import { useState } from "react";

interface TextExpanderProps {
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
  children: React.ReactNode;
}

const TextExpander: React.FC<TextExpanderProps> = ({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText =
    isExpanded || typeof children !== "string"
      ? children
      : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle as React.CSSProperties} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
