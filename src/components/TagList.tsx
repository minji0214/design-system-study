import React, { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onTagClick,
}: ITagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);
  return (
    <div
      className="flex gap-x-6"
      onClick={(e) => {
        const eventTarget = e.target as HTMLElement;
        const tag = eventTarget.textContent as T;
        onTagClick(tag);
      }}
    >
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          onClick={() => setSelectedTag(tag)}
          isChecked={selectedTag === tag}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
