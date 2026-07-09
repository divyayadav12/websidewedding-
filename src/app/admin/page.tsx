import { prisma } from '@/lib/prisma';
export const runtime = 'nodejs';
import Link from 'next/link';

// Make this route dynamic so it fetches the latest data on every request
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="min-h-screen bg-[#e8e4d8] pt-24 px-6 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-heading text-4xl text-foreground">Admin Dashboard</h1>
          <Link href="/" className="font-sans text-sm underline opacity-80 hover:opacity-100">
            Back to Site
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow-sm overflow-x-auto">
          <h2 className="font-heading text-2xl mb-6">Recent Bookings / Inquiries</h2>
          
          {messages.length === 0 ? (
            <p className="text-gray-500 italic">No inquiries yet.</p>
          ) : (
            <table className="w-full text-left font-sans text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-3 px-4 text-gray-500 font-semibold">Date Received</th>
                  <th className="py-3 px-4 text-gray-500 font-semibold">Name</th>
                  <th className="py-3 px-4 text-gray-500 font-semibold">Email</th>
                  <th className="py-3 px-4 text-gray-500 font-semibold">Event Date</th>
                  <th className="py-3 px-4 text-gray-500 font-semibold">Location</th>
                  <th className="py-3 px-4 text-gray-500 font-semibold w-1/3">Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 align-top font-medium">
                      {msg.firstName} {msg.lastName}
                    </td>
                    <td className="py-4 px-4 align-top">
                      <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline">
                        {msg.email}
                      </a>
                    </td>
                    <td className="py-4 px-4 align-top whitespace-nowrap">{msg.weddingDate}</td>
                    <td className="py-4 px-4 align-top">{msg.location}</td>
                    <td className="py-4 px-4 align-top whitespace-pre-wrap text-gray-700">
                      {msg.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
