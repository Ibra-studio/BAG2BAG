import React from "react";
import { FileText } from "lucide-react";
import { UserIcon } from "lucide-react";
export default function StatCard({
  title,
  value,
  iconColor,
  bgColor,
  className = "",
  type,
  Icon = null,
}) {
  return (
    <div
      className={`rounded-lg  bg-white text-black border-t-9 shadow-sm ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-black">{value}</p>
          </div>
          {type === "user" ? (
            <div className={`p-3 rounded-lg ${bgColor}`}>
              <UserIcon className={`h-6 w-6 ${iconColor}`} />
            </div>
          ) : Icon ? (
            <div className={`p-3 rounded-lg ${bgColor}`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
          ) : (
            <div className={`p-3 rounded-lg ${bgColor}`}>
              <FileText className={`h-6 w-6 ${iconColor}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
