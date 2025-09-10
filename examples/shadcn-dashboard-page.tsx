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
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  BarChart3Icon,
  UsersIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  PlusIcon,
  SettingsIcon,
  BellIcon,
  SearchIcon,
  FilterIcon,
} from 'lucide-react';

interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  role: string;
}

export default function ShadcnDashboardPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'active',
      role: 'User',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'inactive',
      role: 'User',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'User' });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const stats = [
    {
      title: 'Total Users',
      value: users.length,
      icon: UsersIcon,
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      title: 'Active Sessions',
      value: users.filter(u => u.status === 'active').length,
      icon: BarChart3Icon,
      change: '+8%',
      changeType: 'positive' as const,
    },
    {
      title: 'Orders',
      value: 1234,
      icon: ShoppingCartIcon,
      change: '-2%',
      changeType: 'negative' as const,
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: TrendingUpIcon,
      change: '+15%',
      changeType: 'positive' as const,
    },
  ];

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addUser = () => {
    if (newUser.name && newUser.email) {
      const user: User = {
        id: Date.now(),
        name: newUser.name,
        email: newUser.email,
        status: 'active',
        role: newUser.role,
      };
      setUsers([...users, user]);
      setNewUser({ name: '', email: '', role: 'User' });
      setIsDialogOpen(false);
    }
  };

  const toggleUserStatus = (id: number) => {
    setUsers(
      users.map(user =>
        user.id === id
          ? {
              ...user,
              status: user.status === 'active' ? 'inactive' : 'active',
            }
          : user
      )
    );
  };

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <div className='border-b'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
              <p className='text-muted-foreground'>
                Kelola pengguna dan monitor statistik aplikasi
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <Button variant='outline' size='icon'>
                <BellIcon className='h-4 w-4' />
              </Button>
              <Button variant='outline' size='icon'>
                <SettingsIcon className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8 space-y-8'>
        {/* Stats Cards */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  {stat.title}
                </CardTitle>
                <stat.icon className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{stat.value}</div>
                <p className='text-xs text-muted-foreground'>
                  <span
                    className={
                      stat.changeType === 'positive'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {stat.change}
                  </span>{' '}
                  dari bulan lalu
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* User Management */}
        <Card>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle>Manajemen Pengguna</CardTitle>
                <CardDescription>
                  Kelola pengguna aplikasi dan status mereka
                </CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <PlusIcon className='h-4 w-4 mr-2' />
                    Tambah User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Tambah Pengguna Baru</DialogTitle>
                    <DialogDescription>
                      Masukkan informasi pengguna baru
                    </DialogDescription>
                  </DialogHeader>
                  <div className='space-y-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='new-name'>Nama</Label>
                      <Input
                        id='new-name'
                        value={newUser.name}
                        onChange={e =>
                          setNewUser({ ...newUser, name: e.target.value })
                        }
                        placeholder='Nama lengkap'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='new-email'>Email</Label>
                      <Input
                        id='new-email'
                        type='email'
                        value={newUser.email}
                        onChange={e =>
                          setNewUser({ ...newUser, email: e.target.value })
                        }
                        placeholder='email@example.com'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='new-role'>Role</Label>
                      <select
                        id='new-role'
                        value={newUser.role}
                        onChange={e =>
                          setNewUser({ ...newUser, role: e.target.value })
                        }
                        className='w-full px-3 py-2 border border-input bg-background rounded-md'
                      >
                        <option value='User'>User</option>
                        <option value='Admin'>Admin</option>
                        <option value='Moderator'>Moderator</option>
                      </select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant='outline'
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Batal
                    </Button>
                    <Button
                      onClick={addUser}
                      disabled={!newUser.name || !newUser.email}
                    >
                      Tambah User
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {/* Search */}
            <div className='flex items-center gap-2 mb-4'>
              <div className='relative flex-1'>
                <SearchIcon className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  placeholder='Cari pengguna...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='pl-8'
                />
              </div>
              <Button variant='outline' size='icon'>
                <FilterIcon className='h-4 w-4' />
              </Button>
            </div>

            {/* Users List */}
            <div className='space-y-3'>
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <div
                    key={user.id}
                    className='flex items-center justify-between p-4 border rounded-lg'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                        <UsersIcon className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='font-medium'>{user.name}</p>
                        <p className='text-sm text-muted-foreground'>
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Badge
                        variant={
                          user.role === 'Admin' ? 'default' : 'secondary'
                        }
                      >
                        {user.role}
                      </Badge>
                      <Badge
                        variant={
                          user.status === 'active' ? 'default' : 'destructive'
                        }
                      >
                        {user.status}
                      </Badge>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        Toggle Status
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <Alert>
                  <SearchIcon className='h-4 w-4' />
                  <AlertDescription>
                    Tidak ada pengguna yang ditemukan dengan kriteria pencarian
                    &ldquo;{searchTerm}&rdquo;
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <div className='grid gap-6 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Aktivitas Terbaru</CardTitle>
              <CardDescription>
                Log aktivitas pengguna dalam 24 jam terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                {[
                  {
                    action: 'User login',
                    user: 'John Doe',
                    time: '2 menit lalu',
                  },
                  {
                    action: 'New user registered',
                    user: 'Jane Smith',
                    time: '15 menit lalu',
                  },
                  {
                    action: 'Profile updated',
                    user: 'Bob Johnson',
                    time: '1 jam lalu',
                  },
                  {
                    action: 'Password changed',
                    user: 'Alice Brown',
                    time: '3 jam lalu',
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between py-2'
                  >
                    <div>
                      <p className='text-sm font-medium'>{activity.action}</p>
                      <p className='text-xs text-muted-foreground'>
                        {activity.user}
                      </p>
                    </div>
                    <Badge variant='outline'>{activity.time}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>
                Status kesehatan sistem saat ini
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {[
                  { service: 'Database', status: 'Healthy', uptime: '99.9%' },
                  { service: 'API Server', status: 'Healthy', uptime: '99.8%' },
                  {
                    service: 'File Storage',
                    status: 'Warning',
                    uptime: '98.5%',
                  },
                  {
                    service: 'Email Service',
                    status: 'Healthy',
                    uptime: '99.7%',
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between'
                  >
                    <div>
                      <p className='text-sm font-medium'>{service.service}</p>
                      <p className='text-xs text-muted-foreground'>
                        Uptime: {service.uptime}
                      </p>
                    </div>
                    <Badge
                      variant={
                        service.status === 'Healthy'
                          ? 'default'
                          : service.status === 'Warning'
                            ? 'destructive'
                            : 'secondary'
                      }
                    >
                      {service.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
