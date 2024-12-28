import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  Icon: LucideIcon;
  category: string;
}

export default function SkillCard({ name, Icon, category }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-neutral-200">
      <Icon className="w-12 h-12 mb-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{name}</h3>
      <p className="text-sm text-neutral-600">{category}</p>
    </div>
  );
}