const TechStack = () => {
  const tools = [
    { name: 'HTML', icon: '⚛️'},
    { name: 'CSS', icon: '⚛️'},
    { name: 'JavaScript', icon: '🟨'},
    { name: 'React', icon: '⚛️'},
    { name: 'Next.js', icon: '🌐'},
    { name: 'Tailwind CSS', icon: '🎨'},
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🌿'},
    { name: 'Streamlit', icon: '📊'},
    { name: 'Git & GitHub', icon: '🐙'},
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Tech Stack & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-4xl mb-3">{tool.icon}</span>
              <p className="text-lg font-semibold text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;