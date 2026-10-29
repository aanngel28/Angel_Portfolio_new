import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ProjectCard from './components/ProjectCard/ProjectCard'
 
function App() {
  const [count, setCount] = useState(0)
  const projectsData = [
    { id: 1, title: 'Weather App', description: 'Real-time weather', tech: ['React', 'API'] },
    { id: 2, title: 'Portfolio Site', description: 'This very portfolio', tech: ['React', 'CSS'] },
    { id: 3, title: 'Todo Manager', description: 'Kanban task board', tech: ['JavaScript', 'HTML'] },
];
 
  return (
    <>
      <Navbar/>
      <main style={{ padding: '40px 5%', minHeight: '60vh' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Projects</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                    {projectsData.map(project => (
                      <ProjectCard
                      key={project.id}  //React needs a unique for lists!
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      />
 
                    ))}
                  </div>
      </main>
     <Footer/>
    </>
  )
}
 
export default App