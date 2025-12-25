import ClockWidget from "@/components/ClockWidget";
import WeatherWidget from "../components/WeatherWidget";
import YouTubeWidget from "@/components/YouTubeWidget";

export default function Home() {
  return (
    <main>

      <h1>Personal Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', flex: 1 }}>
          <ClockWidget />
          <WeatherWidget />
          <YouTubeWidget />
        </div>
      </div>


    </main>
  );
}
