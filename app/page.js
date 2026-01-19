import ClockWidget from '@/components/ClockWidget';
import WeatherWidget from '../components/WeatherWidget';
import YouTubeWidget from '@/components/YouTubeWidget';
import GoogleSearchWidget from '@/components/GoogleSearchWidget';

export default function Home() {
    const bacgroundImageStyle = {
        backgroundImage: 'url(https://i.imgur.com/CZ4wB7E.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        color: 'white',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <main>
            <div style={bacgroundImageStyle}>
                <div className="container mx-auto py-8">
                    <h1 className="text-4xl font-bold text-black md-6">
                        Personal Dashboard
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ClockWidget />
                        <WeatherWidget />

                        <div className="md:col-span-2">
                            <GoogleSearchWidget />
                        </div>
                        <div className="md:col-span-2">
                            <YouTubeWidget />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
