import React from "react";
import { PiggyBank, GraduationCap } from "lucide-react";

function About() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 md:pt-32 sm:pt-24 pt-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            About CabShare
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            CabShare is a campus-first platform for NIT Rourkela students and staff to coordinate intercity cab
            sharing—save money, travel conveniently, and meet fellow travelers.
          </p>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* Card: Save together */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-orange-50 text-orange-600">
                  <PiggyBank className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Save together</h3>
                  <p className="text-sm text-gray-600 mt-1">Split cab fares and make intercity travel more affordable.</p>
                </div>
              </div>
            </div>

            {/* Card: Campus-first */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5 md:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Campus-first</h3>
                  <p className="text-sm text-gray-600 mt-1">Built around the NITR community to make planning rides easier.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mt-6">
            This is an open community tool. Please verify ride details directly with the ride owner.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
