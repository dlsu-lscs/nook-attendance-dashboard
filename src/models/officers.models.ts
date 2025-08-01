export interface officer {
  full_name: string;
  committee_name: string;
}

export interface officer_attendance extends officer {
  hours_rendered: number;
}

export interface committee {
  committee_name: string;
}
export interface committee_attendance extends committee {
  hours_rendered: number;
}
