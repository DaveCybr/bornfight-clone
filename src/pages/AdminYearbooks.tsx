import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useYearbooks, Yearbook } from '@/hooks/useYearbooks';
import { YearbookFormDialog } from '@/components/admin/YearbookFormDialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
 import { Plus, Pencil, Trash2, Search, LogOut, Book, ExternalLink, Settings, Wrench } from 'lucide-react';
 import { Switch } from '@/components/ui/switch';
 import { Label } from '@/components/ui/label';
 import { Textarea } from '@/components/ui/textarea';
 import { useMaintenanceMode } from '@/hooks/useMaintenanceMode';
 import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
 } from '@/components/ui/sheet';

export default function AdminYearbooks() {
  const { user, loading: authLoading, signOut } = useAuth();
  const { yearbooks, loading, addYearbook, updateYearbook, deleteYearbook } = useYearbooks();
 const { isMaintenanceMode, maintenanceMessage, toggleMaintenanceMode, isUpdating } = useMaintenanceMode();
  const [searchQuery, setSearchQuery] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [editingYearbook, setEditingYearbook] = useState<Yearbook | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingYearbook, setDeletingYearbook] = useState<Yearbook | null>(null);
 const [tempMessage, setTempMessage] = useState(maintenanceMessage);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin');
    }
  }, [user, authLoading, navigate]);

  const filteredYearbooks = yearbooks.filter((yb) =>
    yb.school_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    yb.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = () => {
    setEditingYearbook(null);
    setFormOpen(true);
  };

  const handleEdit = (yearbook: Yearbook) => {
    setEditingYearbook(yearbook);
    setFormOpen(true);
  };

  const handleDelete = (yearbook: Yearbook) => {
    setDeletingYearbook(yearbook);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!deletingYearbook) return;
    
    try {
      await deleteYearbook(deletingYearbook.id);
      toast({
        title: 'Berhasil',
        description: 'Yearbook berhasil dihapus'
      });
    } catch (error) {
      toast({
        title: 'Gagal',
        description: 'Gagal menghapus yearbook',
        variant: 'destructive'
      });
    } finally {
      setDeleteDialogOpen(false);
      setDeletingYearbook(null);
    }
  };

  const handleFormSubmit = async (data: Omit<Yearbook, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      if (editingYearbook) {
        await updateYearbook(editingYearbook.id, data);
        toast({
          title: 'Berhasil',
          description: 'Yearbook berhasil diupdate'
        });
      } else {
        await addYearbook(data);
        toast({
          title: 'Berhasil',
          description: 'Yearbook berhasil ditambahkan'
        });
      }
    } catch (error) {
      toast({
        title: 'Gagal',
        description: editingYearbook ? 'Gagal mengupdate yearbook' : 'Gagal menambahkan yearbook',
        variant: 'destructive'
      });
      throw error;
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Book className="w-6 h-6 text-accent" />
              <h1 className="text-xl font-bold">Admin Digital Yearbook</h1>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="/digital-yearbook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                Lihat Website <ExternalLink className="w-3 h-3" />
              </a>
             <Sheet>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="sm">
                   <Settings className="w-4 h-4 mr-2" />
                   Settings
                 </Button>
               </SheetTrigger>
               <SheetContent className="bg-card border-border">
                 <SheetHeader>
                   <SheetTitle>Site Settings</SheetTitle>
                   <SheetDescription>
                     Kelola pengaturan website
                   </SheetDescription>
                 </SheetHeader>
                 <div className="mt-6 space-y-6">
                   {/* Maintenance Mode Toggle */}
                   <div className="space-y-4">
                     <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-border">
                       <div className="flex items-center gap-3">
                         <Wrench className="w-5 h-5 text-accent" />
                         <div>
                           <Label htmlFor="maintenance-mode" className="font-medium">
                             Maintenance Mode
                           </Label>
                           <p className="text-xs text-muted-foreground mt-0.5">
                             Aktifkan untuk menutup akses website sementara
                           </p>
                         </div>
                       </div>
                       <Switch
                         id="maintenance-mode"
                         checked={isMaintenanceMode}
                         onCheckedChange={(checked) => toggleMaintenanceMode(checked, tempMessage)}
                         disabled={isUpdating}
                       />
                     </div>
                     
                     {/* Maintenance Message */}
                     <div className="space-y-2">
                       <Label htmlFor="maintenance-message">Pesan Maintenance</Label>
                       <Textarea
                         id="maintenance-message"
                         placeholder="Kami sedang melakukan pemeliharaan..."
                         value={tempMessage || maintenanceMessage}
                         onChange={(e) => setTempMessage(e.target.value)}
                         className="min-h-24"
                       />
                       <Button 
                         size="sm" 
                         variant="outline"
                         onClick={() => toggleMaintenanceMode(isMaintenanceMode, tempMessage)}
                         disabled={isUpdating}
                       >
                         Simpan Pesan
                       </Button>
                     </div>
                   </div>
 
                   {/* Status Indicator */}
                   <div className={`p-4 rounded-lg border ${isMaintenanceMode ? 'bg-destructive/10 border-destructive/30' : 'bg-green-500/10 border-green-500/30'}`}>
                     <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${isMaintenanceMode ? 'bg-destructive animate-pulse' : 'bg-green-500'}`} />
                       <span className="text-sm font-medium">
                         {isMaintenanceMode ? 'Website sedang dalam maintenance' : 'Website aktif dan online'}
                       </span>
                     </div>
                   </div>
                 </div>
               </SheetContent>
             </Sheet>
              <span className="text-sm text-muted-foreground">{user?.email}</span>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Cari nama sekolah atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={handleAdd}>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Yearbook
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-card/50 border border-border/50">
              <p className="text-sm text-muted-foreground">Total Yearbooks</p>
              <p className="text-2xl font-bold">{yearbooks.length}</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border/50">
              <p className="text-sm text-muted-foreground">Tahun Terbaru</p>
              <p className="text-2xl font-bold">
                {yearbooks.length > 0 ? Math.max(...yearbooks.map(y => y.year)) : '-'}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border/50">
              <p className="text-sm text-muted-foreground">Kota/Kabupaten</p>
              <p className="text-2xl font-bold">
                {new Set(yearbooks.map(y => y.location?.split(',')[0]).filter(Boolean)).size}
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-border/50 bg-card/50 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-muted-foreground">
                Loading...
              </div>
            ) : filteredYearbooks.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                {searchQuery ? 'Tidak ada yearbook yang ditemukan' : 'Belum ada yearbook'}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">Preview</TableHead>
                    <TableHead>Nama Sekolah</TableHead>
                    <TableHead>Tahun</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredYearbooks.map((yearbook) => (
                    <TableRow key={yearbook.id}>
                      <TableCell>
                        <img
                          src={yearbook.thumbnail_url}
                          alt={yearbook.school_name}
                          className="w-16 h-12 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{yearbook.school_name}</TableCell>
                      <TableCell>{yearbook.year}</TableCell>
                      <TableCell className="text-muted-foreground">{yearbook.location || '-'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(yearbook)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(yearbook)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </motion.div>
      </main>

      {/* Form Dialog */}
      <YearbookFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        yearbook={editingYearbook}
        onSubmit={handleFormSubmit}
      />

      {/* Delete Confirmation */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Yearbook?</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah kamu yakin ingin menghapus yearbook "{deletingYearbook?.school_name}"? 
              Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
