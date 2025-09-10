import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export default function Portfolio() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      {/* Header */}
      <header className='container mx-auto px-6 py-8'>
        <nav className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Portfolio</h1>
          <div className='flex gap-4'>
            <Button variant='ghost' size='sm' asChild>
              <a href='#about'>About</a>
            </Button>
            <Button variant='outline' size='sm' asChild>
              <a
                href={getAssetPath('/assets/resume.pdf')}
                download='Muhammad_Iqbal_Ali_Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Download className='w-4 h-4 mr-2' />
                Download Resume
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='container mx-auto px-6 py-16 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Hi, I&apos;m Muhammad Iqbal Ali
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 mb-8'>
            Backend-focused Software Engineer passionate about building
            cloud-native, resilient, and observable distributed systems.
          </p>
          <div className='flex justify-center gap-4'>
            <Button variant='ghost' size='sm' asChild>
              <a
                href='https://github.com/iqbal167'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='w-5 h-5' />
              </a>
            </Button>
            <Button variant='ghost' size='sm' asChild>
              <a
                href='https://linkedin.com/in/muhammad-iqbal-ali-0141b81b9'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='container mx-auto px-6 py-8'>
        <div className='max-w-4xl mx-auto'>
          <h3 className='text-3xl font-bold mb-8 text-center'>About Me</h3>
          <Card>
            <CardContent className='p-8'>
              <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    I&apos;m a Backend-focused Software Engineer passionate
                    about building cloud-native, resilient, and observable
                    distributed systems. I specialize in Golang, and bring
                    additional experience with Node.js and Python.
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-4'>
                    I&apos;m well-versed in containerized deployments using
                    Docker, and leverage observability tools like OpenTelemetry,
                    Grafana, and Prometheus to maintain system reliability.
                  </p>
                  <p className='text-slate-600 dark:text-slate-300 mb-6'>
                    I care deeply about interoperable systems, clean
                    architecture, and bringing clarity to complex backend
                    challenges. Always learning, always improving — and always
                    looking to build meaningful technology that scales.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <Badge>Golang</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>Docker</Badge>
                    <Badge>OpenTelemetry</Badge>
                    <Badge>Grafana</Badge>
                    <Badge>Prometheus</Badge>
                    <Badge>Cloud-Native</Badge>
                  </div>
                </div>
                <div className='relative'>
                  <Image
                    src={getAssetPath('/assets/photo.jpg')}
                    alt='Muhammad Iqbal Ali'
                    width={240}
                    height={320}
                    className='rounded-lg object-cover w-60 h-80 mx-auto'
                    priority
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section - Hidden for now */}
      {/* <section id="portfolio" className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">My Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-32 rounded-md mb-4"></div>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>
                    A brief description of this amazing project and the technologies used to build it.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">API</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href="#" target="_blank">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="#" target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className='container mx-auto px-6 py-8 border-t'>
        <div className='text-center text-slate-600 dark:text-slate-300'>
          <p>&copy; 2025 Muhammad Iqbal Ali</p>
        </div>
      </footer>
    </div>
  );
}
