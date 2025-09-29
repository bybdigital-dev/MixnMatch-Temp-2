import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calendar, Phone, Mail, MapPin, MessageSquare, Eye, Clock, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  suburb: string;
  services: string[];
  message: string;
  status: 'new' | 'contacted' | 'quoted' | 'completed';
  createdAt: string;
  updatedAt: string;
}

const statusColors = {
  new: 'bg-blue-100 text-blue-800 border-blue-200',
  contacted: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  quoted: 'bg-purple-100 text-purple-800 border-purple-200',
  completed: 'bg-green-100 text-green-800 border-green-200'
};

const statusIcons = {
  new: Eye,
  contacted: Phone,
  quoted: MessageSquare,
  completed: CheckCircle
};

export default function AdminDashboard() {
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);
  const queryClient = useQueryClient();

  const { data: inquiriesResponse, isLoading } = useQuery({
    queryKey: ['/api/admin/inquiries'],
    queryFn: async () => {
      const response = await fetch('/api/admin/inquiries');
      if (!response.ok) throw new Error('Failed to fetch inquiries');
      return response.json();
    }
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      return apiRequest('PATCH', `/api/admin/inquiries/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/inquiries'] });
    }
  });

  const inquiries: ContactInquiry[] = inquiriesResponse?.inquiries || [];

  const handleStatusUpdate = (id: string, status: string) => {
    updateStatusMutation.mutate({ id, status });
  };

  const getStatusCount = (status: string) => {
    return inquiries.filter(inquiry => inquiry.status === status).length;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">Loading inquiries...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6" data-testid="admin-dashboard">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage customer inquiries and quotes
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(statusColors).map(([status, colorClass]) => {
          const count = getStatusCount(status);
          const IconComponent = statusIcons[status as keyof typeof statusIcons];
          
          return (
            <Card key={status} className="hover-elevate transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {status}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inquiries List */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Recent Inquiries ({inquiries.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {inquiries.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No inquiries yet. Waiting for customers to submit the contact form.
                </div>
              ) : (
                inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className={`p-4 border rounded-lg hover-elevate transition-all duration-300 cursor-pointer ${
                      selectedInquiry?.id === inquiry.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedInquiry(inquiry)}
                    data-testid={`inquiry-card-${inquiry.id}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground truncate">
                            {inquiry.name}
                          </h3>
                          <Badge className={statusColors[inquiry.status]}>
                            {inquiry.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{inquiry.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{inquiry.suburb}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          {inquiry.services.slice(0, 2).map((service) => (
                            <Badge key={service} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                          {inquiry.services.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{inquiry.services.length - 2} more
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {inquiry.message}
                        </p>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {format(new Date(inquiry.createdAt), 'MMM d, h:mm a')}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Inquiry Details */}
        <div className="space-y-4">
          {selectedInquiry ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Inquiry Details</span>
                  <Badge className={statusColors[selectedInquiry.status]}>
                    {selectedInquiry.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{selectedInquiry.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Submitted {format(new Date(selectedInquiry.createdAt), 'MMMM d, yyyy \'at\' h:mm a')}
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={`mailto:${selectedInquiry.email}`}
                      className="text-primary hover:underline"
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={`tel:${selectedInquiry.phone}`}
                      className="text-primary hover:underline"
                    >
                      {selectedInquiry.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedInquiry.suburb}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Services Requested</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInquiry.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Message</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedInquiry.message}
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Update Status</h4>
                  <Select
                    value={selectedInquiry.status}
                    onValueChange={(status) => handleStatusUpdate(selectedInquiry.id, status)}
                    disabled={updateStatusMutation.isPending}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="quoted">Quoted</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Select an inquiry to view details
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}