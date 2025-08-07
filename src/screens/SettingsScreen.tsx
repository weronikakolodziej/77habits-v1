import React, { useState } from 'react';
// Używamy lucide-react zamiast lucide-react-native
import { User, Bell, Shield, Moon, Globe, HelpCircle, MessageCircle, Star, LogOut, ChevronRight } from 'lucide-react';
// Usunąłem import do index.css, ponieważ style są w Tailwind CSS.

// Komponent przełącznika, zastępuje Switch z React Native
const ToggleSwitch = ({ value, onToggle }) => (
  <button
    onClick={() => onToggle(!value)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out
      ${value ? 'bg-blue-500' : 'bg-gray-200'}`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out
        ${value ? 'translate-x-6' : 'translate-x-1'}`}
    />
  </button>
);

export default function App() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Edit Profile', hasChevron: true },
        { icon: Shield, label: 'Privacy & Security', hasChevron: true },
        { icon: Bell, label: 'Notifications', hasSwitch: true, value: notificationsEnabled, onToggle: setNotificationsEnabled },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Moon, label: 'Dark Mode', hasSwitch: true, value: darkModeEnabled, onToggle: setDarkModeEnabled },
        { icon: Globe, label: 'Language', subtitle: 'English', hasChevron: true },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', hasChevron: true },
        { icon: MessageCircle, label: 'Contact Support', hasChevron: true },
        { icon: Star, label: 'Rate App', hasChevron: true },
      ]
    },
    {
      title: 'Account Actions',
      items: [
        { icon: LogOut, label: 'Sign Out', isDestructive: true },
      ]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5 sm:p-8 md:p-12 font-sans">
      <div className="max-w-xl mx-auto rounded-xl shadow-lg bg-white overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-white border-b border-gray-200">
          <span className="text-3xl font-bold text-gray-900">Settings</span>
        </div>

        {/* Settings Groups */}
        <div className="p-6">
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={`mb-8 ${groupIndex > 0 ? 'mt-8' : ''}`}>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                {group.title}
              </span>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                {group.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors
                      ${itemIndex === group.items.length - 1 ? '' : 'border-b border-gray-200'}`}
                    disabled={item.hasSwitch}
                  >
                    <div className="flex items-center flex-1">
                      <div className={`w-9 h-9 flex items-center justify-center rounded-lg mr-4
                        ${item.isDestructive ? 'bg-red-100' : 'bg-blue-100'}`}>
                        <item.icon
                          size={20}
                          color={item.isDestructive ? '#EF4444' : '#3B82F6'}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <span className={`block text-base ${item.isDestructive ? 'text-red-500' : 'text-gray-900'}`}>
                          {item.label}
                        </span>
                        {item.subtitle && (
                          <span className="block text-sm text-gray-500 mt-1">{item.subtitle}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center ml-4">
                      {item.hasSwitch && (
                        <ToggleSwitch value={item.value} onToggle={item.onToggle} />
                      )}
                      {item.hasChevron && (
                        <ChevronRight size={16} color="#C7C7CC" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* App Version */}
          <div className="text-center pt-8">
            <span className="text-sm text-gray-500">Version 1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
