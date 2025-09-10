'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  PlusIcon,
  MinusIcon,
  RotateCcwIcon,
  UserIcon,
  SettingsIcon,
  InfoIcon,
  CheckCircleIcon,
} from 'lucide-react';

export default function ShadcnInteractivePage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold tracking-tight mb-2'>
          Halaman Interaktif shadcn/ui
        </h1>
        <p className='text-xl text-muted-foreground'>
          Contoh komponen interaktif dengan state management
        </p>
      </div>

      <Tabs defaultValue='counter' className='space-y-6'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='counter'>Counter</TabsTrigger>
          <TabsTrigger value='form'>Form</TabsTrigger>
          <TabsTrigger value='tasks'>Tasks</TabsTrigger>
          <TabsTrigger value='info'>Info</TabsTrigger>
        </TabsList>

        {/* Counter Tab */}
        <TabsContent value='counter' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <SettingsIcon className='h-5 w-5' />
                Counter Interaktif
              </CardTitle>
              <CardDescription>
                Contoh state management sederhana dengan shadcn/ui buttons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='text-center space-y-6'>
                <div className='text-6xl font-bold text-primary'>{count}</div>
                <div className='flex justify-center gap-3'>
                  <Button
                    variant='destructive'
                    size='lg'
                    onClick={() => setCount(count - 1)}
                  >
                    <MinusIcon className='h-4 w-4 mr-2' />
                    Kurang
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={() => setCount(0)}
                  >
                    <RotateCcwIcon className='h-4 w-4 mr-2' />
                    Reset
                  </Button>
                  <Button
                    variant='default'
                    size='lg'
                    onClick={() => setCount(count + 1)}
                  >
                    <PlusIcon className='h-4 w-4 mr-2' />
                    Tambah
                  </Button>
                </div>
                {count !== 0 && (
                  <Badge variant={count > 0 ? 'default' : 'destructive'}>
                    {count > 0 ? 'Positif' : 'Negatif'}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Form Tab */}
        <TabsContent value='form' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <UserIcon className='h-5 w-5' />
                Form Input
              </CardTitle>
              <CardDescription>
                Contoh form dengan validasi dan feedback real-time
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Nama Lengkap</Label>
                  <Input
                    id='name'
                    placeholder='Masukkan nama Anda'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='nama@email.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {(name || email) && (
                <Alert>
                  <CheckCircleIcon className='h-4 w-4' />
                  <AlertDescription>
                    {name && (
                      <span>
                        Halo <strong>{name}</strong>!{' '}
                      </span>
                    )}
                    {email && (
                      <span>
                        Email: <strong>{email}</strong>
                      </span>
                    )}
                  </AlertDescription>
                </Alert>
              )}

              <Dialog>
                <DialogTrigger asChild>
                  <Button className='w-full' disabled={!name || !email}>
                    Submit Form
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Form Submitted!</DialogTitle>
                    <DialogDescription>
                      Data Anda telah berhasil dikirim.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='space-y-2'>
                    <p>
                      <strong>Nama:</strong> {name}
                    </p>
                    <p>
                      <strong>Email:</strong> {email}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tasks Tab */}
        <TabsContent value='tasks' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Task Manager</CardTitle>
              <CardDescription>
                Contoh aplikasi todo sederhana dengan array state
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex gap-2'>
                <Input
                  placeholder='Tambah task baru...'
                  value={newTask}
                  onChange={e => setNewTask(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && addTask()}
                />
                <Button onClick={addTask} disabled={!newTask.trim()}>
                  <PlusIcon className='h-4 w-4' />
                </Button>
              </div>

              {tasks.length > 0 ? (
                <div className='space-y-2'>
                  {tasks.map((task, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between p-3 border rounded-lg'
                    >
                      <span>{task}</span>
                      <Button
                        variant='destructive'
                        size='sm'
                        onClick={() => removeTask(index)}
                      >
                        <MinusIcon className='h-4 w-4' />
                      </Button>
                    </div>
                  ))}
                  <div className='text-center pt-2'>
                    <Badge variant='secondary'>
                      {tasks.length} task{tasks.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                </div>
              ) : (
                <Alert>
                  <InfoIcon className='h-4 w-4' />
                  <AlertDescription>
                    Belum ada task. Tambahkan task pertama Anda!
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Info Tab */}
        <TabsContent value='info' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Tentang Halaman Ini</CardTitle>
              <CardDescription>
                Komponen dan fitur yang digunakan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <h4 className='font-semibold mb-3'>Komponen shadcn/ui:</h4>
                  <div className='space-y-2'>
                    <Badge variant='outline'>Button</Badge>
                    <Badge variant='outline'>Card</Badge>
                    <Badge variant='outline'>Input</Badge>
                    <Badge variant='outline'>Label</Badge>
                    <Badge variant='outline'>Tabs</Badge>
                    <Badge variant='outline'>Dialog</Badge>
                    <Badge variant='outline'>Alert</Badge>
                    <Badge variant='outline'>Badge</Badge>
                  </div>
                </div>
                <div>
                  <h4 className='font-semibold mb-3'>Fitur React:</h4>
                  <ul className='space-y-1 text-sm text-muted-foreground'>
                    <li>• useState hooks</li>
                    <li>• Event handling</li>
                    <li>• Conditional rendering</li>
                    <li>• Array manipulation</li>
                    <li>• Form validation</li>
                    <li>• Modal dialogs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
