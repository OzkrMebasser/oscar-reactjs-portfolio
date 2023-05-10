// import { useState } from "react";
// import { Document, Page } from "react-pdf";
// import "./Skills.css";

// const CertificationsPdf = () => {
//   const PdfViewer = ({ pdfUrl }) => {
//     const [numPages, setNumPages] = useState(null);

//     function onDocumentLoadSuccess({ numPages }) {
//       setNumPages(numPages);
//     }
//   };
//   return <div className="pdfView">
    
//     <Document
//         file={pdfUrl}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         {Array.from(new Array(numPages), (_, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </Document>
//   </div>;
// };

// export default CertificationsPdf;
