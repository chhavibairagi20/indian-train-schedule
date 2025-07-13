import { useState } from 'react';
import { Train, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TrainSearchProps {
  onSearch: (trainNumber: string) => void;
  isLoading: boolean;
}

export const TrainSearch = ({ onSearch, isLoading }: TrainSearchProps) => {
  const [trainNumber, setTrainNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trainNumber.trim()) {
      onSearch(trainNumber.trim());
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-search bg-gradient-card">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
          <Train className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Train Schedule
        </CardTitle>
        <p className="text-muted-foreground">
          Enter train number to view schedule
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="trainNumber" className="text-sm font-medium text-foreground">
              Train Number
            </label>
            <Input
              id="trainNumber"
              type="text"
              placeholder="e.g., 12903"
              value={trainNumber}
              onChange={(e) => setTrainNumber(e.target.value)}
              className="h-12 text-base transition-smooth focus:shadow-search"
              disabled={isLoading}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-smooth"
            disabled={!trainNumber.trim() || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Searching...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Train
              </div>
            )}
          </Button>
        </form>
        
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-2">
            Try these sample train numbers:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['12903', '12002', '12951', '12626'].map((number) => (
              <button
                key={number}
                onClick={() => setTrainNumber(number)}
                className="px-3 py-1 text-xs bg-train-blue-light hover:bg-train-blue hover:text-primary-foreground rounded-full transition-smooth"
                disabled={isLoading}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};