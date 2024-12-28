import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  Icon: LucideIcon;
  category: string;
}

export default function SkillCard({ name, Icon, category }: SkillCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
      <Icon className="w-12 h-12 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-400">{category}</p>
    </div>
  );
}