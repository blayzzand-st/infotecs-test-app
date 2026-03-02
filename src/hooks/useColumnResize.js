import { useState } from 'react';

const useColumnResize = (colNum, minWidth) => {
  const [columnWidths, setColumnWidths] = useState({});

  const updateWidth = (event, key, startX, startWidth, tableWidth) => {
    const delta = event.clientX - startX;

    setColumnWidths((prev) => {
      const widths = Object.values(prev);
      const unchangedSpace = (colNum - widths.length) * minWidth;

      // Место, необходимое для остальных колонок
      const spaceTaken =
        unchangedSpace +
        widths.reduce((acc, current) => acc + current, 0) -
        (prev[key] ?? startWidth);

      // Вычисляем максимально возможную ширину колонки
      const maxWidth = tableWidth - spaceTaken;
      const newWidth = Math.min(
        Math.max(minWidth, startWidth + delta),
        maxWidth
      );

      return {
        ...prev,
        [key]: newWidth,
      };
    });
  };

  const startResize = (columnKey, event) => {
    const startX = event.clientX;
    const startWidth = event.target.parentElement.offsetWidth;
    const tableWidth = event.target.closest('thead').offsetWidth;

    document.body.style.userSelect = 'none';

    const onMouseMove = (e) =>
      updateWidth(e, columnKey, startX, startWidth, tableWidth);

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return { columnWidths, startResize };
};

export default useColumnResize;
