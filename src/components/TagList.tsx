import React from "react";
import TagButton from "./TagButton";

interface ITagListProps {
  onClick: () => void;
  tagList: string[];
}

export default function TagList({}: ITagListProps) {
  return (
    <div>
      <TagButton onClick={} isChecked={false}>
        태그
      </TagButton>
    </div>
  );
}
