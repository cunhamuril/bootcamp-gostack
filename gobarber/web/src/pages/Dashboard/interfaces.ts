export interface IMonthAvailabilityItem {
  day: number;
  available: boolean;
}

export interface IAppointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}
