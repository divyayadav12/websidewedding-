import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import LogoutButton from '@/components/ui/LogoutButton';
import AdminFilters from '@/components/admin/AdminFilters';
import DeleteButton from '@/components/admin/DeleteButton';
import { Mail, Calendar, MapPin, Phone, Clock, User, CheckCircle2, CircleDashed, Search } from 'lucide-react';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  
  const page = typeof resolvedSearchParams.page === 'string' ? parseInt(resolvedSearchParams.page, 10) : 1;
  const filterCity = typeof resolvedSearchParams.city === 'string' ? resolvedSearchParams.city : '';
  const filterDate = typeof resolvedSearchParams.date === 'string' ? resolvedSearchParams.date : '';
  
  const take = 10;
  const skip = (page - 1) * take;

  const whereCondition: any = {};
  if (filterCity) {
    whereCondition.location = { contains: filterCity }; 
  }
  if (filterDate) {
    whereCondition.weddingDate = filterDate;
  }

  // Fetch data in parallel
  const [messages, totalFilteredCount, totalInquiries, newInquiries, recentInquiries] = await Promise.all([
    prisma.contactMessage.findMany({
      where: whereCondition,
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    }),
    prisma.contactMessage.count({
      where: whereCondition,
    }),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { status: 'new' } }),
    prisma.contactMessage.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    })
  ]);

  const totalPages = Math.ceil(totalFilteredCount / take);

  return (
    <div className="min-h-screen bg-gray-50/50 pt-16 px-6 pb-20 font-sans selection:bg-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="font-heading text-4xl text-gray-900 mb-2 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage your luxury wedding inquiries and bookings.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black transition-colors bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
              View Site
            </Link>
            <LogoutButton />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Total Inquiries Card */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 flex flex-col relative overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mail size={80} />
            </div>
            <span className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">Total Inquiries</span>
            <span className="text-5xl font-light text-gray-900">{totalInquiries}</span>
          </div>

          {/* New Inquiries Card */}
          <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-900 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
              <CircleDashed size={80} />
            </div>
            <span className="text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">New Inquiries</span>
            <span className="text-5xl font-light text-white">{newInquiries}</span>
          </div>

          {/* Recent Inquiries Card */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 flex flex-col relative overflow-hidden group hover:shadow-md transition-all duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Clock size={80} />
            </div>
            <span className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">Recent (7 Days)</span>
            <span className="text-5xl font-light text-gray-900">{recentInquiries}</span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-[0_2px_20px_-3px_rgba(6,81,237,0.05)] border border-gray-100 overflow-visible relative">
          <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gray-50/30">
            <div className="flex items-center gap-4">
              <h2 className="font-heading text-2xl text-gray-900">Inquiry List</h2>
              {totalFilteredCount > 0 && (
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">
                  {totalFilteredCount} Result{totalFilteredCount !== 1 ? 's' : ''}
                </span>
              )}
            </div>
            
            {/* Filter Button Component */}
            <AdminFilters />
          </div>
          
          {messages.length === 0 ? (
            <div className="p-16 text-center text-gray-500 flex flex-col items-center justify-center">
              <Search className="mb-4 text-gray-300" size={48} />
              <p className="text-lg">No inquiries match your filters.</p>
              {(filterCity || filterDate) && (
                <Link href="/admin" className="mt-4 text-black underline underline-offset-4 hover:text-gray-600">
                  Clear filters
                </Link>
              )}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-white border-b border-gray-100">
                    <tr>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">Date Received</th>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">Client</th>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">Contact</th>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">Event Details</th>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">Message</th>
                      <th className="py-5 px-8 text-xs font-semibold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {messages.map((msg: any) => (
                      <tr key={msg.id} className="hover:bg-gray-50/80 transition-colors group">
                        
                        {/* Status */}
                        <td className="py-6 px-8 align-top">
                          {msg.status === 'new' ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black text-white">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                              New
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                              <CheckCircle2 size={12} />
                              Read
                            </span>
                          )}
                        </td>

                        {/* Date Received */}
                        <td className="py-6 px-8 align-top">
                          <span className="text-gray-900 font-medium">{new Date(msg.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <Clock size={10} />
                            {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>

                        {/* Client */}
                        <td className="py-6 px-8 align-top">
                          <div className="font-medium text-gray-900 capitalize flex items-center gap-2">
                             <User size={14} className="text-gray-400" />
                             {msg.firstName} {msg.lastName}
                          </div>
                        </td>

                        {/* Contact */}
                        <td className="py-6 px-8 align-top">
                          <div className="flex flex-col gap-2">
                            <a href={`mailto:${msg.email}`} className="text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                              <Mail size={12} className="text-gray-400" />
                              {msg.email}
                            </a>
                            {msg.phone && (
                              <a href={`tel:${msg.phone}`} className="text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                                <Phone size={12} className="text-gray-400" />
                                {msg.phone}
                              </a>
                            )}
                          </div>
                        </td>

                        {/* Event Details */}
                        <td className="py-6 px-8 align-top">
                          <div className="flex flex-col gap-2">
                            <div className="font-medium text-gray-900 flex items-center gap-2">
                              <Calendar size={12} className="text-gray-400" />
                              {new Date(msg.weddingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-[200px] flex items-center gap-2">
                              <MapPin size={12} className="text-gray-400" />
                              {msg.location}
                            </div>
                          </div>
                        </td>

                        {/* Message */}
                        <td className="py-6 px-8 align-top max-w-sm">
                          <div className="text-gray-600 whitespace-pre-wrap break-words text-sm leading-relaxed border-l-2 border-gray-200 pl-3">
                            {msg.message}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-6 px-8 align-top text-right">
                          <DeleteButton id={msg.id} />
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="p-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/30">
                  <span className="text-sm text-gray-500">
                    Showing <span className="font-medium text-gray-900">{skip + 1}</span> to <span className="font-medium text-gray-900">{Math.min(skip + take, totalFilteredCount)}</span> of <span className="font-medium text-gray-900">{totalFilteredCount}</span> entries
                  </span>
                  
                  <div className="flex gap-2">
                    {page > 1 ? (
                      <Link 
                        href={`/admin?page=${page - 1}${filterCity ? `&city=${filterCity}` : ''}${filterDate ? `&date=${filterDate}` : ''}`}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:text-black hover:border-gray-300 transition-all bg-transparent"
                      >
                        Previous
                      </Link>
                    ) : (
                      <button disabled className="px-4 py-2 border border-gray-100 rounded-lg text-sm font-medium text-gray-300 bg-gray-50 cursor-not-allowed">
                        Previous
                      </button>
                    )}
                    
                    {page < totalPages ? (
                      <Link 
                        href={`/admin?page=${page + 1}${filterCity ? `&city=${filterCity}` : ''}${filterDate ? `&date=${filterDate}` : ''}`}
                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:text-black hover:border-gray-300 transition-all bg-transparent"
                      >
                        Next
                      </Link>
                    ) : (
                      <button disabled className="px-4 py-2 border border-gray-100 rounded-lg text-sm font-medium text-gray-300 bg-gray-50 cursor-not-allowed">
                        Next
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
