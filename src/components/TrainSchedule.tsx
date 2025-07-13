import { Train, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Train as TrainType, Station } from '@/data/trainData';

interface TrainScheduleProps {
  train: TrainType;
  onNewSearch: () => void;
}

export const TrainSchedule = ({ train, onNewSearch }: TrainScheduleProps) => {
  const formatTime = (time: string) => {
    if (time === 'START' || time === 'END') return time;
    return time;
  };

  const getHaltColor = (halt: string) => {
    if (halt === '-') return 'bg-muted text-muted-foreground';
    const minutes = parseInt(halt);
    if (minutes <= 2) return 'bg-time-green/10 text-time-green';
    if (minutes <= 10) return 'bg-delay-orange/10 text-delay-orange';
    return 'bg-destructive/10 text-destructive';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Train Header */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Train className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {train.train_name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-schedule">
                    Train No: {train.train_no}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-station-gray">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{train.source}</span>
                <ArrowRight className="w-4 h-4" />
                <span className="font-medium">{train.destination}</span>
              </div>
            </div>
            
            <button
              onClick={onNewSearch}
              className="px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 rounded-lg transition-smooth"
            >
              New Search
            </button>
          </div>
        </CardHeader>
      </Card>

      {/* Schedule Table */}
      <Card className="shadow-schedule">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-train-blue" />
            Schedule Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-station border-b">
                  <th className="text-left p-4 font-semibold text-sm text-foreground">Station</th>
                  <th className="text-left p-4 font-semibold text-sm text-foreground">Code</th>
                  <th className="text-center p-4 font-semibold text-sm text-foreground">Arrival</th>
                  <th className="text-center p-4 font-semibold text-sm text-foreground">Departure</th>
                  <th className="text-center p-4 font-semibold text-sm text-foreground">Halt</th>
                  <th className="text-right p-4 font-semibold text-sm text-foreground">Distance (km)</th>
                </tr>
              </thead>
              <tbody>
                {train.route.map((station: Station, index: number) => (
                  <tr 
                    key={index} 
                    className={`border-b border-border hover:bg-muted/30 transition-smooth ${
                      index === 0 || index === train.route.length - 1 
                        ? 'bg-train-blue-light/20' 
                        : ''
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {(index === 0 || index === train.route.length - 1) && (
                          <div className="w-2 h-2 bg-train-blue rounded-full" />
                        )}
                        <span className="font-medium text-foreground">
                          {station.station_name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="font-schedule text-xs">
                        {station.station_code}
                      </Badge>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`font-schedule font-medium ${
                        station.arrival === 'START' 
                          ? 'text-time-green' 
                          : 'text-foreground'
                      }`}>
                        {formatTime(station.arrival)}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`font-schedule font-medium ${
                        station.departure === 'END' 
                          ? 'text-destructive' 
                          : 'text-foreground'
                      }`}>
                        {formatTime(station.departure)}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <Badge 
                        variant="secondary" 
                        className={`font-schedule text-xs ${getHaltColor(station.halt)}`}
                      >
                        {station.halt}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <span className="font-schedule text-muted-foreground">
                        {station.distance || '-'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card className="bg-muted/30">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-train-blue rounded-full" />
              <span>Origin/Destination</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-time-green/10 text-time-green text-xs">≤2 min</Badge>
              <span>Short halt</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-delay-orange/10 text-delay-orange text-xs">3-10 min</Badge>
              <span>Medium halt</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-destructive/10 text-destructive text-xs">&gt;10 min</Badge>
              <span>Long halt</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};