import { AlertTriangle, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TrainNotFoundProps {
  trainNumber: string;
  onNewSearch: () => void;
}

export const TrainNotFound = ({ trainNumber, onNewSearch }: TrainNotFoundProps) => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-card bg-gradient-card">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 text-destructive" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">
          Train Not Found
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Train number <span className="font-schedule font-semibold text-foreground">{trainNumber}</span> was not found in our database.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold text-sm text-foreground mb-2">Available Trains:</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>12903</span>
              <span>Golden Temple Mail</span>
            </div>
            <div className="flex justify-between">
              <span>12002</span>
              <span>Shatabdi Express</span>
            </div>
            <div className="flex justify-between">
              <span>12951</span>
              <span>Mumbai Rajdhani</span>
            </div>
            <div className="flex justify-between">
              <span>12626</span>
              <span>Kerala Express</span>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={onNewSearch}
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
        >
          <Search className="w-4 h-4 mr-2" />
          Try Another Search
        </Button>
      </CardContent>
    </Card>
  );
};