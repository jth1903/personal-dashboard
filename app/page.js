import WeatherWidget from "../components/Widget";

export default function Home() {
  return (
    <main>

      <h1>Personal Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', flex: 1 }}>
          <WeatherWidget />
        </div>
      </div>


    </main>
  );
}
