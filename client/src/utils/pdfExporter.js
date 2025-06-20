import jsPDF from 'jspdf';
import 'jspdf-autotable';

/**
 * Exports a table to a PDF document.
 * @param {Array<{header: string, dataKey: string}>} columns - Array of objects defining table headers and data keys.
 * @param {Array<Object>} data - Array of objects representing the row data.
 * @param {string} title - The title to be displayed on the PDF document.
 * @param {string} filename - The desired filename for the downloaded PDF.
 */
export function exportTableToPDF(columns, data, title, filename) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(title, 14, 22);

  // Prepare table data for jspdf-autotable
  // The 'head' property expects an array of arrays for headers, e.g., [['Name', 'Email', 'Status']]
  // The 'body' property expects an array of arrays for data, e.g., [['John Doe', 'john@example.com', 'Active']]

  const head = [columns.map(col => col.header)];
  const body = data.map(row => columns.map(col => {
    // Handle nested data if dataKey uses dot notation (e.g., 'user.name')
    let value = row;
    const keys = col.dataKey.split('.');
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        value = ''; // Or some placeholder if data is missing
        break;
      }
    }
    return value !== null && value !== undefined ? value : ''; // Ensure value is not null or undefined
  }));

  doc.autoTable({
    startY: 30,
    head: head,
    body: body,
    theme: 'striped', // or 'grid', 'plain'
    styles: {
      fontSize: 10,
      cellPadding: 2,
    },
    headStyles: {
      fillColor: [22, 160, 133], // Example header color
      textColor: [255, 255, 255],
      fontStyle: 'bold',
    },
    margin: { top: 30 },
  });

  doc.save(filename);
}
