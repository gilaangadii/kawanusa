import { useParams } from 'react-router-dom';

export default function DetailCerita() {
  const { slug } = useParams();
  
  return (
    <div>
      <h1>Halaman Detail Cerita</h1>
      <p>Placeholder untuk detail cerita: {slug}</p>
    </div>
  );
}
