import { BookOpenText, SquarePen, CircleUserRound, ArrowRight } from "lucide-react";

const ChatInterface = () => {
  const sidebarItems = {
    Today: ["Consumer Protection law"],
    Yesterday: ["Corporate Governance"],
    "Previous 7 days": [
      "Penalties And Fines",
      "Wage Requirements By Reg",
      "Patent Approval And Issues",
    ],
    "Previous 30 days": ["Environment Compliance R", "Taxation Law"],
  };

  const yearContent = {
    2024: ["Real Estate And Property L"],
  };

  const commonPrompts = [
    "what are patient rights in health compliance",
    "what are rules for elected officials and municipal boards",
    "what are rules for elected officials and municipal boards",
    "This is an example prompt",
  ];

  return (
    <div className="flex h-screen bg-gray-200">
       <div className="flex h-screen bg-gray-200">
      {/* Top Icons */}
      <div className="absolute top-4 left-4 flex gap-40 z-10">
        <button 
          className="p-1 hover:bg-slate-800 rounded transition-colors"
        >
          <BookOpenText  size={21} className="text-gray-400" />
        </button>
        <button className="p-1 hover:bg-slate-800 rounded">
          <SquarePen size={20} className="text-gray-400" />
        </button>
      </div>
      </div>

      <div
        className="w-64 bg-slate-800 text-white shadow-[40px_0_28px_rgba(128,128,128,0.5)]"
      >
        <div className="p-6 pt-16 w-64">
          <h1 className="text-4xl font-serif mb-1">Chat</h1>
          <h1 className="text-4xl font-serif mb-6">History</h1>



          {/* Regular timeline items */}
          {Object.entries(sidebarItems).map(([category, items]) => (
            <div key={category} className="mb-5">
              <h2 className="text-[12px] text-white mb-1">{category}</h2>
              {items.map((item, index) => (
                <div key={index} className="text-sm mb-1 cursor-pointer px-2 py-1 rounded">
                  <div className="relative overflow-hidden">
                    <span className="inline-block max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {item}
                    </span>
                    <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent via-slate-800 to-slate-800" />
                  </div>
                </div>
              ))}
            </div>
          ))}

        {/* Profile Icon */}
      <div className="absolute top-4 right-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <CircleUserRound  size={32} className="text-gray-800" />
        </button>
      </div>

          {/* Year content at the end */}
          {Object.entries(yearContent).map(([category, items]) => (
            <div key={category} className="mb-5">
              <h2 className="text-[12px] text-white mb-1">{category}</h2>
              {items.map((item, index) => (
                <div key={index} className="text-sm mb-1 hover:bg-slate-800 cursor-pointer px-2 py-1 rounded">
                  <div className="relative overflow-hidden">
                    <span className="inline-block max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {item}
                    </span>
                    <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-transparent via-slate-800 to-slate-800" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl mb-2 pb-1 bg-gradient-to-r from-blue-950 via-orange-500 to-orange-500 bg-clip-text text-transparent">Hey John,</h1>
          <h2 className="text-6xl pb-1 mb-4 bg-gradient-to-r from-blue-950 via-orange-500 to-orange-500 bg-clip-text text-transparent">
            What would you  like to know?
          </h2>
          <p className="text-gray-800 mb-6 ml-1">
            Use one of the common prompts or <br /> create your own
          </p>

          {/* Prompt Cards */}
          <div className="grid grid-cols-4 gap-4 mb-10">
            {commonPrompts.map((prompt, index) => (
              <div 
                key={index}
                className="p-4 pb-10 border-[3px] border-gray-300 rounded-lg cursor-pointer"
              >
                {prompt}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="relative w-full max-w-4xl">
            <textarea
              rows="5"
              placeholder="Ask whatever you want..."
              className="w-full h-40 p-4 pt-6 border border-gray-200 rounded-xl pr-12 resize-none placeholder:text-left placeholder:top-2 placeholder:text-gray-700 bg-white"
            ></textarea>
            <button className="absolute w-9 right-4 bottom-4 bg-slate-900 text-white p-2 rounded-xl">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
