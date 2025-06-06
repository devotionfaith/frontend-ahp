import React from "react";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Additional custom classes for styling
  desc?: string; // Description text
}

const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className = "",
  desc = "",
}) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {/* Card Header */}
      <div className="px-4 mt-2 py-2">
        <h3 className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
          {title}
        </h3>
        {desc && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className="border-t border-gray-100 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400 dark:border-gray-800 sm:p-6">
        <div className="space-y-2">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
