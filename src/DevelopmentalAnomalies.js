import React from 'react';
import './DevelopmentalAnomalies.css'; // تأكد من تضمين التنسيقات

function App() {
  const logo = `${process.env.PUBLIC_URL}/Logo.png`; // مسار الصورة

  const students = [
    { no: 1, name: 'Abdelrahman mohamed abdelmoaty', id: '221100521' },
    { no: 2, name: 'Malak attia attia', id: '221100615' },
    { no: 3, name: 'Mohamed Elsayed Abdalaziz', id: '20020092' },
    { no: 4, name: 'Ahmed hosny hafez', id: '221100413' },
    { no: 5, name: 'Youssef Mohammed El-Sayed', id: '20020149' },
    { no: 6, name: 'Ebram amir', id: '221100401' },
    { no: 7, name: 'Omar mostafa', id: '221100666' },
    { no: 8, name: 'Shrouk ahmed hassan', id: '221100505' },
    { no: 9, name: 'Arwa Gamal', id: '221100436' },
    { no: 10, name: 'Adham Walid Elbahy', id: '221100434' },
    { no: 11, name: 'Ahmed mohamed Ebrahim', id: '20020015' },
    { no: 12, name: 'Mohammad Nasser Attiah', id: '20020109' },
    { no: 13, name: 'Mohamed Abdelrazek mohamed', id: '221100573' },
    { no: 14, name: 'Karim mohamed mostafa afifi', id: '20020086' },
  ];

  const sources = [
    { no: 1, title: 'The Human Genetics of Dental Anomalies', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9192175/' },
    { no: 2, title: 'The Genetic Basis of Dental Anomalies and its Relation to Orthodontics', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9192175/' },
    { no: 3, title: 'Genetic, Epigenetic and Environmental Factors Influence the Phenotype of Tooth Number, Size and Shape', link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9192175/' },
    { no: 4, title: 'This source is authored by Dr. Mai Abdelhalim', link: '-' },
  ];

  return (
    <div className="App">
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="background">
        <h1>Developmental Anomalies</h1>
        
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>NAME</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.no}>
                <td>{student.no}</td>
                <td>{student.name}</td>
                <td>{student.id}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Sources</h2>
        <table>
          <thead>
            <tr>
              <th>NO.</th>
              <th>TITLE</th>
              <th>LINK</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source) => (
              <tr key={source.no}>
                <td>{source.no}</td>
                <td>{source.title}</td>
                <td>
                  {source.link !== '-' ? (
                    <a href={source.link} target="_blank" rel="noopener noreferrer" className="button">
                      Visit
                    </a>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="footer">
          <h2 className="thank-you">Thank You</h2>
        </footer>
      </div>
    </div>
  );
}

export default App;