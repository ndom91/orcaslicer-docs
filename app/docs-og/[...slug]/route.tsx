import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '../../../lib/metadata';

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'OrcaSlicer',
    primaryColor: '#00675B',
    primaryTextColor: '#00675B',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" style={{ fill: "#e9e9e9" }} /><path d="M13.84,50.354a19.7,19.7,0,0,0,13.883,5.79A19.944,19.944,0,0,0,41.858,22.182Z" style={{ fill: "#292826" }} /><path d="M41.858,22.181,13.84,50.354l.061.059A220.548,220.548,0,0,0,46.378,29.277a19.964,19.964,0,0,0-4.52-7.1" style={{ fill: "#009789" }} /><path d="M36.381,7.856A19.943,19.943,0,0,0,22.327,41.818L50.345,13.646a19.693,19.693,0,0,0-13.964-5.79" style={{ fill: "#292826" }} /><path d="M36.381,7.856A19.636,19.636,0,0,0,26.04,10.782a22.742,22.742,0,0,0-5.91-.745,23.084,23.084,0,0,0-9.477,2.124.632.632,0,0,0,.129,1.191,13.52,13.52,0,0,1,8.069,5.137A20.06,20.06,0,0,0,17.41,33.534a19.873,19.873,0,0,1,2-3.488c1.819-2.5,3.743-3.8,6.585-5.723,2.093-1.416,5-3.077,13.359-6.512a28.421,28.421,0,0,0,6.12-2.821c1.4-.831,2.461-1.615,2.8-2.842.024-.086.045-.172.065-.256A19.655,19.655,0,0,0,36.381,7.856" style={{ fill: "#262523" }} /><path d="M39.69,14.551c.727,1.285-.728,3.495-3.249,4.937s-5.154,1.569-5.88.284.727-3.495,3.248-4.937,5.154-1.569,5.881-.284" style={{ fill: "#fff" }} /></svg>
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
