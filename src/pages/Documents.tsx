import React, { useState } from 'react';
import { Plus, File, FileText, Image, FileSpreadsheet, File as FilePdf, Folder, Search, MoreHorizontal, Clock, Download } from 'lucide-react';

interface Document {
  id: number;
  name: string;
  type: 'essay' | 'recommendation' | 'transcript' | 'resume' | 'photo' | 'spreadsheet' | 'other';
  college?: string;
  dateAdded: string;
  size: string;
  shared: boolean;
}

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFolder, setActiveFolder] = useState('Essays');
  
  const folders = [
    'Essays', 'Recommendations', 'Transcripts', 'Activity Lists', 'Photos', 'Financial', 'Miscellaneous'
  ];
  
  const documents: Document[] = [
    {
      id: 1,
      name: 'Common App Personal Statement.docx',
      type: 'essay',
      college: 'All',
      dateAdded: '10/02/2024',
      size: '35 KB',
      shared: true
    },
    {
      id: 2,
      name: 'Why Stanford Essay.docx',
      type: 'essay',
      college: 'Stanford University',
      dateAdded: '10/03/2024',
      size: '42 KB',
      shared: false
    },
    {
      id: 3,
      name: 'Community Service Essay.docx',
      type: 'essay',
      college: 'Multiple',
      dateAdded: '10/05/2024',
      size: '28 KB',
      shared: true
    },
    {
      id: 4,
      name: 'Research Project Essay.docx',
      type: 'essay',
      college: 'MIT',
      dateAdded: '10/07/2024',
      size: '31 KB',
      shared: false
    },
    {
      id: 5,
      name: 'Leadership Experience.docx',
      type: 'essay',
      college: 'Princeton University',
      dateAdded: '10/10/2024',
      size: '29 KB',
      shared: false
    },
  ];

  const getFileIcon = (type: Document['type']) => {
    switch (type) {
      case 'essay':
        return <FileText size={16} className="text-blue-500" />;
      case 'recommendation':
        return <File size={16} className="text-purple-500" />;
      case 'transcript':
        return <FilePdf size={16} className="text-red-500" />;
      case 'resume':
        return <FileText size={16} className="text-green-500" />;
      case 'photo':
        return <Image size={16} className="text-yellow-500" />;
      case 'spreadsheet':
        return <FileSpreadsheet size={16} className="text-green-500" />;
      default:
        return <File size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center fade-in">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 mt-1">Manage your application documents and files</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={16} />
          <span>Upload Document</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-5 space-y-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documents..."
                className="bg-gray-50 w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Folders</h3>
              <ul className="space-y-1">
                {folders.map((folder) => (
                  <li key={folder}>
                    <button 
                      onClick={() => setActiveFolder(folder)}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200
                        ${activeFolder === folder ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
                    >
                      <Folder size={16} className={`${activeFolder === folder ? 'text-blue-500' : 'text-gray-500'}`} />
                      <span className="text-sm">{folder}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">Storage</h3>
                <span className="text-xs text-gray-500">253 MB / 1 GB</span>
              </div>
              <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '25%' }}></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">25% of your storage used</p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3 space-y-5">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">{activeFolder}</h2>
              <div className="flex gap-2">
                <button className="text-sm btn-outline py-1.5 px-3">Sort</button>
                <button className="text-sm btn-outline py-1.5 px-3">Filter</button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">College</th>
                    <th className="px-4 py-3">Date Added</th>
                    <th className="px-4 py-3">Size</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            {getFileIcon(doc.type)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{doc.college}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm text-gray-700">
                          <Clock size={14} className="mr-1 text-gray-400" />
                          {doc.dateAdded}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{doc.size}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            <Download size={16} className="text-gray-600" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                            <MoreHorizontal size={16} className="text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Common App Personal Statement.docx</p>
                      <p className="text-xs text-gray-500">You uploaded this document</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Why Stanford Essay.docx</p>
                      <p className="text-xs text-gray-500">You edited this document</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <File size={16} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Mr. Johnson Recommendation.pdf</p>
                      <p className="text-xs text-gray-500">You shared this document</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;