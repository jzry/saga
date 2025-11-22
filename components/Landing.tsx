import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Shield, Zap } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-2xl duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-gray-700 text-xl font-semibold mb-3">ACH Payments</h3>
            <p className="text-gray-600 leading-relaxed">
              Originate ACH credits and debits, validate account numbers with pre-notifications and store commonly accessed details.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-2xl duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-gray-700 text-xl font-semibold mb-3">Wire Transfers</h3>
            <p className="text-gray-600 leading-relaxed">
              Send domestic and international wire transfers with real-time tracking and comprehensive audit trails.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-2xl duration-300">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-gray-700 text-xl font-semibold mb-3">Check Deposits</h3>
            <p className="text-gray-600 leading-relaxed">
              Accept remote check deposits with automated verification, fraud detection, and quick fund availability.
            </p>
          </div>
        </div>
      </section>

      <div className="from-gray-0 to-gray-0 hidden h-[2px] bg-gradient-to-r via-gray-100 md:block"></div>

      {/* Code Example Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-gray-800 text-3xl md:text-4xl font-semibold mb-4">
              Developer-first API
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Built for engineers, by engineers. Clean documentation, predictable behavior, and powerful SDKs.
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800">
{`const transfer = await saga.achTransfers.create({
  account_id: "account_in71c4amph0vgo2qllky",
  amount: 10000,
  statement_descriptor: "Invoice #1234",
  account_number: "987654321",
  routing_number: "101000187"
});`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 text-4xl md:text-4xl font-semibold mb-4">
            Trusted by forward-thinking companies
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds of companies building with Saga
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-start mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Bank-grade security</h4>
                <p className="text-gray-600 text-sm">
                  SOC 2 Type II certified with end-to-end encryption and comprehensive compliance.
                </p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-start mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">99.99% uptime SLA</h4>
                <p className="text-gray-600 text-sm">
                  Mission-critical reliability with real-time monitoring and instant failover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-16">
        <div className="bg-gray-800 text-white rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building with our APIs today. No credit card required.
          </p>
          <button className="cursor-pointer bg-white text-black px-8 py-3 rounded-md text-base hover:bg-gray-100 transition font-medium">
            Create an account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-gray-800">
            <div>
              <div className="font-semibold mb-4 text-gray-800">Product</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-gray-900 hover:underline">FedNow ACH Payments</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Wire Transfers</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Check Deposits</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Card Issuing</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4 text-gray-800">Developers</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-gray-900 hover:underline">Documentation</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">API Reference</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">SDKs</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Status</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Company</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-gray-900 hover:underline">About</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Blog</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Careers</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Contact</a></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-4">Legal</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div><a href="#" className="hover:text-gray-900 hover:underline">Privacy</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Terms</a></div>
                <div><a href="#" className="hover:text-gray-900 hover:underline">Security</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600 text-center">
            © 2025 saga api. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}