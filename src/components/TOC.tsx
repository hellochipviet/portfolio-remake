import { useEffect, useState } from "react";

const TableOfContents = ({ content }: any) => {
  const [headings, setHeadings] = useState<any>([]);

  useEffect(() => {
    const headingElements = Array.from(
      content.current.querySelectorAll("h2, h3, h4")
    ).map((heading: any) => ({
      id: heading.id,
      text: heading.innerText,
      level: heading.tagName,
    }));
    setHeadings(headingElements);
  }, [content]);

  return (
    <nav className="bg-white p-4 rounded-lg shadow-lg sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="list-none">
        {headings.map((heading: any) => (
          <li
            key={heading.id}
            className={`ml-${
              heading.level === "H3" ? "4" : heading.level === "H4" ? "8" : "0"
            } my-2`}
          >
            <a
              href={`#${heading.id}`}
              className={`${
                heading.level === "H2" ? "text-blue-700" : "text-gray-600"
              } hover:text-blue-900 transition`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
