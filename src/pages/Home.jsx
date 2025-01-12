import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export default function LandingPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <>
    <div className="min-h-screen bg-gradient-to-l from-purple-900 to-green-600 flex flex-col justify-center h-[100]">
      <header className="text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">To-Do Pro</h1>
          <nav className="space-x-4">
            <a href="#features" className=" hover:text-blue-400">Features</a>
            <a href="#testimonials" className=" hover:text-blue-400">Testimonials</a>
            <Button className="bg-blue-500"><Link to='/dashboard'>Get Started</Link></Button>
          </nav>
        </div>
      </header>

      <section className="px-4 text-center py-16 text-white mt-32">
        <h2 className="text-7xl font-extrabold mb-4">Simplify Your To-Do List</h2>
        <p className="text-2xl mb-6">Stay organized, boost productivity, and never miss a task again.</p>
        <Button variant="destructive" size="lg" className="h-14 hover:bg-red-800">
          <Link to='/dashboard'>Get Started for Free</Link>
        </Button>
      </section>

      <section id="features" className="px-4 py-16 mt-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Why Choose To-Do Pro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 shadow">
              <h4 className="font-semibold text-lg">Easy to Use</h4>
              <p className="text-gray-600">A simple and intuitive interface for managing your tasks efficiently.</p>
            </Card>
            <Card className="p-6 shadow">
              <h4 className="font-semibold text-lg">Real-Time Sync</h4>
              <p className="text-gray-600">Access your tasks from any device, anywhere.</p>
            </Card>
            <Card className="p-6 shadow">
              <h4 className="font-semibold text-lg">Customizable</h4>
              <p className="text-gray-600">Organize your tasks the way you like with tags and categories.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-4 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow">
              <p className="text-gray-600">This app changed the way I manage my day-to-day tasks!</p>
              <h4 className="font-semibold mt-4">- Jane Doe</h4>
            </Card>
            <Card className="p-6 shadow">
              <p className="text-gray-600">The real-time sync is a game-changer for my busy schedule.</p>
              <h4 className="font-semibold mt-4">- John Smith</h4>
            </Card>
            <Card className="p-6 shadow">
              <p className="text-gray-600">Super intuitive and customizable. Love it!</p>
              <h4 className="font-semibold mt-4">- Alex Johnson</h4>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 To-Do Pro. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 mx-2">Facebook</a>
            <a href="#" className="text-blue-400 mx-2">Twitter</a>
            <a href="#" className="text-blue-400 mx-2">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
    {showSignIn && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleOverlayClick}
      >
        <SignIn
          signUpForceRedirectUrl="/dashboard"
          fallbackRedirectUrl="/dashboard"
        />
      </div>
    )}
    </>
  );
}
