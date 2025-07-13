// Mock train schedule data for Indian Railways
export interface Station {
  station_name: string;
  station_code: string;
  arrival: string;
  departure: string;
  halt: string;
  distance?: string;
}

export interface Train {
  train_no: string;
  train_name: string;
  source: string;
  destination: string;
  route: Station[];
}

export const trainDatabase: Train[] = [
  {
    train_no: "12903",
    train_name: "Golden Temple Mail",
    source: "Mumbai Central",
    destination: "Amritsar Junction", 
    route: [
      {
        station_name: "Mumbai Central",
        station_code: "BCT",
        arrival: "START",
        departure: "18:55",
        halt: "-",
        distance: "0"
      },
      {
        station_name: "Surat",
        station_code: "ST", 
        arrival: "21:45",
        departure: "21:50",
        halt: "5 min",
        distance: "263"
      },
      {
        station_name: "Vadodara Junction",
        station_code: "BRC",
        arrival: "23:10",
        departure: "23:15",
        halt: "5 min", 
        distance: "392"
      },
      {
        station_name: "Ratlam Junction",
        station_code: "RTM",
        arrival: "01:50",
        departure: "01:55",
        halt: "5 min",
        distance: "589"
      },
      {
        station_name: "Kota Junction",
        station_code: "KOTA",
        arrival: "04:40",
        departure: "04:50",
        halt: "10 min",
        distance: "848"
      },
      {
        station_name: "New Delhi",
        station_code: "NDLS",
        arrival: "09:55",
        departure: "10:30",
        halt: "35 min",
        distance: "1384"
      },
      {
        station_name: "Amritsar Junction",
        station_code: "ASR",
        arrival: "16:45",
        departure: "END",
        halt: "-",
        distance: "1839"
      }
    ]
  },
  {
    train_no: "12002",
    train_name: "Shatabdi Express",
    source: "New Delhi",
    destination: "Kalka",
    route: [
      {
        station_name: "New Delhi",
        station_code: "NDLS",
        arrival: "START",
        departure: "07:40",
        halt: "-",
        distance: "0"
      },
      {
        station_name: "Ambala Cantonment",
        station_code: "UMB",
        arrival: "09:53",
        departure: "09:58",
        halt: "5 min",
        distance: "200"
      },
      {
        station_name: "Chandigarh",
        station_code: "CDG",
        arrival: "10:45",
        departure: "10:50",
        halt: "5 min",
        distance: "258"
      },
      {
        station_name: "Kalka",
        station_code: "KLK",
        arrival: "11:30",
        departure: "END",
        halt: "-",
        distance: "288"
      }
    ]
  },
  {
    train_no: "12951",
    train_name: "Mumbai Rajdhani",
    source: "Mumbai Central",
    destination: "New Delhi",
    route: [
      {
        station_name: "Mumbai Central",
        station_code: "BCT",
        arrival: "START", 
        departure: "16:35",
        halt: "-",
        distance: "0"
      },
      {
        station_name: "Borivali",
        station_code: "BVI",
        arrival: "16:58",
        departure: "17:00",
        halt: "2 min",
        distance: "29"
      },
      {
        station_name: "Surat",
        station_code: "ST",
        arrival: "19:15",
        departure: "19:18",
        halt: "3 min",
        distance: "263"
      },
      {
        station_name: "Vadodara Junction",
        station_code: "BRC",
        arrival: "20:32",
        departure: "20:37",
        halt: "5 min",
        distance: "392"
      },
      {
        station_name: "Ratlam Junction",
        station_code: "RTM",
        arrival: "22:43",
        departure: "22:45",
        halt: "2 min",
        distance: "589"
      },
      {
        station_name: "Kota Junction",
        station_code: "KOTA",
        arrival: "01:10",
        departure: "01:15",
        halt: "5 min",
        distance: "848"
      },
      {
        station_name: "New Delhi",
        station_code: "NDLS",
        arrival: "08:35",
        departure: "END",
        halt: "-",
        distance: "1384"
      }
    ]
  },
  {
    train_no: "12626",
    train_name: "Kerala Express",
    source: "New Delhi",
    destination: "Thiruvananthapuram Central",
    route: [
      {
        station_name: "New Delhi",
        station_code: "NDLS",
        arrival: "START",
        departure: "11:55",
        halt: "-",
        distance: "0"
      },
      {
        station_name: "Mathura Junction",
        station_code: "MTJ",
        arrival: "13:33",
        departure: "13:35",
        halt: "2 min",
        distance: "145"
      },
      {
        station_name: "Agra Cantonment",
        station_code: "AGC",
        arrival: "14:15",
        departure: "14:20",
        halt: "5 min",
        distance: "199"
      },
      {
        station_name: "Jhansi Junction",
        station_code: "JHS",
        arrival: "16:58",
        departure: "17:08",
        halt: "10 min",
        distance: "415"
      },
      {
        station_name: "Bhopal Junction",
        station_code: "BPL",
        arrival: "21:15",
        departure: "21:25",
        halt: "10 min",
        distance: "708"
      },
      {
        station_name: "Nagpur",
        station_code: "NGP",
        arrival: "03:15",
        departure: "03:25",
        halt: "10 min",
        distance: "1087"
      },
      {
        station_name: "Chennai Central",
        station_code: "MAS",
        arrival: "17:30",
        departure: "18:15",
        halt: "45 min",
        distance: "1768"
      },
      {
        station_name: "Thiruvananthapuram Central",
        station_code: "TVC",
        arrival: "04:15",
        departure: "END",
        halt: "-",
        distance: "2483"
      }
    ]
  }
];

export const getTrainByNumber = (trainNumber: string): Train | null => {
  return trainDatabase.find(train => train.train_no === trainNumber) || null;
};