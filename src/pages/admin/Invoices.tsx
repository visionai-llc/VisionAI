import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import { FileText } from 'lucide-react';

const INVOICE_URL = 'https://sparkling-stardust-b46625.netlify.app/';

const Invoices: React.FC = () => {
  return (
    <AdminLayout title="Invoice Management">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="w-full h-[calc(100vh-200px)] min-h-[600px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src={INVOICE_URL}
            title="Invoice System"
            className="w-full h-full border-none"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            allow="clipboard-read; clipboard-write"
            loading="eager"
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Invoices;