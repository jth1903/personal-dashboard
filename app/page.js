import ClockWidget from "@/components/ClockWidget";
import WeatherWidget from "../components/WeatherWidget";
import YouTubeWidget from "@/components/YouTubeWidget";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold text-white md-6">Personal Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ClockWidget />
              <WeatherWidget />
              <div className="md:col-span-2">
                <YouTubeWidget />
              </div>
            </div>
        </div>
      </div>

    </main>
  );
}
