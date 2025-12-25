import type { TypeTitle } from "../typage/types";

export default function TitleSection({
  titre,
  description,
}: TypeTitle) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        {titre}
      </h2>
      <p className="text-gray-600 text-lg">
        {description}
          </p>
        </div>
  );
}

