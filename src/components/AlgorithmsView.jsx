import React, { useState } from 'react';
import { Home, Cpu, GitBranch, Lock, Layers } from 'lucide-react';
import {
  SchedulingVisualizer,
  PetersonVisualizer,
  BankerVisualizer,
  ProcessStateDiagram
} from './AlgorithmVisualizer';

function AlgorithmsView({ onBack }) {
  const [activeTab, setActiveTab] = useState('scheduling');

  const tabs = [
    { id: 'scheduling', label: 'زمان‌بندی CPU', icon: Cpu },
    { id: 'peterson', label: 'الگوریتم Peterson', icon: GitBranch },
    { id: 'banker', label: 'الگوریتم بانکدار', icon: Lock },
    { id: 'states', label: 'حالات فرآیند', icon: Layers },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'scheduling':
        return <SchedulingVisualizer />;
      case 'peterson':
        return <PetersonVisualizer />;
      case 'banker':
        return <BankerVisualizer />;
      case 'states':
        return <ProcessStateDiagram />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Home size={20} />
          <span>بازگشت به داشبورد</span>
        </button>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">شبیه‌سازی الگوریتم‌ها</h1>
        <p className="text-gray-400">الگوریتم‌های کلیدی سیستم عامل را به صورت تعاملی یاد بگیرید</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 rounded-lg transition-colors
              ${activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}
            `}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}

      {/* Info Box */}
      <div className="mt-8 bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
        <h3 className="text-blue-400 font-semibold mb-2">راهنما</h3>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• از دکمه‌های کنترل برای اجرای گام به گام استفاده کنید</li>
          <li>• می‌توانید پارامترها را تغییر دهید و نتایج مختلف را مشاهده کنید</li>
          <li>• این شبیه‌سازی‌ها دقیقاً مطابق با مفاهیم درس هستند</li>
        </ul>
      </div>
    </div>
  );
}

export default AlgorithmsView;
