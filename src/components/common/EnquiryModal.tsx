import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { X, Send, MessageSquare, CheckCircle, Building, Phone, Mail, User, Layers } from 'lucide-react';

export const EnquiryModal: React.FC = () => {
  const { quickEnquiryProduct, setQuickEnquiryProduct, submitEnquiry, companyInfo } = useCatalog();

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!quickEnquiryProduct) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    submitEnquiry({
      name,
      companyName,
      email,
      phone,
      productId: quickEnquiryProduct.id,
      productName: quickEnquiryProduct.name,
      productCode: quickEnquiryProduct.productCode,
      quantity: quantity || 'Standard Bulk Inquiry',
      message: message || `We are interested in receiving formal pricing, minimum order batch specifications, and freight estimates for ${quickEnquiryProduct.name} (${quickEnquiryProduct.productCode}).`
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuickEnquiryProduct(null);
    }, 2800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ApexPlast Sales Team,\n\nI am contacting from ${companyName || 'our company'}.\nI would like to enquire about:\n*Product:* ${quickEnquiryProduct.name}\n*Product Code:* ${quickEnquiryProduct.productCode}\n*Estimated Requirement:* ${quantity || 'Bulk'}\n*My Name:* ${name || 'Prospective Buyer'}\n*Phone/Email:* ${phone || ''} / ${email || ''}\n\nPlease share catalog specs and quotation.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 text-white flex justify-between items-start">
          <div>
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
              Product Enquiry & Quotation
            </span>
            <h3 className="text-lg font-bold truncate max-w-sm">
              {quickEnquiryProduct.name}
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Code: {quickEnquiryProduct.productCode || 'N/A'} | {quickEnquiryProduct.material}
            </p>
          </div>
          <button
            onClick={() => setQuickEnquiryProduct(null)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Enquiry Received</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. Our manufacturing sales engineering desk has logged your enquiry for <strong>{quickEnquiryProduct.name}</strong>. We will reply within 4 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Miller"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Company / Organization *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Logistics Ltd"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    placeholder="e.g. +1 555-0192"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. buyer@acme.com"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Estimated Order / Batch Quantity
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g. 500 units, 1 container load, or monthly requirement"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Specific Technical or Delivery Notes
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Specify requirements like custom color, company logo embossing, food contact certificates, or delivery destination..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Product Enquiry</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                title="Send inquiry directly through WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
