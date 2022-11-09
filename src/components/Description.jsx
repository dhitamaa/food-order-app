import { useState } from "react";
import useCollapse from "react-collapsed";

const Description = ({ item, color }) => {
  const [isExpanded, setExpanded] = useState(true);
  const { getToggleProps } = useCollapse();

  return (
    <>
      <span className="fw-semibold">Keterangan :</span>{" "}
      {isExpanded
        ? item.dataPesananUser.keterangan.slice(0, 62)
        : item.dataPesananUser.keterangan}{" "}
      {item.dataPesananUser.keterangan.length > 62 && (
        <span
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          className="fw-semibold"
          style={{
            cursor: "pointer",
            color: color,
          }}
        >
          {!isExpanded ? "...SHOW LESS" : "...READ MORE"}
        </span>
      )}
    </>
  );
};

export default Description;
