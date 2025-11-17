"use client";

import ProjectShowcase from '@/components/projects/ProjectShowcase';
import BackButton from '@/components/global/BackButton';

export default function Projects() {
  return (
    <div className="relative">
      <BackButton />
      <ProjectShowcase />
    </div>
  );
}