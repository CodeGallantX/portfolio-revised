const TechStack = () => {
  const tools = [
    { name: 'HTML', icon: '📜' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '🌐' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🌿' },
    { name: 'Streamlit', icon: '📊' },
    { name: 'Git & GitHub', icon: '🐙' },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Tech Stack & Tools
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A collection of technologies I use to build seamless, efficient, and high-performing applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2"
            >
              <span className="text-5xl mb-4">{tool.icon}</span>
              <p className="text-lg font-semibold text-gray-800">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
