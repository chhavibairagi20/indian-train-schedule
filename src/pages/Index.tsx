import { useState } from 'react';
import { TrainSearch } from '@/components/TrainSearch';
import { TrainSchedule } from '@/components/TrainSchedule';
import { TrainNotFound } from '@/components/TrainNotFound';
import { getTrainByNumber, Train } from '@/data/trainData';
import { useToast } from '@/hooks/use-toast';

type AppState = 'search' | 'loading' | 'found' | 'not-found';

const Index = () => {
  const [state, setState] = useState<AppState>('search');
  const [currentTrain, setCurrentTrain] = useState<Train | null>(null);
  const [searchedNumber, setSearchedNumber] = useState<string>('');
  const { toast } = useToast();

  const handleSearch = async (trainNumber: string) => {
    setState('loading');
    setSearchedNumber(trainNumber);
    
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const train = getTrainByNumber(trainNumber);
    
    if (train) {
      setCurrentTrain(train);
      setState('found');
      toast({
        title: "Train Found!",
        description: `${train.train_name} schedule loaded successfully.`,
      });
    } else {
      setState('not-found');
      toast({
        title: "Train Not Found",
        description: `No train found with number ${trainNumber}. Please check and try again.`,
        variant: "destructive",
      });
    }
  };

  const handleNewSearch = () => {
    setState('search');
    setCurrentTrain(null);
    setSearchedNumber('');
  };

  return (
    <div className="min-h-screen bg-gradient-station py-8 px-4">
      <div className="container mx-auto">
        {state === 'search' && (
          <div className="flex items-center justify-center min-h-[80vh]">
            <TrainSearch onSearch={handleSearch} isLoading={false} />
          </div>
        )}
        
        {state === 'loading' && (
          <div className="flex items-center justify-center min-h-[80vh]">
            <TrainSearch onSearch={handleSearch} isLoading={true} />
          </div>
        )}
        
        {state === 'found' && currentTrain && (
          <div className="py-8">
            <TrainSchedule 
              train={currentTrain} 
              onNewSearch={handleNewSearch}
            />
          </div>
        )}
        
        {state === 'not-found' && (
          <div className="flex items-center justify-center min-h-[80vh]">
            <TrainNotFound 
              trainNumber={searchedNumber}
              onNewSearch={handleNewSearch}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
