import type { Instructor } from "@/types/product";

interface InstructorCardProps {
  instructor: Instructor;
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-start gap-4">
        <img
          src={instructor.image || "/placeholder.svg"}
          alt={instructor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {instructor.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{instructor.title}</p>
          {instructor.credentials && (
            <div className="space-y-1">
              {instructor.credentials.map((credential, index) => (
                <p key={index} className="text-xs text-gray-500">
                  {credential}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
