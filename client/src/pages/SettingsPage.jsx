import React from 'react';
import useThemeStore from '../store/useThemeStore';
import { THEMES } from '../constants/index';
import { Send, Palette, MessageCircle } from 'lucide-react';

const PREVIEW_MESSAGES = [
  { id: 1, content: "Good morning! Ready for the meeting?", isSent: true },
  { id: 2, content: "Yes, I'll be there in 10 minutes.", isSent: false },
  { id: 3, content: "Don't forget to bring the project report.", isSent: true },
  { id: 4, content: "Got it! I've already packed it.", isSent: false },
  { id: 5, content: "Let's grab lunch after the meeting.", isSent: true },
  { id: 6, content: "Sounds like a plan!", isSent: false },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-8">
        {/* Theme Selection Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Palette size={24} className="text-primary" />
            <h2 className="text-2xl font-bold">Theme Settings</h2>
          </div>
          <p className="text-base-content/70 mb-6">
            Customize the look and feel of your chat interface by selecting a theme.
          </p>

          <div className="flex flex-wrap gap-3">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  group relative w-10 h-10 rounded-full flex items-center justify-center transition-all
                  ${theme === t ? "ring-2 ring-primary ring-offset-2" : "hover:ring-1 hover:ring-primary/50"}
                `}
                onClick={() => setTheme(t)}
                data-theme={t}
              >
                <div className="absolute inset-0 rounded-full bg-primary opacity-25" />
                <div className="w-6 h-6 rounded-full bg-primary" />
                <span className="sr-only">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle size={24} className="text-primary" />
            <h3 className="text-2xl font-bold">Chat Preview</h3>
          </div>
          <p className="text-base-content/70 mb-6">
            See how your selected theme looks in a real chat interface.
          </p>

          <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-sm">
            <div className="p-4 bg-base-200">
              <div className="max-w-lg mx-auto">
                {/* Mock Chat UI */}
                <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                  {/* Chat Header */}
                  <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                        J
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Jarvis</h3>
                        <p className="text-xs text-base-content/70">Online</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`
                            max-w-[80%] rounded-xl p-3 shadow-sm
                            ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
                          `}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`
                              text-[10px] mt-1.5
                              ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                            `}
                          >
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-base-300 bg-base-100">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="input input-bordered flex-1 text-sm h-10"
                        placeholder="Type a message..."
                        value="This is a preview"
                        readOnly
                      />
                      <button className="btn btn-primary h-10 min-h-0">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;