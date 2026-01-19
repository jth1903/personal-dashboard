import ClockWidget from '@/components/ClockWidget';
import WeatherWidget from '../components/WeatherWidget';
import YouTubeWidget from '@/components/YouTubeWidget';
import GoogleSearchWidget from '@/components/GoogleSearchWidget';
import BackgroundImage from '../public/R.jpg';

export default function Home() {
    const bacgroundImageStyle = {
        backgroundImage:
            'url(https://tse1.mm.bing.net/th/id/OIP.JGo4ZAK3IEfOBmftzqRBtAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vh',
        color: 'white',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexdirection: 'column',
        alignItems: 'center',
    };

    return (
        <main>
            <div style={bacgroundImageStyle}>
                <div className="container mx-auto py-8">
                    <h1 className="text-4xl font-bold text-white md-6">
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
