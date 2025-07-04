// components/ProjectItem.tsx
import React from 'react';

type ProjectItemProps = {
  title: string;
  description: string;
  techStack: string;
  sourceLink?: string;
  additionalLink?: { label: string; href: string };
  note?: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  techStack,
  sourceLink,
  additionalLink,
  note,
}) => {
  return (
    <li>
      <span className="font-semibold">{title}</span>: {description}
      <div className="text-slate-400 text-sm ml-5">
        Tech stack: {techStack}
        <br />
        <div className="text-right">
        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Source code ↗
          </a>
        )}
        {additionalLink && sourceLink && ' | '}
        {additionalLink && (
          <a
            href={additionalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {additionalLink.label} ↗
          </a>
        )}</div>
        {note && <div className="italic">{note}</div>}
      </div>
    </li>
  );
};

export default ProjectItem;
