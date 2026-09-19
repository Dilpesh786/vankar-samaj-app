
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">વણકર સમાજ ડિજિટલ પોર્ટલ</h1>
        <p className="mt-2 text-sm">સમાજ સેવા, મેટ્રિમોનિયલ અને એકતા મંચ</p>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500">
            <h2 className="text-xl font-bold mb-2">મેટ્રિમોનિયલ</h2>
            <p className="text-gray-600">સમાજના યુવક-યુવતીઓ માટે બાયોડેટા શોધો અને નોંધણી કરો.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
            <h2 className="text-xl font-bold mb-2">બ્લડ ડોનર હેલ્પ</h2>
            <p className="text-gray-600">જરૂરિયાતના સમયે રક્તદાતાઓનો સંપર્ક કરો.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500">
            <h2 className="text-xl font-bold mb-2">સમાજ સમાચાર</h2>
            <p className="text-gray-600">સમાજના કાર્યક્રમો અને મહત્વની માહિતી મેળવો.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
