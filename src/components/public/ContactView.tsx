import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Building,
  User,
  PackageCheck,
  ShieldAlert
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { companyInfo, products, submitEnquiry } = useCatalog();

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProductCode, setSelectedProductCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const matchedProduct = products.find(p => p.productCode === selectedProductCode);

    submitEnquiry({
      name,
      companyName,
      email,
      phone,
      productId: matchedProduct?.id,
      productName: matchedProduct?.name || 'General Inquiry / Custom Moulding',
      productCode: selectedProductCode || 'GEN-RFQ',
      quantity: quantity || 'Standard Bulk Inquiry',
      message: message || 'Interested in receiving quotation and technical product catalog.'
    });

    setSubmitted(true);
    setName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setSelectedProductCode('');
    setQuantity('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  const handleWhatsAppSales = () => {
    const text = encodeURIComponent(
      `Hello ApexPlast Manufacturing,\n\nI am contacting your sales team for a commercial enquiry.\nPlease connect me with an industrial account manager.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              B2B Sales & Procurement Desk
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 font-display">
              Contact Our Polymer Manufacturing Team
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Whether you require ongoing truckload supplies of standard Euro crates, UN chemical packaging, or custom tooling for a new industrial part, our engineering sales desk is here to assist you.
            </p>
          </div>
        </div>

        {/* Split: Contact Details (Left) & B2B Inquiry Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Factory Plant & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <h2 className="text-lg font-bold text-slate-900 font-display">
                Headquarters & Production Plant
              </h2>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Plant Address:</strong>
                    <span>{companyInfo.address}</span>
                    <br />
                    <span>{companyInfo.city}, {companyInfo.state} - {companyInfo.postalCode}, {companyInfo.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Telephone Sales:</strong>
                    <a href={`tel:${companyInfo.phone}`} className="text-blue-700 font-bold hover:underline">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">WhatsApp Direct Sales:</strong>
                    <button
                      onClick={handleWhatsAppSales}
                      className="text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{companyInfo.whatsapp}</span>
                      <span className="text-[10px] bg-emerald-100 px-1.5 py-0.2 rounded text-emerald-800">Online</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Corporate & Sales Email:</strong>
                    <a href={`mailto:${companyInfo.salesEmail}`} className="text-blue-700 font-semibold hover:underline">
                      {companyInfo.salesEmail}
                    </a>
                    <div className="text-slate-400 mt-0.5">{companyInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Office & Plant Hours:</strong>
                    <span>{companyInfo.businessHours}</span>
                    <div className="text-slate-400">Automated lines operate 24/7</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppSales}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Sales Discussion</span>
                </button>
              </div>
            </div>

            {/* Industrial Delivery & MOQ Guidance */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 text-xs space-y-2">
              <h3 className="font-bold text-blue-400 uppercase tracking-wider">
                Wholesale Procurement Guidelines
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Standard items are stocked in our central warehouse for fast dispatch. Custom colors or logo-embossed tooling typically require a standard MOQ depending on product shot weight.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Generation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h2 className="text-xl font-bold text-slate-900 font-display">
                  Request a Formal B2B Quotation
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out your requirements below. Our commercial department will prepare a formal spec sheet and price quotation within 4 business hours.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <strong className="block text-sm font-bold text-emerald-900">Enquiry Submitted Successfully!</strong>
                    <span>Thank you for your interest. A copy has been dispatched to our sales desk. For urgent queries, contact us on WhatsApp directly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Robert Zhang"
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Apex Logistics Corp"
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Business Phone / Mobile *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 555-492-3810"
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Official Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. purchasing@apexlogistics.com"
                        className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Product of Interest
                    </label>
                    <select
                      value={selectedProductCode}
                      onChange={(e) => setSelectedProductCode(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                    >
                      <option value="">General Custom Enquiry / Not Listed</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.productCode}>
                          {p.name} ({p.productCode})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Monthly / Batch Quantity
                    </label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 500 pcs, 2,000 pcs, Full Truckload"
                      className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Requirement & Customization Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify details such as target application, destination pincode/city for freight calculation, resin preferences (HDPE, PP, Virgin), or required certifications..."
                    className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Product Enquiry</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
